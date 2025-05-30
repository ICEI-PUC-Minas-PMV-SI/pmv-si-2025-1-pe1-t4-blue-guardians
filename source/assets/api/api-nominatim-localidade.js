document.addEventListener("DOMContentLoaded", () => {
  const localInput = document.getElementById("localidadeInput");
  const latitudeInput = document.getElementById("latitude");
  const longitudeInput = document.getElementById("longitude");
  const errorElement = document.getElementById("localidadeError");

  // Cria container do dropdown para sugestões
  const dropdown = document.createElement("ul");
  dropdown.classList.add("autocomplete-dropdown", "list-group", "position-absolute");
  dropdown.style.width = localInput.offsetWidth + "px";
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

  localInput.parentNode.style.position = "relative"; // para posicionar dropdown absoluto
  localInput.parentNode.appendChild(dropdown);

  let timeout = null;
  let selectedIndex = -1; // índice do item selecionado no teclado
  let currentResults = [];

  function clearDropdown() {
    dropdown.innerHTML = "";
    dropdown.style.display = "none";
    selectedIndex = -1;
    currentResults = [];
  }

  function fillDropdown(items) {
    clearDropdown();
    if (items.length === 0) return;

    items.forEach((location, index) => {
      const city = location.address.city || location.address.town || location.address.village || location.address.county || location.address.state_district || location.address.state || location.address.region || "";
      const state = location.address.state || "";
      const country = location.address.country || "";

      const displayText = `${city}${state ? ", " + state : ""}${country ? ", " + country : ""}`;

      const li = document.createElement("li");
      li.classList.add("list-group-item", "list-group-item-action");
      li.textContent = displayText;
      li.tabIndex = 0;

      li.addEventListener("mousedown", (e) => {
        e.preventDefault();
        selectItem(index);
      });

      dropdown.appendChild(li);
    });

    dropdown.style.display = "block";
    currentResults = items;
  }

  function selectItem(index) {
    if (index < 0 || index >= currentResults.length) return;

    const location = currentResults[index];
    const city = location.address.city || location.address.town || location.address.village || location.address.county || location.address.state_district || location.address.state || location.address.region || "";
    const state = location.address.state || "";
    const country = location.address.country || "";
    const displayText = `${city}${state ? ", " + state : ""}${country ? ", " + country : ""}`;

    localInput.value = displayText;
    latitudeInput.value = location.lat;
    longitudeInput.value = location.lon;

      console.log(city,state, country,)
      console.log(latitudeInput, longitudeInput)
    clearDropdown();
  }

  function highlightItem(index) {
    const items = dropdown.querySelectorAll("li");
    items.forEach((item, i) => {
      if (i === index) {
        item.classList.add("active");
        item.scrollIntoView({ block: "nearest" });
      } else {
        item.classList.remove("active");
      }
    });
  }

  localInput.addEventListener("input", () => {
    errorElement.style.display = "none";
    const search = localInput.value.trim();
    latitudeInput.value = "";
    longitudeInput.value = "";
    clearDropdown();

    if (search.length < 3) return;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(search)}&addressdetails=1&limit=5&countrycodes=br`)
        .then(response => response.json())
        .then(data => {
          const filtered = data.filter(location => location.address.country === "Brasil");
          fillDropdown(filtered);
        })
        .catch(err => {
          console.error("Erro ao buscar localidade no Nominatim:", err);
        clearDropdown();
          const errorItem = document.createElement("li");
          errorItem.classList.add("list-group-item", "text-danger", "py-2");
          errorItem.innerHTML = `<small>⚠️ Serviço temporariamente indisponível</small>`;
          dropdown.appendChild(errorItem);
          dropdown.style.display = "block";
          
          errorElement.textContent = "Ops! Estamos com dificuldades para buscar localidades. Tente novamente.";
          errorElement.style.display = "block";
          
          setTimeout(() => errorElement.style.display = "none", 5000);
        });
    }, 300);
  });
  
  localInput.addEventListener("keydown", (e) => {
    const items = dropdown.querySelectorAll("li");
    if (dropdown.style.display === "none") return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (selectedIndex < items.length - 1) selectedIndex++;
        else selectedIndex = 0;
        highlightItem(selectedIndex);
        break;
      case "ArrowUp":
        e.preventDefault();
        if (selectedIndex > 0) selectedIndex--;
        else selectedIndex = items.length - 1;
        highlightItem(selectedIndex);
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0) selectItem(selectedIndex);
        break;
      case "Escape":
        e.preventDefault();
        clearDropdown();
        break;
    }
  });

  // Fecha dropdown se clicar fora
  document.addEventListener("click", (e) => {
    if (!localInput.parentNode.contains(e.target)) {
      clearDropdown();
    }
  });
});
