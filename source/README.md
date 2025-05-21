# Como Rodar o JSON Server no Projeto Blue Guardians

Este guia explica passo a passo como configurar e executar o JSON Server para simular uma API REST usando o arquivo `db.json`. Também traz dicas importantes sobre o uso correto do `fetch()` no frontend.

---

## 1. Instalar o JSON Server

### Pré-requisito: Node.js

Se você ainda não tem o Node.js instalado, baixe e instale a partir do site oficial:  
[https://nodejs.org/](https://nodejs.org/)

---

### Instalação global (recomendado)

Abra o terminal na pasta do seu projeto e rode:

```bash
npm install -g json-server
```

Instalação local no projeto (alternativa)
Se preferir instalar localmente (dentro da pasta do projeto), execute:

```bash
npm init -y
npm install json-server --save-dev
```

---
## 2. Rodar o JSON Server
No terminal, dentro da pasta do projeto, execute:

```bash
json-server --watch db.json --port 3000
```
Isso vai iniciar uma API REST simulada que escuta a porta 3001.

As rotas disponíveis (exemplo para o seu db.json) serão:
```bash
http://localhost:3001/eventos
http://localhost:3001/usuarios
http://localhost:3001/denuncias
```
---

## 3.Por que não funciona abrir o arquivo direto no navegador?
Por questões de segurança, os navegadores bloqueiam requisições fetch() para arquivos locais (file://). Por isso, abrir o arquivo HTML diretamente (ex: duplo clique no arquivo) pode não carregar os dados do JSON.

### Solução: rodar um servidor local
Se você tem o Python instalado, navegue até a pasta do projeto no terminal e execute:
```bash
# Para Python 3
python3 -m http.server 8000
```
Isso inicia um servidor local na porta 8000.

Abra o navegador por exemplo em:
```bash
http://localhost:8000/source/events.html
```
Agora seu fetch() poderá carregar os dados do db.json normalmente, porque o navegador entende que está acessando um servidor (HTTP) e não um arquivo local.