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
          <a href="content.html?id=${item.id}" class="btn">Saber mais</a>
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
  tabData.forEach((tab) => {
    const div = document.createElement('div');
    // marca active na aba 'teacher'
    div.className = 'tab' + (tab.id === 'teacher' ? ' active' : '');
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

    // Renderiza os cards da aba 'teacher' na inicialização
    const teacherTab = tabData.find(t => t.id === 'teacher');
    if (teacherTab) {
      renderCards(teacherTab.cards);
    }
  })
  .catch(err => console.error("Erro ao carregar tabData:", err));

// Conteúdos por ID
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (id) {
fetch(`http://localhost:3000/contents/${id}`)
    .then(response => {
    if (!response.ok) throw new Error("Conteúdo não encontrado");
    return response.json();
    })
    .then(data => {
    const container = document.getElementById("detail-container");
    const container_slides = document.getElementById("slides");
    container.innerHTML = `
        <h2 style="text-align: center;">${data.titulo}</h2>
        <div style="display: flex; justify-content: center; align-items: center; margin: 20px 0;">
            <img src="${data.imagem}" alt="${data.titulo}" style="max-width: 100%; height: 300px; border-radius: 2px; object-fit: cover;">
        </div>
        <p>${data.descricao}</p>
    `;
    container_slides.innerHTML = `
    <div class="slide">
      <iframe src="${data.video1}?autoplay=1" title="ECOSSISTEMAS AQUÁTICOS" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <iframe src="${data.video1}" title="ECOSSISTEMAS AQUÁTICOS" allowfullscreen></iframe>
    </div>
    <div class="slide">
        <iframe src="${data.video2}?autoplay=1" title="ECOSSISTEMAS AQUÁTICOS" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <iframe src="${data.video2}" title="ECOSSISTEMAS AQUÁTICOS" allowfullscreen></iframe>
    </div>
    <div class="slide">
        <iframe src="${data.video3}?autoplay=1" title="ECOSSISTEMAS AQUÁTICOS" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <iframe src="${data.video3}" title="ECOSSISTEMAS AQUÁTICOS" allowfullscreen></iframe>
    </div>
    `;
    })
    .catch(error => {
    document.getElementById("detail-container").innerHTML = "<p>Erro ao carregar conteúdo.</p>";
    console.error("Erro:", error);
    });
} else {
document.getElementById("detail-container").innerHTML = "<p>Conteúdo não especificado.</p>";
}

