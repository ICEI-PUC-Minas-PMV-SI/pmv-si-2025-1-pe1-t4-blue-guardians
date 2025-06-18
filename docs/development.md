# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos aos artefatos criados (código fonte), além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

## Requisitos Atendidos

As tabelas a seguir apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

# Requisitos Funcionais Atendidos

| ID     | Descrição do Requisito                                                                 | Artefato Criado                          | Relação com Implementação                                                  |
|--------|------------------------------------------------------------------------------------------|------------------------------------------|-----------------------------------------------------------------------------|
| RF-005 | Permitir que usuários autorizados cadastrem denúncias ambientais com descrição e localização | complaints.html, complaints.js           | Formulário completo com validação e geolocalização                         |
| RF-009 | Permitir que usuários visualizem as denúncias e eventos cadastrados publicamente       | complaints.html, events.html             | Sistema de cards com paginação e filtros                                   |
| RF-008 | Cadastro e divulgação de eventos ambientais                                              | events.html, events.js                   | Formulário de eventos com categorias e datas                               |
| RF-002 | Deve autenticar usuários por meio de e-mail e senha previamente cadastrados             | login.html, login.js                     | Sistema de autenticação com localStorage                                   |
| RF-003 | Deve restringir o acesso a funcionalidades administrativas com base no tipo de usuário  | complaints.js, events.js                 | Controle de acesso para criação de eventos/denúncias                       |
| RF-001 | Permitir que usuários se cadastrem com nome, e-mail, senha e tipo de usuário            | register.html, register.js               | Formulário de cadastro com validação                                       |
| RF-011 | Integração com APIs científicas (OBIS, GBIF)                                             | filter.html, filter.js                   | Busca de espécies marinhas via API GBIF                                    |
| RF-006 | Permitir filtros por habitat, status de conservação, região geográfica via API          | filter.html, filter.js                   | Interface de filtros avançados                                             |
| RF-004 | Deve registrar e armazenar feedbacks enviados pelos usuários sobre os conteúdos acessados | feedback.html, feedback.js               | Formulário de feedback integrado ao JSON Server                            |
| RF-007 | Registrar e armazenar feedbacks enviados pelos usuários sobre os conteúdos acessados    | feedback.html, feedback.js               | Mesmo sistema de RF-004                                                    |
| RF-012 | Painel público com indicadores ambientais (espécies, áreas críticas, denúncias)         | dashboard.html, dashboard.js             | Gráficos e métricas baseados em dados locais                               |

# Requisitos Não Funcionais Atendidos

| ID       | Descrição do Requisito                                                                    | Implementação                                      |
|----------|---------------------------------------------------------------------------------------------|---------------------------------------------------|
| RNF-001  | Deve ser responsiva, adaptando-se a diferentes tamanhos de tela                            | Bootstrap 5 em todas as páginas                   |
| RNF-002  | Interface intuitiva com menus claros, ícones ilustrativos e navegação fluida               | Design consistente com ícones FontAwesome         |
| RNF-003  | Tempo de resposta inferior a 2 segundos                                                     | Paginação e cache local                           |
| RNF-005  | Deve garantir a segurança de dados sensíveis, como senhas                                  | Criptografia básica em localStorage               |
| RNF-006  | Dados de espécies devem vir de fontes validadas com atualização via API                    | Integração com GBIF API                           |
| RNF-007  | Conteúdo em português e linguagem acessível                                                 | Todas as páginas em PT-BR                         |
| RNF-011  | Deve funcionar nos principais navegadores modernos                                          | Testado em Chrome, Firefox, Edge                  |
| RNF-012  | O filtro deve retornar resultados em tempo real, com respostas em até 2 segundos           | Debounce e otimização em filter.js                |
| RNF-013  | A interface do filtro deve ser intuitiva e de fácil uso                                     | UI simplificada em filter.html                   |
| RNF-014  | Deve permitir múltiplos critérios de filtragem sem travar a aplicação                      | Filtros combinados em filter.js                   |
| RNF-015  | Os eventos devem ser organizados por data, em ordem decrescente                            | Ordenação implementada em events.js               |
| RNF-016  | O carregamento da lista de eventos deve ser paginado ou por scroll infinito                | Paginação implementada em events.js               |
| RNF-018  | Os dados devem ser trafegados de forma segura via protocolo HTTP local                     | Uso de HTTPS em produção (simulado local)         |

# Restrições Atendidas

| ID  | Restrição                                                                  | Implementação                            |
|-----|----------------------------------------------------------------------------|------------------------------------------|
| 02  | Não pode ser desenvolvido um módulo de backend                            | JSON Server para simulação de API        |
| 03  | Todas as funcionalidades devem funcionar em ambiente estático             | Frontend puro com JavaScript             |
| 04  | A aplicação deve funcionar mesmo com conexão limitada                     | Cache local e Service Workers            |
| 05  | As integrações com APIs devem ser feitas exclusivamente via frontend      | Fetch direto para APIs externas          |

## Descrição das Estruturas

### Usuário da Aplicação

| Campo    | Tipo     | Descrição                                                    | Exemplo                                   |
|----------|----------|--------------------------------------------------------------|-------------------------------------------|
| id       | String   | Identificador único do usuário                               | "1"                                       |
| name     | String   | Nome completo do usuário                                     | "João da Costa"                           |
| email    | String   | Endereço de e-mail do usuário                                | "joao@email.com"                          |
| password | String   | Senha do usuário                                             | "123456"                                  |
| type     | String   | Tipo de perfil ou categoria do usuário                       | "Explorador Aprendiz (ou Estudante)"      |
| bio      | String   | Biografia ou descrição pessoal                               | "Amo o oceano e suas criaturas."          |
| urls     | Array    | Lista de links relacionados ao perfil do usuário             | ["https://perfil.com", "https://x.com"]   |


### Evento

| Campo          | Tipo             | Descrição                                   | Exemplo                                      |
| -------------- | ---------------- | ------------------------------------------- | -------------------------------------------- |
| id             | Integer          | ID único do evento                          | 1                                            |
| title          | String           | Título do evento                            | Limpeza de Praias                            |
| description    | String           | Descrição detalhada do evento               | Conscientização sobre preservação marinha    |
| date           | DateTime (ISO)   | Data e hora do evento                       | "2025-06-15T14:00:00"                        |
| organizer      | String           | Organizador do evento                       | Associação de Pescadores                     |
| location       | String           | Local completo do evento                    | "Praia de Itacimirim, Salvador - BA"         |
| image          | URL              | Imagem representativa do evento             | "assets/images/mockups/oficina-artes.png"    |
| categories     | Array[String]    | Categorias associadas ao evento             | ["Limpeza", "Educação"]                      |
| userId         | Integer          | ID do usuário criador do evento             | 5                                            |
| address        | Object           | Detalhes completos do endereço:             |                                              |
| └ cep          | String           | CEP do local                                | "41700000"                                   |
| └ street       | String           | Nome da rua                                 | "Av. Oceânica"                               |
| └ number       | String           | Número do local                             | "123"                                        |
| └ district     | String           | Bairro                                      | "Itacimirim"                                 |
| └ city         | String           | Cidade                                      | "Salvador"                                   |
| └ state        | String           | Estado (UF)                                 | "BA"                                         |
| └ referencia   | String           | Ponto de referência (opcional)              | "Próximo ao Farol"                           |

### Ocorrência de Espécie (GBIF)

| Campo             | Tipo    | Descrição                                                                 | Exemplo                                     |
|-------------------|---------|---------------------------------------------------------------------------|---------------------------------------------|
| key               | Integer | ID único da ocorrência no GBIF                                            | 123456789                                   |
| scientificName    | String  | Nome científico da espécie                                                | "Tursiops truncatus"                        |
| vernacularName    | String  | Nome comum da espécie                                                     | "Golfinho-nariz-de-garrafa"                 |
| eventDate         | String  | Data do registro (formato ISO)                                            | "2020-01-15T14:30:00"                       |
| locality          | String  | Descrição do local                                                        | "Praia de Itacimirim"                       |
| municipality      | String  | Município                                                                 | "Salvador"                                  |
| stateProvince     | String  | Estado                                                                    | "Bahia"                                     |
| country           | String  | País                                                                      | "Brazil"                                    |
| decimalLatitude   | Float   | Latitude                                                                  | -12.9711                                    |
| decimalLongitude  | Float   | Longitude                                                                 | -38.4308                                    |
| basisOfRecord     | String  | Tipo de registro (traduzido para português)                               | "Observação humana"                         |
| recordedBy        | String  | Nome do coletor/observador                                                | "João Silva"                                |
| institutionCode   | String  | Código da instituição responsável                                         | "UESC"                                      |
| media             | Array   | Lista de objetos com URL de mídia (imagens)                               | [{"identifier": "http://.../image.jpg"}]    |

### Denúncia Ambiental

| Campo     | Tipo    | Descrição                                                                 | Exemplo                                |
|-----------|---------|---------------------------------------------------------------------------|----------------------------------------|
| id        | String  | Identificador único da denúncia                                           | "7f98"                                 |
| titulo    | String  | Título curto e descritivo da denúncia                                     | "Poluição em manguezal"                |
| descricao | String  | Detalhamento da ocorrência ou problema ambiental                         | "Acúmulo de resíduos sólidos na área..." |
| data      | String  | Data da ocorrência (formato ISO)                                          | "2025-06-20"                           |
| hora      | String  | Hora aproximada da ocorrência                                             | "14:30"                                |
| categoria | String  | Categoria do problema ambiental                                           | "Lixo na Praia", "Desmatamento", etc.  |
| cidade    | String  | Cidade onde ocorreu a denúncia                                            | "Salvador"                             |
| estado    | String  | Estado onde ocorreu a denúncia                                            | "BA"                                   |
| imagem    | String  | Caminho ou URL da imagem associada à denúncia                             | "assets/images/complains_header.jpg"   |
| usuario   | Integer | ID do usuário que cadastrou a denúncia                                    | 3                                      |


---

## Instruções para Acesso e Verificação da Implementação

### Acesso à Plataforma
1. **Ambiente Local**:
   - Clone o repositório do projeto em sua máquina
   - Instale as dependências: `npm install`
   - Inicie a API de eventos: `npm run api` (disponível em `http://localhost:3001`)
   - Abra os arquivos HTML diretamente no navegador ou use um servidor local (ex: `npx http-server`)

2. **Pré-requisitos**:
   - Navegador moderno (Chrome, Firefox, Edge)
   - Conexão com internet (para integração com APIs externas)
   - Usuário cadastrado (para funcionalidades restritas)

### Verificação de Funcionalidades

#### Página `events.html` (Eventos Ambientais)
1. **Cadastro de Eventos**:
   - Clique em "Criar Evento"
   - Preencha o formulário com:
     - Título, descrição, data/hora
     - Endereço completo (o CEP preenche automaticamente os campos)
     - Selecione categorias (Limpeza, Educação, etc.)
   - Clique em "Salvar Evento"
   - Verifique:
     - O novo evento aparece na lista
     - Campos obrigatórios são validados
     - Usuário não logado é redirecionado para login

2. **Filtragem e Busca**:
   - Digite termos na barra de pesquisa (ex: "Maceió")
   - Clique em categorias específicas
   - Verifique:
     - Eventos são filtrados em tempo real
     - Mensagem quando nenhum resultado é encontrado

3. **Ordenação**:
   - Clique em "Ordenar por Ordem Alfabética"
   - Clique em "Ordenar por Próximos Eventos"
   - Verifique a sequência dos resultados

4. **Paginação**:
   - Cadastre mais de 6 eventos
   - Navegue entre as páginas usando os controles
   - Verifique a consistência dos eventos exibidos
  
#### Teste de Denúncias (complaints.html)
1. **Cadastro de Denúncia**:
      - Acesse como usuário logado
   - Preencha título, descrição, localização
   - Selecione categoria
   - Verifique persistência no JSON Server
2. **Filtragem e Ordenação**:
   - Teste busca por termos ("plástico", "óleo")
   - Filtre por categorias específicas
   - Ordene por data recente
3. **Responsividade**:
   - Reduza a janela para mobile
   - Verifique adaptação do grid de cards

#### Página `filter.html` (Filtragem de Espécies Marinhas)
1. **Busca por Espécie**:
   - Digite "golfinho" no campo de espécie
   - Selecione uma sugestão da lista
   - Clique em "Pesquisar"
   - Verifique:
     - Cards com ocorrências da espécie
     - Imagens e informações científicas
     - Botões de ação funcionais

2. **Busca por Localização**:
   - Digite "Salvador" no campo de localidade
   - Selecione uma sugestão da lista
   - Clique em "Pesquisar"
   - Verifique:
     - Espécies encontradas na região
     - Detalhes geográficos nos cards
     - Links para mapas

3. **Busca Combinada**:
   - Preencha ambos os campos (ex: "tubarão" e "Recife")
   - Clique em "Pesquisar"
   - Verifique ocorrências específicas na localidade

4. **Casos Especiais**:
   - Busca sem resultados: verifique mensagem informativa
   - Espécie inválida: verifique mensagem de erro
   - Localização curta: verifique validação (mínimo 3 caracteres)

### Verificação Cruzada
1. **Responsividade**:
   - Redimensione a janela em ambas as páginas
   - Teste em dispositivos móveis (via ferramentas de desenvolvedor)
   - Verifique a adaptação dos grids de cards

2. **Fluxo Completo**:
   - Cadastre um evento em `events.html`
   - Busque espécies na mesma localidade em `filter.html`
   - Compartilhe um evento via redes sociais (em desenvolvimento)

### Problemas Comuns
1. API não iniciada:
   - Erro: "Não foi possível carregar os eventos"
   - Solução: Inicie o servidor com `npm run api`

2. **Erro de CORS (Cross-Origin Resource Sharing)**:
   - **Sintoma**:
     - Falha na busca de espécies com erro no console do navegador: _"Access to fetch at 'https://api.gbif.org...' from origin 'http://localhost' has been blocked by CORS policy"_
     - Mensagem: _"Failed to fetch"_ na interface
   - **Causa**: 
     - O navegador bloqueia requisições entre origens diferentes por segurança
     - Ocorre quando o arquivo HTML é aberto diretamente (`file://`) ou de servidor diferente da API
   - **Soluções**:
     a) **Servidor Local**:
        ```bash
        # Python (qualquer versão):
        python -m http.server 8000

3. Dados não persistidos:
   - Verifique se o usuário está logado
   - Confira o console para mensagens de erro
