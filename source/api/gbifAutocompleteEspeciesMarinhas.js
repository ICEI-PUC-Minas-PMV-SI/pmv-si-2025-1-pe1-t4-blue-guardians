document.addEventListener("DOMContentLoaded", () => {
  console.log("Script carregado");

  const especieInput = document.getElementById("especieInput");
  const errorElement = document.getElementById("especieError");
  const btnPesquisar = document.getElementById("bnt-pesquisar");
  const resultadosDiv = document.getElementById("resultadosCards");

  let especies = [];
  let selectedScientificName = "";

  // Cria o dropdown
  const dropdown = document.createElement("ul");
  dropdown.classList.add("autocomplete-dropdown", "list-group", "position-absolute");
  Object.assign(dropdown.style, {
    zIndex: 1000,
    maxHeight: "200px",
    overflowY: "auto",
    cursor: "pointer",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "0 0 .25rem .25rem",
    paddingLeft: "0",
    marginTop: "0",
    display: "none",
    listStyleType: "none"
  });

  const updateDropdownWidth = () => {
    dropdown.style.width = especieInput.offsetWidth + "px";
  };

  window.addEventListener("resize", updateDropdownWidth);
  especieInput.parentNode.style.position = "relative";
  especieInput.parentNode.appendChild(dropdown);
  updateDropdownWidth();

  // Carrega espécies
  fetch("api/especies_marinhas.json")
    .then(response => response.json())
    .then(data => {
      especies = data;
      console.log("Espécies carregadas:", especies.length);
    });

  especieInput.addEventListener("input", () => {
    const valor = especieInput.value.trim().toLowerCase();
    dropdown.innerHTML = "";

    if (!valor) {
      dropdown.style.display = "none";
      return;
    }

    const sugestoes = especies.filter(e =>
      e.vernacularName && e.vernacularName.toLowerCase().includes(valor)
    ).slice(0, 5);

    if (sugestoes.length === 0) {
      dropdown.style.display = "none";
      return;
    }

    sugestoes.forEach(especie => {
      const item = document.createElement("li");
      item.classList.add("list-group-item");
      item.textContent = especie.vernacularName;
      item.addEventListener("click", () => {
        especieInput.value = especie.vernacularName;
        selectedScientificName = especie.scientificName;
        dropdown.style.display = "none";
      });
      dropdown.appendChild(item);
    });

    dropdown.style.display = "block";
  });

  especieInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && dropdown.firstChild) {
      e.preventDefault();
      dropdown.firstChild.click();
    }
  });

  document.addEventListener("click", (e) => {
    if (!especieInput.parentNode.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });

  // Gera um card de resultado
  const criarCard = (item) => {
    const card = document.createElement("div");
    card.className = "card";

    let imgSrc = "assets/images/mockups/tartaruga-prego.png";
    if (item.media && item.media.length > 0) {
      const mediaItem = item.media.find(m => m.identifier && m.identifier.match(/\.(jpg|jpeg|png|gif)$/i));
      if (mediaItem) {
        imgSrc = mediaItem.identifier;
      }
    }

    const scientificName = item.scientificName || "Nome científico indisponível";
    const locality = item.locality || "Localidade desconhecida";
    const eventDate = item.eventDate || "Data não informada";

    card.innerHTML = `
      <img src="${imgSrc}" alt="${scientificName}" />
      <div class="card-content">
        <h3>${scientificName}</h3>
        <p><strong>Local:</strong> ${locality}</p>
        <p><strong>Data do evento:</strong> ${eventDate}</p>
        <a href="https://www.gbif.org/occurrence/${item.key}" target="_blank" class="btn">Detalhes</a>
      </div>
    `;

    return card;
  };

  btnPesquisar.addEventListener("click", () => {
    const especieNome = especieInput.value.trim().toLowerCase();
    const especieEncontrada = especies.find(e => e.vernacularName.toLowerCase() === especieNome);

    if (!especieEncontrada) {
      errorElement.textContent = "Por favor, selecione uma espécie válida da lista.";
      errorElement.style.display = "block";
      return;
    }

    selectedScientificName = especieEncontrada.scientificName;
    errorElement.style.display = "none";

    const urlGBIF = `https://api.gbif.org/v1/occurrence/search?scientificName=${encodeURIComponent(selectedScientificName)}&limit=10`;

    fetch(urlGBIF)
      .then(res => res.json())
      .then(data => {
        console.log("Dados retornados do GBIF:", data);
        resultadosDiv.innerHTML = "";

        if (!data.results || data.results.length === 0) {
          resultadosDiv.innerHTML = "<p>Nenhum resultado encontrado.</p>";
          return;
        }

        data.results.forEach(item => resultadosDiv.appendChild(criarCard(item)));
      })
      .catch(err => {
        errorElement.textContent = "Erro ao buscar dados na API GBIF.";
        errorElement.style.display = "block";
        console.error(err);
      });
  });
});
