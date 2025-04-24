# Template padrão do site
Layout padrão do site (HTML e CSS) que será utilizado em todas as páginas com a definição de identidade visual, aspectos de responsividade e iconografia.

Este guia tem como objetivo garantir a consistência visual e a acessibilidade do projeto Blue Guardians, respeitando diretrizes de usabilidade e identidade ecológica.

## Design

O layout é responsivo e projetado com foco em clareza, acessibilidade e navegação simplificada. As principais áreas são:
- **Cabeçalho fixo:** com fundo azul escuro e ícone de menu lateral.
- **Rodapé padrão:** com links para Poliítica de Privacidade, Denúncias e Meu Perfil.
- **Área de conteúdo central:** com cartões e modais bem definidos, com bordas arredondadas e fundo branco para destaque das informações.
- **Logo do sistema:** posicionado no cabeçalho lateral.
- **Menus padrão:** localizados no cabeçalho superior (ícone de menu hamburguer) ou rodapé para dispositivos móveis.

## Cores
A paleta foi selecionada para refletir a conexão com o mar, vida marinha e sustentabilidade.
- Azul Oceano (#005D7F): Cor principal para destaques e cabeçalho.
- Azul Céu (#007ACC): Botões ativos e destaques secundários.
- Azul (#026395): Navegação e botões em páginas internas.
- Cinza (#F3F4F6): Fundo de formulários e seções neutras.
- Branco (#FFFFFF): Texto sobre fundo escuro, contraste geral.
- Cinza Médio (#B2B2B2): Botões desativados (off).

## Tipografia
A fonte principal utilizada no projeto é Poppins, por ser uma tipografia moderna, legível e versátil.

| Função                 | Fonte   | Peso     | Tamanho aproximado |
| ---------------------- | ------- | -------- | ------------------ |
| Título da página       | Poppins | Bold     | 20–24px            |
| Títulos de seção       | Poppins | SemiBold | 18–20px            |
| Rótulos de componentes | Poppins | Medium   | 14–16px            |
| Corpo do texto         | Poppins | Regular  | 14–16px    

### Padronização de Botões
- Botões maiores (ações principais como "Salvar", "Confirmar participação") usam Azul (#026395).
- Botões menores (filtros, navegação secundária) usam Azul (#026395).
- Todos os botões possuem bordas arredondadas e espaçamento interno padronizado para manter uniformidade visual.
- Botões desativados seguem com Cinza Médio (#B2B2B2) com contraste reduzido.

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
- **Cards de Evento:** título, local, data, botão para participar e feedback.
- **Filtros laterais:** checkboxes por tipo de espécie, região e nível de ameaça.
- **Formulários responsivos:** inputs com bordas arredondadas, labels flutuantes e validação visual.
