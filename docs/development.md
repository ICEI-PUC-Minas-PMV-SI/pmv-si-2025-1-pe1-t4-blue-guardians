# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos aos artefatos criados (código fonte), além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:

* Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp)
* Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)

> **Links Úteis**:
>
> * [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> * [JSON Tutorial](https://www.w3resource.com/JSON)
> * [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> * [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> * [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Requisitos Atendidos

As tabelas a seguir apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

| ID     | Descrição do Requisito                                                                                        | Responsável                          | Artefato Criado                    |
| ------ | ------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------------------------------- |
| RF-001 | A plataforma deve permitir exibição e cadastro de eventos ambientais                                          | Elisangela Maria da Silva (@likannp) | `events.html`                      |
| RF-002 | O sistema deve permitir busca e filtragem de eventos por texto e categorias                                   | Elisangela Maria da Silva (@likannp) | `events.html`                      |
| RF-002 | O sistema deve permitir a busca e filtragem de espécies por localizações específicas.                         | Elisangela Maria da Silva (@likannp) | `filter.html`                      |
| RF-003 | A plataforma deve exibir detalhes de eventos individuais                                                      | Elisangela Maria da Silva (@likannp) | `event-detail.html`                |
| RF-005 | A plataforma deve ser responsiva                                                                              | Todos                                | Design Responsivo com Bootstrap    |
| RF-011 | Permitir filtros por habitat, status de conservação, região geográfica via API.                               | Elisangela Maria da Silva (@likannp) | `filter.html`                      |
| RF-012 | Integração com APIs científicas (OBIS, GBIF)                                                                  | Elisangela Maria da Silva (@likannp) | `filter.html`                      |
| RF-014 | Compartilhamento de conteúdo                                                                                  | Elisangela Maria da Silva (@likannp) | Em desenvolvimento                 |
| RF-015 | Ordenação de eventos (alfabética e por data)                                                                  | Elisangela Maria da Silva (@likannp) | `events.html`                      |
| RF-016 | Paginação de resultados                                                                                       | Elisangela Maria da Silva (@likannp) | `events.html`                      |
| RF-017 | Cadastro de eventos com validação de usuário logado                                                           | Elisangela Maria da Silva (@likannp) | `events.html`                      |

## Descrição das Estruturas

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
