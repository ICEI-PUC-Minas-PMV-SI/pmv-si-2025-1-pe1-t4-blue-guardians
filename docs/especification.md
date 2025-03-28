
  
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
|Ana, a Oceanógrafa  | Acessar relatórios e informações sobre espécies marinhas | Monitorar e planejar ações ambientais |
|Carlos, o Surfista  | Organizar campanhas de limpeza de praia           | Engajar a comunidade em práticas de conscientização |
|João, o Pescador    | Visualizar áreas protegidas e alertas de poluição | Evitar locais contaminados e proteger a pesca |
|Mariana, a Turista  | Ver informações sobre praias preservadas          | Escolher destinos alinhados com turismo consciente e ecológico |
|Pedro, o Comerciante| Receber orientações sobre descarte correto        | Evitar prejuízos ambientais e manter o fluxo turístico |


---

## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito                                                                 | Prioridade | 
|------|-----------------------------------------------------------------------------------------|------------| 
|RF-001| A plataforma deve exibir informações sobre espécies marinhas (tartarugas, golfinhos, corais) com imagens e textos | ALTA       |  
|RF-002| A aplicação deve permitir a visualização de vídeos e curiosidades sobre as espécies     | ALTA       |  
|RF-003| A aplicação deve ser responsiva e funcionar bem em dispositivos móveis                  | ALTA       |  
|RF-004| A aplicação deve ter uma interface simples e intuitiva                                  | MÉDIA      |
|RF-005| A aplicação deve permitir a organização de eventos de limpeza de praia                 | ALTA       |
|RF-006| A aplicação deve oferecer materiais educativos sobre preservação ambiental              | ALTA       |  
|RF-007| A aplicação deve permitir o cadastro e divulgação de atividades educativas e interativas    | BAIXA      |  
|RF-008| A aplicação deve fornecer guias de boas práticas para convivência e preservação da fauna marinha para diferentes perfis     | MÉDIA      |  
|RF-009| A aplicação deve permitir compartilhamento de conteúdo em redes sociais                | BAIXA      |

### Requisitos Não Funcionais

|ID     | Descrição do Requisito                                                   | Prioridade |
|-------|--------------------------------------------------------------------------|------------|
|RNF-001| A aplicação deve ser responsiva e acessível em dispositivos móveis       | ALTA       |
|RNF-002| A interface deve ser intuitiva e amigável para diferentes perfis         | ALTA       |
|RNF-003| A plataforma deve estar disponível 24/7 com tempo de resposta inferior a 15s | MÉDIA      |
|RNF-004| O sistema deve utilizar dados de fontes confiáveis e atualizadas         | ALTA       |
|RNF-005| Os conteúdos devem estar disponíveis em português com linguagem acessível| MÉDIA      |
|RNF-006| A plataforma não deve exigir login para o acesso a conteúdos educativos  | MÉDIA      |

---

## Restrições

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Todas as funcionalidades devem funcionar em ambiente estático (frontend) |
|04| A aplicação deve funcionar mesmo com conexão limitada à internet (mínimo de dados locais) |
