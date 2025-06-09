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
## 2. Rodar o JSON Server com o `db.json`

No terminal, dentro da pasta do projeto, execute:

```bash
json-server --watch source/assets/api/db.json --port 3001
```

Isso vai iniciar uma API REST simulada que escuta na porta **3001**.

As rotas disponíveis (exemplo para o seu `db.json`) serão:
```bash
http://localhost:3001/eventos
http://localhost:3001/usuarios
http://localhost:3001/denuncias
http://localhost:3001/contents
http://localhost:3001/tabData
http://localhost:3001/feedbacks
```
---
## 3. Rodar o JSON Server com o arquivo `especies_marinhas.json`

Se desejar rodar o servidor para o arquivo de espécies marinhas, execute:

```bash
json-server --watch source/assets/api/especies_marinhas.json --port 3000
```

Isso vai iniciar um servidor API local na porta **3000**, disponibilizando os dados desse JSON para seu projeto.

> **Importante:** certifique-se de que a porta escolhida (3001, 3000, etc.) esteja disponível e não esteja sendo usada por outro programa, para evitar conflitos.

## 4. Rodar os JSON Servers

### 4.1 Instalar as dependências
No terminal, dentro da pasta do projeto, execute para instalar as bibliotecas necessárias:
```bash
npm install json-server concurrently --save-dev
```

## 4.2 Configurar o script no package.json
No arquivo `package.json`, é comprovado que está disponível o seguinte script na seção "scripts":
```json
"scripts": {
  "api": "concurrently \"json-server --watch source/assets/api/db.json --port 3001\" \"json-server --watch source/assets/api/especies_marinhas.json --port 3000\""
}
```

## 4.3 Executar os Servidores JSON
No terminal, execute:
```bash
npm run api
```
Isso vai iniciar dois servidores JSON simultaneamente:
- API principal com os dados db.jsonna porta 3001
- API das espécies marinhas na especies_marinhas.jsonporta 3000

## 5.Por que não funciona abrir o arquivo direto no navegador?
Por questões de segurança, os navegadores bloqueiam requisições fetch() para arquivos locais (file://). Por isso, abrir o arquivo HTML diretamente (ex: duplo clique no arquivo) pode não carregar os dados do JSON.

### Solução: rodar um servidor local
Se você tem o Python instalado, navegue até a pasta do projeto no terminal e execute:
```bash
python -m http.server 8000
```
Isso inicia um servidor local na porta 8000.

Abra o navegador por exemplo em:
```bash
http://localhost:8000/source/events.html
```
Agora seu fetch() poderá carregar os dados do db.json normalmente, porque o navegador entende que está acessando um servidor (HTTP) e não um arquivo local.
