document.addEventListener("DOMContentLoaded", () => {
  const cardGrid = document.querySelector(".card-grid");
  let todosEventos = [];
  let categoriasSelecionadas = [];

  // Elementos da busca
  const inputPesquisa = document.querySelector(".input-pesquisa");
  const btnPesquisa = document.querySelector(".btn-pesquisa");

  // Função para filtrar eventos
  function filtrarEventos() {
    const termoBusca = inputPesquisa.value.toLowerCase().trim();
    
    if (!termoBusca) {
      // Se não houver termo de busca, mostra todos os eventos
      renderizarEventos(todosEventos);
      return;
    }

    // Filtra os eventos que correspondem ao termo de busca
    const eventosFiltrados = todosEventos.filter(evento => {
      return (
        evento.title.toLowerCase().includes(termoBusca) ||
        (evento.description && evento.description.toLowerCase().includes(termoBusca)) ||
        (evento.location && evento.location.toLowerCase().includes(termoBusca)) ||
        (evento.organizer && evento.organizer.toLowerCase().includes(termoBusca)) ||
        (evento.categories && evento.categories.some(cat => cat.toLowerCase().includes(termoBusca)))
      );
    });

    if (eventosFiltrados.length === 0) {
      // Mostra mensagem quando nenhum evento for encontrado
      cardGrid.innerHTML = `
        <div class="alert alert-info w-100 text-center">
          Nenhum evento encontrado com o termo "${termoBusca}".
          <button class="btn btn-link p-0" id="limparBusca">Limpar busca</button>
        </div>
      `;
      
      // Adiciona evento ao botão de limpar busca
      document.getElementById("limparBusca")?.addEventListener("click", () => {
        inputPesquisa.value = "";
        renderizarEventos(todosEventos);
      });
    } else {
      renderizarEventos(eventosFiltrados);
    }
  }

  // Adiciona eventos de busca
  if (btnPesquisa) {
    btnPesquisa.addEventListener("click", filtrarEventos);
  }
  
  if (inputPesquisa) {
    inputPesquisa.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        filtrarEventos();
      }
    });
  }

  // Controle de seleção de categorias
  const botoesCategoria = document.querySelectorAll(".btn-categoria");
  botoesCategoria.forEach(botao => {
    botao.addEventListener("click", () => {
      const categoria = botao.textContent.trim();
      botao.classList.toggle("ativo");

      if (categoriasSelecionadas.includes(categoria)) {
        categoriasSelecionadas = categoriasSelecionadas.filter(cat => cat !== categoria);
      } else {
        categoriasSelecionadas.push(categoria);
      }
      
      // Aplica filtros de categoria junto com a busca se houver
      aplicarFiltrosCombinados();
    });
  });

  // Função para aplicar filtros combinados (busca + categorias)
  function aplicarFiltrosCombinados() {
    const termoBusca = inputPesquisa?.value.toLowerCase().trim() || "";
    let eventosFiltrados = [...todosEventos];

    // Aplica filtro de texto se houver termo de busca
    if (termoBusca) {
      eventosFiltrados = eventosFiltrados.filter(evento => 
        evento.title.toLowerCase().includes(termoBusca) || 
        (evento.description && evento.description.toLowerCase().includes(termoBusca)) ||
        (evento.location && evento.location.toLowerCase().includes(termoBusca)) ||
        (evento.organizer && evento.organizer.toLowerCase().includes(termoBusca)) ||
        (evento.categories && evento.categories.some(cat => cat.toLowerCase().includes(termoBusca)))
      );
    }

    // Aplica filtro de categorias se houver seleção
    if (categoriasSelecionadas.length > 0) {
      eventosFiltrados = eventosFiltrados.filter(evento => 
        evento.categories && evento.categories.some(cat => categoriasSelecionadas.includes(cat))
      );
    }

    // Renderiza resultados ou mensagem de nenhum resultado
    if (eventosFiltrados.length === 0) {
      let mensagem = "Nenhum evento encontrado";
      if (termoBusca && categoriasSelecionadas.length > 0) {
        mensagem = `Nenhum evento encontrado com o termo "${termoBusca}" e categorias selecionadas`;
      } else if (termoBusca) {
        mensagem = `Nenhum evento encontrado com o termo "${termoBusca}"`;
      } else if (categoriasSelecionadas.length > 0) {
        mensagem = "Nenhum evento encontrado nas categorias selecionadas";
      }

      cardGrid.innerHTML = `
        <div class="alert alert-info w-100 text-center">
          ${mensagem}.
          <button class="btn btn-link p-0" id="limparFiltros">Limpar filtros</button>
        </div>
      `;
      
      document.getElementById("limparFiltros")?.addEventListener("click", () => {
        inputPesquisa.value = "";
        categoriasSelecionadas = [];
        botoesCategoria.forEach(botao => botao.classList.remove("ativo"));
        renderizarEventos(todosEventos);
      });
    } else {
      renderizarEventos(eventosFiltrados);
    }
  }

  // Carregar eventos do backend
  fetch("http://localhost:3000/events")
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao carregar eventos");
      }
      return response.json();
    })
    .then(data => {
      todosEventos = data;
      renderizarEventos(todosEventos);
    })
    .catch(error => {
      console.error("Erro ao carregar eventos:", error);
      if (cardGrid) {
        cardGrid.innerHTML = `
          <div class="alert alert-danger w-100 text-center">
            Não foi possível carregar os eventos. Tente novamente mais tarde.
          </div>
        `;
      }
    });

  // Função para renderizar eventos
  function renderizarEventos(lista) {
    if (!cardGrid) return;
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
          <p class="categorias">Categorias: ${event.categories?.join(", ") || "Sem categoria"}</p>
          <a href="event-detail.html?id=${event.id}" class="btn">Saber mais</a>
        </div>
      `;
      cardGrid.appendChild(card);
    });
  }

  // Adicionar evento
  const botaoSalvar = document.querySelector("#btnSalvarEvento");
  if (botaoSalvar) {
    botaoSalvar.addEventListener("click", async (e) => {
      e.preventDefault();

      // Verificar usuário logado
      const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
      if (!usuarioLogado) {
        if (confirm("Você precisa estar logado para criar eventos. Deseja ir para a página de login?")) {
          window.location.href = "login.html";
        }
        return;
      }

      // Coletar dados do formulário
      const titulo = document.getElementById("inputTitle")?.value.trim();
      const descricao = document.getElementById("textareaDescricao")?.value.trim();
      const data = document.getElementById("inputDate")?.value;
      const hora = document.getElementById("inputTime")?.value;
      const cep = document.getElementById("inputCep")?.value;
      const rua = document.getElementById("inputRua")?.value;
      const bairro = document.getElementById("inputBairro")?.value;
      const numero = document.getElementById("inputNumero")?.value;
      const cidade = document.getElementById("inputCidade")?.value;
      const estado = document.getElementById("inputEstado")?.value;
      const referencia = document.getElementById("referencia")?.value.trim();

      // Validar campos obrigatórios
      if (!titulo || !descricao || !data || !hora || !cep || !rua || !numero || !cidade || !estado) {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return;
      }

      try {
        // Criar objeto do evento
        const novoEvento = {
          title: titulo,
          description: descricao,
          date: `${data}T${hora}`,
          organizer: usuarioLogado.nome,
          address: {
            cep: cep,
            street: rua,
            number: numero,
            district: bairro,
            city: cidade,
            state: estado,
            referencia: referencia
          },
          location: `${rua} - ${bairro}, ${numero}${referencia ? " (" + referencia + ")" : ""} - ${cidade} - ${estado}`,
          image: "assets/images/mockups/oficina-artes.png",
          categories: categoriasSelecionadas,
          userId: parseInt(usuarioLogado.id)
        };

        // Enviar para a API
        const response = await fetch("http://localhost:3000/events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(novoEvento)
        });

        if (!response.ok) {
          throw new Error("Erro ao salvar o evento");
        }

        const eventoCriado = await response.json();
        todosEventos.push(eventoCriado);
        renderizarEventos(todosEventos);
        
        // Fechar modal corretamente usando Bootstrap
        const modal = bootstrap.Modal.getInstance(document.getElementById('staticBackdrop'));
        modal.hide();
        
        // Feedback ao usuário
        alert("Evento criado com sucesso!");
        
        // Resetar formulário
        document.querySelector("#staticBackdrop form").reset();
        categoriasSelecionadas = [];
        botoesCategoria.forEach(botao => botao.classList.remove("ativo"));
        
      } catch (error) {
        console.error("Erro:", error);
        alert(`Falha ao criar evento: ${error.message}`);
      }
    });
  }

  // Ordenações
  const ordenarAlfabeticaBtn = document.getElementById("ordenar-alfabetica");
  if (ordenarAlfabeticaBtn) {
    ordenarAlfabeticaBtn.addEventListener("click", () => {
      const ordenado = [...todosEventos].sort((a, b) => a.title.localeCompare(b.title));
      renderizarEventos(ordenado);
    });
  }

  const ordenarProximosBtn = document.getElementById("ordenar-proximos");
  if (ordenarProximosBtn) {
    ordenarProximosBtn.addEventListener("click", () => {
      const hoje = new Date();
      const proximos = [...todosEventos]
        .filter(event => new Date(event.date) >= hoje)
        .sort((a, b) => new Date(a.date) - new Date(b.date));
      renderizarEventos(proximos);
    });
  }
});