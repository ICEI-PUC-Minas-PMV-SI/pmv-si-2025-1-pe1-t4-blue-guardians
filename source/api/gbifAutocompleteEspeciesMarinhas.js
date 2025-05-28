document.addEventListener("DOMContentLoaded", () => {
  const especieInput = document.getElementById("especieInput");
  const errorElement = document.getElementById("especieError");
  const btnPesquisar = document.getElementById("bnt-pesquisar");

  let especies = [];
  let selectedScientificName = "";

  // Cria o dropdown de sugestões
  const dropdown = document.createElement("ul");
  dropdown.classList.add("autocomplete-dropdown", "list-group", "position-absolute");
  dropdown.style.width = especieInput.offsetWidth + "px";
  dropdown.style.zIndex = 1000;
  dropdown.style.maxHeight = "200px";
  dropdown.style.overflowY = "auto";
  dropdown.style.cursor = "pointer";
  dropdown.style.backgroundColor = "#fff";
  dropdown.style.border = "1px solid #ccc";
  dropdown.style.borderRadius = "0 0 .25rem .25rem";
  dropdown.style.paddingLeft = "0";
  dropdown.style.marginTop = "0";
  dropdown.style.display = "none";
  dropdown.style.listStyleType = "none";

  especieInput.parentNode.style.position = "relative";
  especieInput.parentNode.appendChild(dropdown);

  // Carrega o JSON local com as espécies
  fetch("api/especies_marinhas.json")
    .then(res => res.json())
    .then(data => {
      especies = data;
    })
    .catch(() => {
      errorElement.textContent = "Não foi possível carregar os dados das espécies.";
      errorElement.style.display = "block";
    });

  // Função para filtrar e mostrar sugestões pelo nome popular
  especieInput.addEventListener("input", () => {
    const query = especieInput.value.trim().toLowerCase();
    if (query.length < 2) {
      dropdown.style.display = "none";
      return;
    }

    const resultados = especies.filter(e => e.vernacularName.toLowerCase().includes(query));

    if (resultados.length === 0) {
      dropdown.style.display = "none";
      return;
    }

    dropdown.innerHTML = "";
    resultados.forEach(specie => {
      const li = document.createElement("li");
      li.classList.add("list-group-item", "list-group-item-action");
      li.textContent = specie.vernacularName;
      li.dataset.scientificName = specie.scientificName;
      li.dataset.vernacularName = specie.vernacularName;
      li.addEventListener("click", () => {
        especieInput.value = li.dataset.vernacularName;  // mostra o nome popular no input
        selectedScientificName = li.dataset.scientificName; // guarda o nome científico para pesquisa
        dropdown.style.display = "none";
        errorElement.style.display = "none";
      });
      dropdown.appendChild(li);
    });
    dropdown.style.display = "block";
  });

  document.addEventListener("click", (e) => {
    if (!especieInput.parentNode.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });

  // Quando clicar no botão Pesquisar, use o nome científico salvo e exiba os cards
  btnPesquisar.addEventListener("click", () => {
    if (!selectedScientificName) {
      errorElement.textContent = "Por favor, selecione uma espécie da lista.";
      errorElement.style.display = "block";
      return;
    }
    errorElement.style.display = "none";

    const urlGBIF = `https://api.gbif.org/v1/occurrence/search?scientificName=${encodeURIComponent(selectedScientificName)}&limit=10`;

    fetch(urlGBIF)
      .then(res => res.json())
      .then(data => {
        console.log("Dados retornados do GBIF:", data);

        const resultadosDiv = document.getElementById("resultadosCards");
        resultadosDiv.innerHTML = ""; // Limpa resultados anteriores

        if (!data.results || data.results.length === 0) {
          resultadosDiv.innerHTML = "<p>Nenhum resultado encontrado.</p>";
          return;
        }

        data.results.forEach(item => {
          const card = document.createElement("div");
          card.className = "card";

          // Tenta pegar a primeira imagem disponível no campo media
          let imgSrc = "assets/images/mockups/tartaruga-prego.png"; // imagem padrão

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

          resultadosDiv.appendChild(card);
        });
      })
      .catch(err => {
        errorElement.textContent = "Erro ao buscar dados na API GBIF.";
        errorElement.style.display = "block";
        console.error(err);
      });
  });
});
