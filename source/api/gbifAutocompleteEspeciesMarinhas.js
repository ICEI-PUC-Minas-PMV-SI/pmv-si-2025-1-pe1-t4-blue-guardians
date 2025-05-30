document.addEventListener("DOMContentLoaded", () => {
  console.log("Script carregado");

  // Elementos do DOM
  const especieInput = document.getElementById("especieInput");
  const localidadeInput = document.getElementById("localidadeInput");
  const errorElement = document.getElementById("especieError");
  const localErrorElement = document.getElementById("localidadeError");
  const btnPesquisar = document.getElementById("bnt-pesquisar");
  const resultadosDiv = document.getElementById("resultadosCards");
  const loadingSpinner = document.getElementById("loadingSpinner");

  let especies = [];
  let selectedScientificName = "";

  // ==================== AUTCOMPLETE PARA ESPÉCIES ====================
  const especieDropdown = document.createElement("ul");
  especieDropdown.classList.add("autocomplete-dropdown", "list-group", "position-absolute");
  Object.assign(especieDropdown.style, {
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
    especieDropdown.style.width = especieInput.offsetWidth + "px";
  };

  window.addEventListener("resize", updateDropdownWidth);
  especieInput.parentNode.style.position = "relative";
  especieInput.parentNode.appendChild(especieDropdown);
  updateDropdownWidth();

  // Carrega espécies
  fetch("api/especies_marinhas.json")
    .then(response => response.json())
    .then(data => {
      especies = data;
      console.log("Espécies carregadas:", especies.length);
    })
    .catch(err => {
      console.error("Erro ao carregar espécies:", err);
      errorElement.textContent = "Erro ao carregar lista de espécies. Tente recarregar a página.";
      errorElement.style.display = "block";
    });

  especieInput.addEventListener("input", () => {
    const valor = especieInput.value.trim().toLowerCase();
    especieDropdown.innerHTML = "";

    if (!valor) {
      especieDropdown.style.display = "none";
      return;
    }

    const sugestoes = especies.filter(e =>
      e.vernacularName && e.vernacularName.toLowerCase().includes(valor)
    ).slice(0, 5);

    if (sugestoes.length === 0) {
      especieDropdown.style.display = "none";
      return;
    }

    sugestoes.forEach(especie => {
      const item = document.createElement("li");
      item.classList.add("list-group-item");
      item.textContent = especie.vernacularName;
      item.addEventListener("click", () => {
        especieInput.value = especie.vernacularName;
        selectedScientificName = especie.scientificName;
        especieDropdown.style.display = "none";
        errorElement.style.display = "none";
      });
      especieDropdown.appendChild(item);
    });

    especieDropdown.style.display = "block";
  });

  especieInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && especieDropdown.firstChild) {
      e.preventDefault();
      especieDropdown.firstChild.click();
    }
  });

  document.addEventListener("click", (e) => {
    if (!especieInput.parentNode.contains(e.target)) {
      especieDropdown.style.display = "none";
    }
  });

  // ==================== FUNÇÕES AUXILIARES ====================
  const mostrarLoading = (mostrar) => {
    loadingSpinner.style.display = mostrar ? "block" : "none";
    btnPesquisar.disabled = mostrar;
  };

  const mostrarErro = (elemento, mensagem) => {
    elemento.textContent = mensagem;
    elemento.style.display = "block";
  };

  const limparErros = () => {
    errorElement.style.display = "none";
    localErrorElement.style.display = "none";
  };

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
    
    // Formatação simples da data - mostra como vem da API
    const eventDate = item.eventDate ? item.eventDate.split('T')[0] : "Data não informada";

    // Função para traduzir tipos de registro
    const traduzirTipoRegistro = (tipo) => {
      const traducoes = {
        'HUMAN_OBSERVATION': 'Observação humana',
        'PRESERVED_SPECIMEN': 'Espécime preservado',
        'FOSSIL_SPECIMEN': 'Fóssil',
        'LIVING_SPECIMEN': 'Espécime vivo',
        'OBSERVATION': 'Observação',
        'MACHINE_OBSERVATION': 'Observação automática'
      };
      return traducoes[tipo] || tipo;
    };

    card.innerHTML = `
      <img src="${imgSrc}" alt="${scientificName}" class="card-img-top" />
      <div class="card-body">
        <h3 class="card-title">${scientificName}</h3>
        
        ${item.vernacularName ? `<p class="card-text"><strong>Nome comum:</strong> ${item.vernacularName}</p>` : ''}
        
        <div class="location-info">
          ${item.municipality ? `<p><strong>Município:</strong> ${item.municipality}</p>` : ''}
          ${item.stateProvince ? `<p><strong>Estado:</strong> ${item.stateProvince}</p>` : ''}
          ${item.country ? `<p><strong>País:</strong> ${item.country}</p>` : ''}
        </div>
        
        <p><strong>Data do registro:</strong> ${eventDate}</p>
        
        ${item.basisOfRecord ? `<p><strong>Tipo de registro:</strong> ${traduzirTipoRegistro(item.basisOfRecord)}</p>` : ''}
        
        ${item.recordedBy ? `<p><strong>Registrado por:</strong> ${item.recordedBy}</p>` : ''}
        
        ${item.institutionCode ? `<p><strong>Instituição:</strong> ${item.institutionCode}</p>` : ''}
        
        <div class="card-actions">
          <a href="https://www.gbif.org/occurrence/${item.key}" target="_blank" class="btn btn-primary">
            <i class="fas fa-info-circle"></i> Detalhes no GBIF
          </a>
          ${item.decimalLatitude && item.decimalLongitude ? `
            <a href="https://www.openstreetmap.org/?mlat=${item.decimalLatitude}&mlon=${item.decimalLongitude}#map=15/${item.decimalLatitude}/${item.decimalLongitude}" 
              target="_blank" class="btn btn-outline-secondary">
              <i class="fas fa-map-marker-alt"></i> Ver no mapa
            </a>` : ''}
        </div>
      </div>
    `;

    return card;
  };

  const exibirResultados = (resultados) => {
    resultadosDiv.innerHTML = "";

    if (!resultados || resultados.length === 0) {
      resultadosDiv.innerHTML = "<p class='text-center'>Nenhum resultado encontrado para os critérios de busca.</p>";
      return;
    }

    resultados.forEach(item => resultadosDiv.appendChild(criarCard(item)));
  };

  // ==================== LÓGICA DE BUSCA ====================
  const buscarGBIF = async (filtros) => {
    const params = new URLSearchParams();
    Object.entries(filtros).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    params.append('limit', '10');

    try {
      const response = await fetch(`https://api.gbif.org/v1/occurrence/search?${params}`);
      if (!response.ok) throw new Error("Falha na requisição");
      const data = await response.json();
      return data.results || [];
    } catch (error) {
      console.error("Erro na busca GBIF:", error);
      throw error;
    }
  };

  const buscarPorLocalizacao = async (localizacao) => {
    // Extrair componentes da localização (cidade, estado)
    const partes = localizacao.split(',').map(p => p.trim());
    let cidade, estado;
    
    if (partes.length >= 2) {
      [cidade, estado] = partes;
    } else {
      [estado] = partes;
    }

    // Normalizar nomes (remover acentos, espaços extras)
    const normalizar = (str) => {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
    };

    // Tentar buscar por município (se existir)
    if (cidade) {
      const resultados = await buscarGBIF({ 
        municipality: normalizar(cidade), 
        country: "BR" // Usar código ISO sempre
      });
      if (resultados.length > 0) return resultados;
    }

    // Se não encontrar, tentar por estado
    if (estado) {
      // Mapear nomes de estados para siglas quando possível
      const estadosBR = {
        'acre': 'AC', 'alagoas': 'AL', 'amapa': 'AP', 'amazonas': 'AM',
        'bahia': 'BA', 'ceara': 'CE', 'distrito federal': 'DF', 
        'espirito santo': 'ES', 'goias': 'GO', 'maranhao': 'MA',
        'mato grosso': 'MT', 'mato grosso do sul': 'MS', 'minas gerais': 'MG',
        'para': 'PA', 'paraiba': 'PB', 'parana': 'PR', 'pernambuco': 'PE',
        'piaui': 'PI', 'rio de janeiro': 'RJ', 'rio grande do norte': 'RN',
        'rio grande do sul': 'RS', 'rondonia': 'RO', 'roraima': 'RR',
        'santa catarina': 'SC', 'sao paulo': 'SP', 'sergipe': 'SE',
        'tocantins': 'TO'
      };

      const estadoNormalizado = normalizar(estado);
      const siglaEstado = estadosBR[estadoNormalizado] || estadoNormalizado;

      const resultados = await buscarGBIF({ 
        stateProvince: siglaEstado, 
        country: "BR" 
      });
      if (resultados.length > 0) return resultados;
    }

    // Último recurso: buscar pelo país (Brasil)
    return await buscarGBIF({ country: "BR" });
  };

  // ==================== EVENTO DE PESQUISA ====================
  btnPesquisar.addEventListener("click", async () => {
    const especieNome = especieInput.value.trim().toLowerCase();
    const localizacao = localidadeInput.value.trim();
    
    limparErros();
    mostrarLoading(true);

    try {
      // Caso 1: Busca por espécie apenas
      if (especieNome && !localizacao) {
        const especieEncontrada = especies.find(e => e.vernacularName.toLowerCase() === especieNome);
        if (!especieEncontrada) {
          mostrarErro(errorElement, "Por favor, selecione uma espécie válida da lista.");
          return;
        }

        const resultados = await buscarGBIF({ scientificName: especieEncontrada.scientificName });
        exibirResultados(resultados);
        return;
      }
      
      // Caso 2: Busca por localização apenas
      if (localizacao && !especieNome) {
        if (localizacao.length < 3) {
          mostrarErro(localErrorElement, "Digite pelo menos 3 caracteres para buscar por localização.");
          return;
        }

        const resultados = await buscarPorLocalizacao(localizacao);
        exibirResultados(resultados);
        return;
      }
      
      // Caso 3: Busca combinada (espécie + localização)
      if (especieNome && localizacao) {
        const especieEncontrada = especies.find(e => e.vernacularName.toLowerCase() === especieNome);
        if (!especieEncontrada) {
          mostrarErro(errorElement, "Por favor, selecione uma espécie válida da lista.");
          return;
        }

        // Extrair componentes da localização
        const partes = localizacao.split(',').map(p => p.trim());
        let filtros = { scientificName: especieEncontrada.scientificName, country: 'BR' };
        
        // Adicionar filtros hierárquicos
        if (partes.length >= 2) {
          filtros.stateProvince = partes[0];
          if (partes.length >= 3) {
            filtros.municipality = partes[0];
            filtros.stateProvince = partes[1];
          }
        }

        const resultados = await buscarGBIF(filtros);
        exibirResultados(resultados);
      }
    } catch (error) {
      console.error("Erro na pesquisa:", error);
      mostrarErro(errorElement, "Ocorreu um erro ao buscar os dados. Tente novamente mais tarde.");
    } finally {
      mostrarLoading(false);
    }
  });
});