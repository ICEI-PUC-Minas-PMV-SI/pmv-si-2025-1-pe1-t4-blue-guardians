
  
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

---

## Histórias de Usuários

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Ana, a Oceanógrafa  | Filtrar espécies marinhas por habitat, status de conservação e região geográfica | Coletar dados precisos para pesquisas e relatórios técnicos |
|Ana, a Oceanógrafa  | Registrar avistamentos de espécies em tempo real        | Compartilhar dados com outros pesquisadores e bancos científicos |
|Carlos, o Surfista  | Criar e divulgar eventos de limpeza de praia com filtro por localidade       | Mobilizar voluntários da região de forma eficiente |
|Carlos, o Surfista  | Buscar eventos de conservação próximos à minha cidade      | Participar ativamente de ações locais |

|João, o Pescador    | Visualizar áreas protegidas e alertas de poluição  | Evitar zonas de risco e cumprir regulamentações ambientais |
|João, o Pescador    | Acessar guias de boas práticas de pesca sustentável | Reduzir impactos no ecossistema marinho |

|Mariana, a Turista  | Ver projetos ecológica e eventos de educação ambiental         | Planejar viagens com menor impacto ambiental |
|Mariana, a Turista  | Compartilhar descobertas de espécies em redes sociais        | Conscientizar outros turistas |

|Pedro, o Comerciante| Cadastrar ações de descarte correto de resíduos na plataforma       | Atrair turistas preocupados com sustentabilidade |
|Pedro, o Comerciante| Acessar materiais educativos para distribuir em seu estabelecimento      | Alinhar seu negócio às normas ambientais |


---

## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito                                                                 | Prioridade | 
|------|-----------------------------------------------------------------------------------------|------------| 
|RF-001| A plataforma deve exibir informações sobre espécies marinhas (tartarugas, golfinhos, corais) com imagens e textos | ALTA       |  
|RF-002| A aplicação deve permitir filtrar informações sobre espécies marinhas por categorias (habitat, status de conservação, região geográfica) via API     | ALTA       |  
|RF-003| A aplicação deve ser responsiva e funcionar bem em dispositivos móveis                  | ALTA       |  
|RF-004| A aplicação deve ter uma interface simples e intuitiva                                  | MÉDIA      |
|RF-005| A aplicação deve permitir o cadastro de usuários para criação de eventos                 | ALTA       |
|RF-006| A aplicação deve permitir buscar eventos (mutirões, palestras, ações de conservação) filtrados por cidade ou estado              | ALTA       |  
|RF-007| A aplicação deve permitir a organização de eventos de limpeza de praia     | ALTA      |  
|RF-008| A aplicação deve permitir divulgação de atividades educativas e interativas por usuários cadastrados    | MÉDIA      |  
|RF-009| A aplicação deve permitir compartilhamento de conteúdo em redes sociais               | BAIXA      |
|RF-010| Toda informação publicada deve ser pública, exibindo o nome do criador do evento, mas mantendo dados sensíveis privados (como e-mail ou telefone)               | ALTA      |


### Requisitos Não Funcionais

|ID     | Descrição do Requisito                                                   | Prioridade |
|-------|--------------------------------------------------------------------------|------------|
|RNF-001| A aplicação deve ser responsiva e acessível em dispositivos móveis       | ALTA       |
|RNF-002| A interface deve ser intuitiva e amigável para diferentes perfis         | ALTA       |
|RNF-003| A plataforma deve estar disponível 24/7 com tempo de resposta inferior a 15s | MÉDIA      |
|RNF-004| Dados sobre espécies marinhas deve vir exclusivamente de fontes validadas com atualização automática via API        | ALTA       |
|RNF-005| Os conteúdos devem estar disponíveis em português com linguagem acessível | MÉDIA      |
|RNF-006| Acesso sem login para conteúdos educativos, mas com cadastro obrigatório apenas para criação de eventos/registros  | MÉDIA      |
|RNF-007| Dados sensíveis de usuários devem ser criptografados e nunca expostos publicamente, mesmo em eventos  | ALTA      |
|RNF-008| APIs externas devem ser integradas via cache local para reduzir consumo de dados em conexões limitadas  | ALTA      |


---

## Restrições

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Todas as funcionalidades devem funcionar em ambiente estático (frontend) |
|04| A aplicação deve funcionar mesmo com conexão limitada à internet (mínimo de dados locais) |
|05| As integrações com APIs devem ser feitas exclusivamente via frontend |
