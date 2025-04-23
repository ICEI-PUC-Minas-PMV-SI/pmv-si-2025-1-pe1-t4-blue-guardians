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
- Cinza Médio (#A3A3A3): Botões desativados (off).

## Tipografia
| Função                 | Fonte | Peso     | Tamanho aproximado |
| ---------------------- | ----- | -------- | ------------------ |
| Título da página       | Inter | Bold     | 20–24px            |
| Títulos de seção       | Inter | SemiBold | 18–20px            |
| Rótulos de componentes | Inter | Medium   | 14–16px            |
| Corpo do texto         | Inter | Regular  | 14–16px            |

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
