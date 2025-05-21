
  
# Especificações do Projeto

Esta seção descreve a fundamentação da solução a partir da perspectiva dos usuários, incluindo a definição de personas, histórias de usuário, requisitos funcionais e não funcionais, e restrições do projeto. Para isso, foram utilizadas as seguintes técnicas e ferramentas:

- **Criação de Personas** com base nos perfis do público-alvo levantado no documento de contexto, utilizando a metodologia de marketing digital centrada no usuário.
- **Histórias de Usuário (User Stories)**, baseadas em práticas ágeis para elicitação de requisitos.
- **Classificação de Requisitos Funcionais e Não Funcionais**, segundo os critérios da Engenharia de Requisitos.
- **Levantamento de Restrições**, considerando o escopo e as limitações acadêmicas do projeto.

---

## Personas

### 1. Ana, a Oceanógrafa Consciente
- **Idade:** 35 anos  
- **Profissão:** Oceanógrafa e pesquisadora ambiental  
- **Objetivo:** Monitorar e reduzir os impactos ambientais na região, além de promover políticas públicas eficazes.  
- **Desafios:** Falta de fiscalização, desorganização no crescimento urbano e dificuldade em sensibilizar a comunidade sobre a vida marinha local.  
- **Necessidades:** Dados confiáveis em tempo real, ferramentas para engajamento da população, acesso a relatórios interativos e mapas de áreas críticas.  
- **Como a aplicação ajuda:** Fornece dados atualizados sobre poluição marinha, permitindo aprender sobre espécies ameaçadas e seus habitats e conscientização.

### 2. Carlos, o Professor de Surf
- **Idade:** 28 anos  
- **Profissão:** Instrutor de surf e ambientalista voluntário  
- **Objetivo:** Ensinar o esporte enquanto promove a preservação da praia e a conscientização ambiental entre seus alunos e turistas.  
- **Desafios:** Alto volume de lixo na praia, falta de conscientização dos visitantes e pouca infraestrutura para descarte adequado de resíduos.  
- **Necessidades:** Materiais de educação ambiental para alunos e turistas, campanhas de limpeza organizadas e ferramentas para denúncia de poluição.  
- **Como a aplicação ajuda:** Permite organizar eventos de limpeza e fornece um canal de denúncia para relatar lixo ou poluição, facilitando a mobilização e o engajamento da comunidade.

### 3. João, o Pescador Local
- **Idade:** 50 anos  
- **Profissão:** Pescador tradicional  
- **Objetivo:** Preservar os recursos naturais para sustento próprio e das futuras gerações.  
- **Desafios:** Poluição marinha, redução dos estoques pesqueiros e falta de informação sobre regulamentações ambientais.  
- **Necessidades:** Acesso a informações sobre áreas protegidas, impactos da poluição e práticas de pesca sustentável.  
- **Como a aplicação ajuda:** Oferece mapas interativos de áreas protegidas, práticas de pesca sustentáveis e curiosidades e alertas sobre espécies ameaçadas.

### 4. Mariana, a Turista Consciente
- **Idade:** 32 anos  
- **Profissão:** Advogada e viajante sustentável  
- **Objetivo:** Curtir a praia sem prejudicar o meio ambiente e contribuir para a preservação dos locais que visita.  
- **Desafios:** Falta de informação clara sobre boas práticas para convivência e preservação da fauna marinha e poucas opções para participar de ações ecológicas durante suas viagens.  
- **Necessidades:** Conteúdo acessível sobre turismo consciente e ecológico, mapas interativos de áreas preservadas e opções para participar de campanhas de limpeza.  
- **Como a aplicação ajuda:** Oferece guias de boas práticas, informação sobre áreas preservadas e oportunidades para ações ecológicas.

### 5. Pedro, o Comerciante da Praia
- **Idade:** 40 anos  
- **Profissão:** Dono de barraca de praia  
- **Objetivo:** Manter o turismo consciente e ecológico para garantir sua renda e preservar o ambiente que atrai visitantes.  
- **Desafios:** Gestão de resíduos, impacto ambiental das atividades comerciais e falta de incentivos para práticas ecológicas.  
- **Necessidades:** Orientações sobre gestão de resíduos e incentivos para educação e engajamento ambiental.  
- **Como a aplicação ajuda:** Disponibiliza boas práticas para descarte de lixo, informações sobre impacto ambiental e suporte para adoção de medidas ecológicas.

### 6. Maria, a Gestora Ambiental Municipal
- **Idade:** 45 anos  
- **Profissão:** Técnica da Secretaria de Meio Ambiente  
- **Objetivo:** Planejar políticas públicas com base em dados confiáveis.  
- **Desafios:** Falta de dados integrados e denúncias sem rastreamento.  
- **Necessidades:** Ferramentas de monitoramento e relatórios de biodiversidade.  
- **Como a aplicação ajuda:** Recebe denúncias com localização e acompanha dados científicos via APIs integradas.

---

## Histórias de Usuários

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`|
|--------------------|------------------------------------|------------------------|
|Ana, a Oceanógrafa  | Filtrar espécies marinhas por habitat, status de conservação e região geográfica | Coletar dados precisos para pesquisas |
|Ana, a Oceanógrafa  | Acessar dados do OBIS/GBIF integrados na plataforma | Monitorar biodiversidade regional |
|Carlos, o Surfista  | Criar e divulgar eventos de limpeza de praia | Mobilizar voluntários locais |
|Carlos, o Surfista  | Reportar lixo visível com localização | Ajudar na limpeza e engajar a comunidade |
|João, o Pescador    | Visualizar áreas protegidas e alertas de poluição | Evitar riscos e seguir regras ambientais |
|Mariana, a Turista  | Ver projetos e eventos ecológicos | Planejar viagens com menor impacto |
|Mariana, a Turista  | Receber alertas sobre fauna local | Evitar danos à biodiversidade |
|Pedro, o Comerciante| Acessar materiais educativos para distribuir | Apoiar turismo consciente |
|Marina, a Gestora   | Visualizar denúncias e relatórios ambientais | Planejar ações públicas sustentáveis |

---

## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito                                                                        | Prioridade | 
|------|-----------------------------------------------------------------------------------------------|------------| 
|RF-001| Permitir que usuários se cadastrem com nome, e-mail, senha e tipo de usuário.                 | ALTA       |  
|RF-002| Deve autenticar usuários por meio de e-mail e senha previamente cadastrados.                  | ALTA       | 
|RF-003| Deve restringir o acesso a funcionalidades administrativas com base no tipo de usuário.       | ALTA       |            
|RF-004| Deve registrar e armazenar feedbacks enviados pelos usuários sobre os conteúdos acessados.    | ALTA       | 
|RF-005| Permitir que usuários autorizados cadastrem denúncias ambientais com descrição e localização. | ALTA       | 
|RF-006| Permitir filtros por habitat, status de conservação, região geográfica via API                | ALTA       |
|RF-007| Registrar e armazenar feedbacks enviados pelos usuários sobre os conteúdos acessados.         | ALTA       |
|RF-008| Cadastro e divulgação de eventos ambientais                                                   | ALTA       |
|RF-009| Permitir que usuários visualizem as denúncias e eventos cadastrados publicamente.             | ALTA       | 
|RF-010| Compartilhamento de conteúdo em redes sociais                                                 | BAIXA      |
|RF-011| Integração com APIs científicas (OBIS, GBIF)                                                  | ALTA       |
|RF-012| Painel público com indicadores ambientais (espécies, áreas críticas, denúncias)               | MÉDIA      |

### Requisitos Não Funcionais

|ID     | Descrição do Requisito                                                                          | Prioridade |
|-------|-------------------------------------------------------------------------------------------------|------------|
|RNF-001| Deve ser responsiva, adaptando-se a diferentes tamanhos de tela (desktop, tablet, celular).     | ALTA       |
|RNF-002| Interface intuitiva com menus claros, ícones ilustrativos e navegação fluida.                   | ALTA       |
|RNF-003| Tempo de resposta inferior a 2 segundos.                                                        | ALTA       |
|RNF-004| Deve estar disponível 99% do tempo, considerando a aplicação em ambiente de produção.           | MÉDIA      |                                             
|RNF-005| Deve garantir a segurança de dados sensíveis, como senhas.                                      | ALTA       |  
|RNF-006| Dados de espécies devem vir de fontes validadas com atualização via API.                        | ALTA       |
|RNF-007| Conteúdo em português e linguagem acessível.                                                    | ALTA       |
|RNF-008| Deve ter testes automatizados para funcionalidades críticas como login e envio de feedbacks.    | MÉDIA      | 
|RNF-009| Cache local para dados externos.                                                                | ALTA       |           
|RNF-010| Geolocalização para personalização de conteúdo.                                                 | MÉDIA      |
|RNF-011| Deve funcionar nos principais navegadores modernos: Chrome, Firefox, Safari, Edge.              | ALTA       |
|RNF-012| O filtro deve retornar resultados em tempo real, com respostas em até 2 segundos.               | ALTA       |
|RNF-013| A interface do filtro deve ser intuitiva e de fácil uso.                                        | ALTA       |
|RNF-014| Deve permitir múltiplos critérios de filtragem sem travar a aplicação.                          | ALTA       |
|RNF-015| Os eventos devem ser organizados por data, em ordem decrescente.                                | ALTA       |
|RNF-016| O carregamento da lista de eventos deve ser paginado ou por scroll infinito.                    | ALTA       |
|RNF-017| O sistema deve permitir o envio de denúncia anônima (se previsto no fluxo).                     | MÉDIA      |
|RNF-018| Os dados devem ser trafegados de forma segura via protocolo HTTP local (mesmo com json-server). | ALTA       |

---

## Restrições

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Todas as funcionalidades devem funcionar em ambiente estático (frontend) |
|04| A aplicação deve funcionar mesmo com conexão limitada à internet (mínimo de dados locais) |
|05| As integrações com APIs devem ser feitas exclusivamente via frontend |
