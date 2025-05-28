document.addEventListener("DOMContentLoaded", () => {
  const localInput = document.getElementById("localidadeInput");
  const datalist = document.getElementById("localidades");

  let timeout = null;

  localInput.addEventListener("input", function () {
    const search = this.value.trim();

    clearTimeout(timeout);
    datalist.innerHTML = "";

    if (search.length < 3) return;

    timeout = setTimeout(() => {
      fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(search)}&addressdetails=1&limit=5`)
        .then(response => response.json())
        .then(data => {
          const filtered = data.filter(location => location.address.country === "Brasil");

          filtered.forEach(location => {
            const city = location.address.city || location.address.town || location.address.village || location.address.county || location.address.state_district || location.address.state || location.address.region || "";
            const state = location.address.state || "";
            const country = location.address.country || "";

            const displayText = `${city}${state ? ", " + state : ""}${country ? ", " + country : ""}`;

            const option = document.createElement("option");
            option.value = displayText;
            option.dataset.lat = location.lat;
            option.dataset.lon = location.lon;
            datalist.appendChild(option);
          });
        })
        .catch(error => {
          console.error("Erro ao buscar localidade no Nominatim:", error);
        });
    }, 200);
  });

  localInput.addEventListener("change", () => {
    const value = localInput.value;
    const option = [...datalist.options].find(opt => opt.value === value);

    if (option) {
      document.getElementById("latitude").value = option.dataset.lat;
      document.getElementById("longitude").value = option.dataset.lon;
    } else {
      document.getElementById("latitude").value = "";
      document.getElementById("longitude").value = "";
    }
  });
});
