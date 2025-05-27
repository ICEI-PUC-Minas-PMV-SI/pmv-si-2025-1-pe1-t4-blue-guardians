fetch("http://localhost:3000/contents")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("conteudo-cards");

    data.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${item.imagem}" alt="${item.titulo}">
        <div class="card-content">
          <h3>${item.titulo}</h3>
          <p>${item.texto.substring(0, 100)}...</p>  <!-- um resumo curto -->
          <a href="detalhe.html?id=${item.id}" class="btn">Saber mais</a>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error("Erro ao carregar conteúdos:", err));

const tabsContainer = document.getElementById('tabs');
const cardsContainer = document.getElementById('cardsimages');

let tabData = []; // será preenchido com o JSON

function renderTabs() {
  tabsContainer.innerHTML = "";
  tabData.forEach((tab, index) => {
    const div = document.createElement('div');
    div.className = 'tab' + (index === 0 ? ' active' : '');
    div.dataset.id = tab.id;
    div.innerHTML = `
      <img src="${tab.icon}" alt="${tab.label}">
      <p>${tab.label}</p>
    `;
    tabsContainer.appendChild(div);
  });
}

function renderCards(cards) {
  cardsContainer.innerHTML = "";
  cards.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = "Card";
    cardsContainer.appendChild(img);
  });
}

function setupTabClicks() {
  tabsContainer.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab');
    if (!tab) return;

    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const tabId = tab.dataset.id;
    const selected = tabData.find(t => t.id === tabId);
    renderCards(selected.cards);
  });
}

// 🔄 Busca os dados do arquivo db.json
fetch("http://localhost:3000/tabData")
  .then(res => res.json())
  .then(data => {
    tabData = data;
    renderTabs();
    setupTabClicks();
    renderCards(tabData[0].cards); // Mostra os cards da primeira aba
  })
  .catch(err => console.error("Erro ao carregar tabData:", err));
