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
| RF-001 | A plataforma Blue Guardians deve permitir a exibição e o cadastro de eventos ambientais.                      | Elisangela Maria da Silva (@likannp) | `event.html` e `event-detail.html` |
| RF-002 | O sistema deve permitir a busca e filtragem de espécies por localizações específicas.             | Elisangela Maria da Silva (@likannp) | `filter.html`                      |
| RF-003 | A plataforma deve exibir detalhes de eventos individuais, incluindo a data, local, descrição e organizadores. | Elisangela Maria da Silva (@likannp) | `event-detail.html`                |               |
| RF-005 | A plataforma deve ser responsiva, adaptando-se a diferentes tamanhos de tela.                                 | Todos                                | Design Responsivo com Bootstrap    |             |
|RF-011|Permitir filtros por habitat, status de conservação, região geográfica via API.|Elisangela Maria da Silva| `filter.html` |
|RF-012|Integração com APIs científicas (OBIS, GBIF).|Elisangela Maria da Silva (@likannp)|`filter.html`|
|RF-014| Compartilhamento de conteúdo em redes sociais. | Elisangela Maria da Silva (@likannp)|Em desenvolvimento|

## Descrição das Estruturas

### Evento

|    **Nome**   | **Tipo**         | **Descrição**                          | **Exemplo**                                                          |
| :-----------: | ---------------- | -------------------------------------- | -------------------------------------------------------------------- |
|   id\_evento  | Número (Inteiro) | Identificador único do evento          | 1                                                                    |
|     título    | Texto            | Título do evento                       | Limpeza de Praias em Itacimirim                                      |
|   descrição   | Texto            | Descrição do evento                    | Evento de conscientização sobre a importância da limpeza das praias. |
|  data\_evento | Data             | Data em que o evento ocorrerá          | 2025-06-15                                                           |
|     local     | Texto            | Local do evento                        | Praia de Itacimirim                                                  |
| organizadores | Texto            | Organizador ou organizadores do evento | Associação de Pescadores de Itacimirim                               |

---

## Instruções para Acesso e Verificação da Implementação

1. **Acesso à Plataforma**:
   No momento, o acesso à plataforma é realizado de forma local. Para visualizar as páginas, é necessário abrir manualmente os arquivos HTML no navegador de sua preferência, diretamente a partir do diretório onde estão salvos.

2. **Verificação de Funcionalidades**:

   * Para testar a funcionalidade de exibição e cadastro de eventos, acesse a página `events.html` e utilize o modal para cadastrar novos eventos. Os eventos cadastrados devem ser exibidos com suas informações.
   * A busca de eventos pode ser realizada na página `events.html` com base em filtros de categoria e localização.
   * Para verificar os detalhes de um evento específico, clique sobre um evento na lista para visualizar a página `event-detail.html` com informações detalhadas.
   * Para explorar a funcionalidade de filtragem de espécies marinhas, acesse a página `filter.html`. Nela, é possível utilizar campos de busca por localização, espécies, filtros opcionais (como ano e ameaças) e avançados (como profundidade e instituição provedora dos dados). Os resultados são exibidos em cards com informações da espécie pesquisada.
