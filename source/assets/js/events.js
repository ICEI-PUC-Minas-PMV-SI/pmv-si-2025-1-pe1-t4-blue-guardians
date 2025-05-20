document.addEventListener("DOMContentLoaded", () => {
    const cardGrid = document.querySelector(".card-grid");
    let todosEventos = [];

  // Carregar eventos
fetch("http://localhost:3000/events")
  .then(response => response.json())
  .then(data => {
    todosEventos = data; // Agora está correto
    renderizarEventos(todosEventos);
  })
  .catch(error => {
    console.error("Erro ao carregar eventos:", error);
    cardGrid.innerHTML = "<p>Não foi possível carregar os eventos no momento.</p>";
  });
    function renderizarEventos(lista) {
    cardGrid.innerHTML = "";
    lista.forEach(event => {
        const card = document.createElement("div");
        card.classList.add("card");

        const dataEvento = new Date(event.date);
        const dataFormatada = dataEvento.toLocaleDateString("pt-BR");
        const horaFormatada = dataEvento.toLocaleTimeString("pt-BR", {
        hour: '2-digit',
        minute: '2-digit'
        });

        card.innerHTML = `
        <img src="${event.image}" alt="${event.title}">
        <div class="card-content">
            <h3>${event.title}</h3>
            <p>Data: ${dataFormatada} às ${horaFormatada}</p>
            <p>Organização: ${event.organizer}</p>
            <p>Local: ${event.location}</p>
            <a href="event-detail.html?id=${event.id}" class="btn">Saber mais</a>
        </div>
        `;
        cardGrid.appendChild(card);
    });
    }
  document.getElementById("ordenar-alfabetica").addEventListener("click", () => {
    const ordenado = [...todosEventos].sort((a, b) => a.title.localeCompare(b.title));
    renderizarEventos(ordenado);
  });

  document.getElementById("ordenar-proximos").addEventListener("click", () => {
    const hoje = new Date();
    const proximos = [...todosEventos]
      .filter(event => new Date(event.date) >= hoje)
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    renderizarEventos(proximos);
  });

    // Adiciona evento (simulado)
    const botaoSalvar = document.querySelector(".btn-primario");
    botaoSalvar.addEventListener("click", (e) => {
      e.preventDefault();
      const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
      if (!usuarioLogado) {
        const desejaLogar = confirm("Você precisa estar logado para acessar esta funcionalidade.\nDeseja ir para a página de login?");
        if (desejaLogar) {
          window.location.href = "login.html";
        } else {
          alert("Ação cancelada. Você permanecerá nesta página.");
        }
        return; // Interrompe a execução do script
      }

    const userName = usuarioLogado.nome;
    const userId = usuarioLogado.id;

      const novoEvento = {
        id: todosEventos.length + 1,
        title: document.getElementById("inputTitle").value,
        description: document.getElementById("textareaDescricao").value,
        date: `${document.getElementById("inputDate").value}T${document.getElementById("inputTime").value}`,
        organizer: userName,
        location: `${document.getElementById("inputRua").value}, ${document.getElementById("inputNumero").value} - ${document.getElementById("cidade").value} - ${document.getElementById("estado").value}`,
        image: "assets/images/mockups/oficina-artes.png",
        userId: parseInt(userId)
      };

      fetch("http://localhost:3000/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(novoEvento)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("Erro ao salvar o evento.");
        }
        return response.json();
      })
      .then(eventoCriado => {
        todosEventos.push(eventoCriado);
        renderizarEventos(todosEventos);
        alert("Evento criado com sucesso e salvo no banco de dados!");
        document.querySelector(".btn-close").click();
      })
      .catch(error => {
        console.error("Erro ao salvar evento:", error);
        alert("Houve um erro ao salvar o evento. Tente novamente.");
      });
    });

});
