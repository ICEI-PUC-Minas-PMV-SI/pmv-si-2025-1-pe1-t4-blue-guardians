# Template padrão do site
Layout padrão do site (HTML e CSS) que será utilizado em todas as páginas com a definição de identidade visual, aspectos de responsividade e iconografia.

Este guia tem como objetivo garantir a consistência visual e a acessibilidade do projeto Blue Guardians, respeitando diretrizes de usabilidade e identidade ecológica.

## Design

O layout é responsivo e projetado com foco em clareza, acessibilidade e navegação simplificada. As principais áreas são:
- **Cabeçalho fixo:** com fundo Azul Primário (#13283E).
- **Rodapé padrão:** com logo e redes sociais.
- **Área de conteúdo central:** com cartões e modais bem definidos, com bordas arredondadas e fundo claro (#F3F8F8) para destaque das informações.

## Cores
A paleta é inspirada nos tons oceânicos, com foco em contraste acessível e coerência ambiental:
- **Azul Primário (#13283E):** cabeçalhos, textos principais, botões primários.
- **Azul Secundário (#026395):** botões ativos e destaques.
- **Azul Terciário (#1B9AE0):** links e interações.
- **Fundo Claro (#F3F8F8):** fundo das páginas.
- **Texto Claro (#9B99A4):** detalhes e descrições.
- **Texto Escuro (#747070):** textos principais.
- **Branco (#FFFFFF):** cartões e formulários.
- **Botão Desativado (#B2B2B2):** estados inativos.

## Tipografia
A fonte principal utilizada no projeto é Poppins, por ser uma tipografia moderna, legível e versátil.

| Função                 | Fonte   | Peso     | Tamanho aproximado |
| ---------------------- | ------- | -------- | ------------------ |
| Título da página       | Poppins | Bold     | 20–24px            |
| Títulos de seção       | Poppins | SemiBold | 18–20px            |
| Rótulos de componentes | Poppins | Medium   | 14–16px            |
| Corpo do texto         | Poppins | Regular  | 14–16px    

### Padronização de Botões
- **Primários:** fundo Azul Primário, texto branco, cantos arredondados.
- **Secundários:** fundo Azul Secundário ou tom neutro (#9B99A4).
- **Desativados:** cor #B2B2B2, texto branco.
- **Padding:** entre 0.4rem e 1rem.
  
Exemplo de classe CSS:
  ```css
    .btn-primario {
    background-color: #13283E;
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    }
  ```
## Iconografia

<div style="display: flex; gap: 10px; flex-wrap: wrap;">
  <img src="img/icons/Blue guardians logo.svg" alt="Login" width="60" height="auto"/>
  <img src="img/icons/Filter.svg" alt="Filtro" width="30" height="auto"/>
  <img src="img/icons/icon.svg" alt="Feedbacks" width="20" height="auto"/>
  <img src="img/icons/icone de busca.svg" alt="Eventos" width="30" height="auto"/>
  <img src="img/icons/leading-icon.svg" alt="Eventos" width="30" height="auto"/>
  <img src="img/icons/trailing-icon.svg" alt="Eventos" width="30" height="auto"/>
</div>

## Componentes
- **Cards de Espécies:** imagem, nome comum, status de conservação, botão de detalhes.
- **Cards de Evento:** título, local, data, descrição, tags e botões de participação.
- **Filtros laterais:** com checkboxes por tipo, região e ameaça.
- **Formulários responsivos:** com labels flutuantes e validação de campos.
- **Botões de ação:** com hierarquia visual clara.
- **Modais:** sobreposição com fundo opaco e animação suave.
- **Rodapé:** com layout flexível e links úteis.

## Responsividade
- O site é otimizado para telas pequenas (até 768px), médias (768–1024px) e grandes (acima de 1024px).
- Menus se adaptam ao rodapé em dispositivos móveis.
- Cards se reorganizam em colunas ou blocos.
Exemplo de centralização:
  ```css
  main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}
  ````
