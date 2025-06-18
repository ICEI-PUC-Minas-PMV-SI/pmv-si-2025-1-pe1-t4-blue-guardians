# Como Rodar o JSON Server no Projeto Blue Guardians

Este guia atualizado explica como configurar e executar os JSON Servers usando sua estrutura de diretórios atual.

## Pré-requisitos
- Node.js instalado (versão 14+)
- NPM (vem com Node.js)
- Projeto clonado no diretório: `C:\Users\elisa\OneDrive\Área de Trabalho\pmv-si-2025-1-pe1-t4-blue-guardians`

## Passo 1: Configurar o package.json

Atualize seu `package.json` na raiz do projeto com:

```json
{
  "name": "blue-guardians",
  "version": "1.0.0",
  "scripts": {
    "api": "concurrently \"json-server --watch db.json --port 3001\" \"json-server --watch especies_marinhas.json --port 3000\""
  },
  "dependencies": {
    "concurrently": "^8.2.2",
    "json-server": "^1.0.0-beta.3"
  }
}
```
## Passo 2: Instalar Dependências
Execute no terminal (na raiz do projeto):

```bash
npm install
```
## Passo 3: Iniciar os Servidores
Execute o comando:

```bash
npm run api
```

Isso iniciará:
Servidor principal na porta 3001 com db.json
Servidor de espécies marinhas na porta 3000 com especies_marinhas.json

## Passo 4: Verificar Funcionamento
Acesse no navegador:

Eventos: http://localhost:3001/events
Espécies: http://localhost:3000/especies_marinhas

## Passo 5: Executar o Frontend Corretamente
Nunca abra os arquivos HTML diretamente! Use um servidor local:

Com Python
```bash
# Na raiz do projeto:
python -m http.server 8000
```
Acesse: http://localhost:8000/source/

Configuração Recomendada para fetch()
Atualize suas chamadas fetch para:

```javascript
// Para eventos
fetch("http://localhost:3001/events")

// Para espécies
fetch("http://localhost:3000/especies_marinhas")
```