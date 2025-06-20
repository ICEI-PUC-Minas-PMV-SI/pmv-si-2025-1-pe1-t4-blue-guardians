fetch("http://localhost:3001/contents")
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
  cards.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = "Card";

    // Adiciona o clique para abrir a tela content_type.html com o tipo correto
    img.addEventListener('click', () => {
      // Pega qual aba está ativa
      const activeTab = document.querySelector('.tab.active');
      if (activeTab) {
        const tabId = activeTab.dataset.id;
        // window.location.href = `content_type.html?type=${tabId}`;
      }
    });

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
    renderCards(selected.cards);  // Só muda os cards, sem redirecionar!
  });
}

// 🔄 Busca os dados do arquivo db.json
fetch("http://localhost:3001/tabData")
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
fetch(`http://localhost:3001/contents/${id}`)
    .then(response => {
    if (!response.ok) throw new Error("Conteúdo não encontrado");
    return response.json();
    })
    .then(data => {
    const container = document.getElementById("detail-container");
    const container_slides = document.getElementById("slides");
    container.innerHTML = `
        <div style="display: flex; align-items: center; flex-wrap: wrap; justify-content: center; margin: 20px 0;">
          <div style="flex: 1; min-width: 250px;">
            <h2 style="text-align: left; font-size: 28px;">${data.titulo}</h2>
            <p style="text-align: left; font-size: 16px; margin: 20px 0;">
              Bem-vindo ao nosso espaço de conhecimento! Aqui você vai <br>explorar os fascinantes ecossistemas marinhos, aprender sobre <br>espécies incríveis e entender a importância da conservação dos <br>oceanos. Vamos juntos proteger a vida marinha!
            </p>
          </div>
          <img src="${data.imagem}" alt="${data.titulo}" style="flex: 1; max-width: 500px; height: 300px; border-radius: 2px; object-fit: cover;">
        </div>
        <p>${data.descricao}</p>
    `;
    container_slides.innerHTML = `
    <div class="slide">
      <iframe src="${data.video1}?autoplay=1" title="${data.titulo}" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <iframe src="${data.video1}" title="${data.titulo}" allowfullscreen></iframe>
    </div>
    <div class="slide">
        <iframe src="${data.video2}?autoplay=1" title="${data.titulo}" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <iframe src="${data.video2}" title="${data.titulo}" allowfullscreen></iframe>
    </div>
    <div class="slide">
        <iframe src="${data.video3}?autoplay=1" title="${data.titulo}" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <iframe src="${data.video3}" title="${data.titulo}" allowfullscreen></iframe>
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

// Envia Feedback
document.getElementById("btn-send-feedback").addEventListener("click", () => {
  const feedbackText = document.getElementById("feedback-text").value.trim();
  const usuario = "Anônimo"; // você pode permitir que o usuário informe o nome, se quiser
  const contentId = id; // o 'id' do conteúdo já foi capturado via URLSearchParams

  if (!feedbackText) {
    alert("Por favor, digite um comentário antes de enviar.");
    return;
  }

  const novoFeedback = {
    contentId: parseInt(contentId),
    usuario: usuario,
    texto: feedbackText,
    data: new Date().toISOString()
  };

  fetch("http://localhost:3001/feedbacks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(novoFeedback)
  })
  .then(response => {
    if (!response.ok) throw new Error("Erro ao enviar feedback");
    return response.json();
  })
  .then(data => {
    alert("Feedback enviado com sucesso!");
    document.getElementById("feedback-text").value = "";
    carregarFeedbacks(contentId); // recarrega comentários se quiser mostrar na tela
  })
  .catch(err => {
    console.error("Erro ao enviar feedback:", err);
    alert("Erro ao enviar feedback. Tente novamente.");
  });
});

// Tipos de conteudo
document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.getElementById('slides');
  const detailContainer = document.getElementById('detail-container');

  // Função para pegar o parâmetro da URL
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  const tipo = getQueryParam('type');

  if (!tipo) {
    detailContainer.innerHTML = "<p>Tipo de conteúdo não especificado.</p>";
    return;
  }

  fetch("http://localhost:3001/tabData")
    .then(res => res.json())
    .then(data => {
      const tabData = data;

      const selectedTab = tabData.find(tab => tab.id === tipo);

      if (!selectedTab) {
        detailContainer.innerHTML = "<p>Conteúdo não encontrado para este tipo.</p>";
        return;
      }

      // Título
      detailContainer.innerHTML = `
        <h2>${selectedTab.label}</h2>
        <img src="${selectedTab.icon}" alt="${selectedTab.label}" style="max-width: 150px;">
      `;

      // Carrossel de imagens (os cards)
      slidesContainer.innerHTML = "";
      selectedTab.cards.forEach((imgSrc, index) => {
        const div = document.createElement('div');
        div.className = 'slide';
        div.innerHTML = `<img src="${imgSrc}" alt="Imagem ${index + 1}">`;
        slidesContainer.appendChild(div);
      });
    })
    .catch(err => {
      console.error("Erro ao carregar o conteúdo:", err);
      detailContainer.innerHTML = "<p>Erro ao carregar os dados.</p>";
    });
});





