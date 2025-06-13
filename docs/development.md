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
| RF-003 | A plataforma deve exibir detalhes de eventos individuais                                                      | Elisangela Maria da Silva (@likannp) | `event-detail.html`                |
| RF-005 | A plataforma deve ser responsiva                                                                              | Todos                                | Design Responsivo com Bootstrap    |
| RF-011 | Permitir filtros por categorias de eventos                                                                    | Elisangela Maria da Silva (@likannp) | `events.html`                      |
| RF-014 | Compartilhamento de conteúdo                                                                                  | Elisangela Maria da Silva (@likannp) | Em desenvolvimento                 |
| RF-015 | Ordenação de eventos (alfabética e por data)                                                                  | Elisangela Maria da Silva (@likannp) | `events.html`                      |
| RF-016 | Paginação de resultados                                                                                       | Elisangela Maria da Silva (@likannp) | `events.html`                      |
| RF-017 | Cadastro de eventos com validação de usuário logado                                                           | Elisangela Maria da Silva (@likannp) | `events.html`                      |

## Descrição das Estruturas

## Evento

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
| └ referencia   | String           | Ponto de referência (opcional)              | "Próximo ao Farol"   

---

## Instruções para Acesso e Verificação da Implementação

1. **Acesso à Plataforma**:
   No momento, o acesso à plataforma é realizado de forma local. Para visualizar as páginas, é necessário abrir manualmente os arquivos HTML no navegador de sua preferência, diretamente a partir do diretório onde estão salvos.

2. **Verificação de Funcionalidades**:

   * Para testar a funcionalidade de exibição e cadastro de eventos, acesse a página `events.html` e utilize o modal para cadastrar novos eventos. Os eventos cadastrados devem ser exibidos com suas informações.
   * A busca de eventos pode ser realizada na página `events.html` com base em filtros de categoria e localização.
   * Para verificar os detalhes de um evento específico, clique sobre um evento na lista para visualizar a página `event-detail.html` com informações detalhadas.
   * Para explorar a funcionalidade de filtragem de espécies marinhas, acesse a página `filter.html`. Nela, é possível utilizar campos de busca por localização, espécies, filtros opcionais (como ano e ameaças) e avançados (como profundidade e instituição provedora dos dados). Os resultados são exibidos em cards com informações da espécie pesquisada.
