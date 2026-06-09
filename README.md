# 🎮 Catálogo de Jogos - API

API REST desenvolvida com Node.js, Express e MongoDB para gerenciamento de um catálogo de jogos.

O sistema permite realizar operações de CRUD (Create, Read, Update e Delete) de jogos, armazenando os dados em um banco MongoDB.

## Tecnologias Utilizadas

* Node.js
* Express
* MongoDB Atlas
* Mongoose
* Dotenv
* Cors

## Estrutura do Projeto

```text
src/
├── config/
├── controllers/
├── models/
├── routes/
└── app.js

server.js
.env
package.json
```

## Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Acesse a pasta do projeto:

```bash
cd catalogo-games-api
```

Instale as dependências:

```bash
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000

MONGO_URI=sua_string_de_conexao_mongodb
```

## Executando o Projeto

Modo desenvolvimento:

```bash
npm run dev
```

Modo produção:

```bash
npm start
```

A API estará disponível em:

```text
http://localhost:3000
```

## Rotas da API

### Listar todos os jogos

```http
GET /games
```

### Buscar jogo por ID

```http
GET /games/:id
```

### Cadastrar jogo

```http
POST /games
```

Exemplo de corpo da requisição:

```json
{
  "nome": "Hades",
  "plataforma": "PC",
  "genero": "Roguelike",
  "status": "Jogando",
  "nota": 10
}
```

### Atualizar jogo

```http
PUT /games/:id
```

### Excluir jogo

```http
DELETE /games/:id
```

## Deploy

API publicada em:

https://catalogo-jogos.onrender.com

## Autor

Maria Cecília
Projeto desenvolvido para a disciplina de Desenvolvimento Mobile Fullstack com React Native.
