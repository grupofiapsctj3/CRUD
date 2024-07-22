# CRUD Livros API

Este é um projeto de exemplo que implementa um CRUD (Create, Read, Update, Delete) para gerenciamento de livros usando Node.js, Express e MongoDB. A aplicação permite a criação, leitura, atualização e exclusão de informações sobre livros.

## Estrutura do Projeto

O projeto possui a seguinte estrutura de diretórios e arquivos:

```
/crud-livros
├── config
│   └── dbConnect.js
├── controllers
│   └── livroController.js
├── models
│   └── Livro.js
├── routes
│   ├── index.js
│   └── livroRoutes.js
├── .env
├── app.js
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## Pré-requisitos

Antes de começar, certifique-se de ter instalado o seguinte:

- [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)
- [MongoDB](https://www.mongodb.com/) (pode ser instalado localmente ou usar o MongoDB Atlas)

## Configuração do Ambiente

1. Clone este repositório para sua máquina local.
2. Navegue até o diretório do projeto.
3. Crie um arquivo `.env` na raiz do projeto e adicione a string de conexão com o MongoDB:
    ```env
    DB_CONNECTION_STRING=mongodb+srv://<seu-usuario>:<sua-senha>@<seu-cluster>.mongodb.net/?retryWrites=true&w=majority
    ```
4. Instale as dependências do projeto:
    ```bash
    npm install
    ```

## Executando o Projeto

1. Para iniciar o servidor de desenvolvimento, execute o comando:
    ```bash
    npm run dev
    ```
2. O servidor estará rodando na porta `3000`. Você pode acessar a API em `http://localhost:3000`.

## Endpoints da API

### Criar um Livro

- **URL:** `/livros`
- **Método:** `POST`
- **Body:**
    ```json
    {
        "nome": "Nome do Livro",
        "autor": "Autor do Livro",
        "editora": "Editora do Livro"
    }
    ```
- **Resposta de Sucesso:**
    ```json
    {
        "message": "Criado com Sucesso!",
        "livro": {
            "nome": "Nome do Livro",
            "autor": "Autor do Livro",
            "editora": "Editora do Livro",
            "_id": "id_gerado_pelo_mongodb"
        }
    }
    ```

### Listar Todos os Livros

- **URL:** `/livros`
- **Método:** `GET`
- **Resposta de Sucesso:**
    ```json
    [
        {
            "_id": "id_do_livro",
            "nome": "Nome do Livro",
            "autor": "Autor do Livro",
            "editora": "Editora do Livro"
        },
        ...
    ]
    ```

### Obter Livro por ID

- **URL:** `/livros/:id`
- **Método:** `GET`
- **Resposta de Sucesso:**
    ```json
    {
        "_id": "id_do_livro",
        "nome": "Nome do Livro",
        "autor": "Autor do Livro",
        "editora": "Editora do Livro"
    }
    ```

### Atualizar Livro

- **URL:** `/livros/:id`
- **Método:** `PUT`
- **Body:**
    ```json
    {
        "nome": "Novo Nome do Livro",
        "autor": "Novo Autor do Livro",
        "editora": "Nova Editora do Livro"
    }
    ```
- **Resposta de Sucesso:**
    ```json
    {
        "message": "Livro Atualizado!"
    }
    ```

### Excluir Livro

- **URL:** `/livros/:id`
- **Método:** `DELETE`
- **Resposta de Sucesso:**
    ```json
    {
        "message": "Livro excluido!"
    }
    ```

## Descrição dos Arquivos

### `dbConnect.js`

Responsável por configurar e conectar ao banco de dados MongoDB.

```javascript
import mongoose from "mongoose";

async function conectaNaDataBase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING)

    return mongoose.connection;
};

export default conectaNaDataBase;
```

### `livroController.js`

Contém as funções que lidam com as operações CRUD para os livros.

### `Livro.js`

Define o modelo de dados para um livro usando Mongoose.

```javascript
import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    nome: { type: String, required: true },
    autor: { type: String },
    editora: { type: String }
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);

export default livro;
```

### `livrosRoutes.js`

Define as rotas para a API de livros.

### `app.js`

Configura o aplicativo Express e integra as rotas.

### `server.js`

Inicia o servidor na porta definida.

## Dependências

- `express`: Framework web para Node.js.
- `mongoose`: ODM (Object Data Modeling) para MongoDB e Node.js.
- `dotenv`: Carrega variáveis de ambiente de um arquivo `.env`.

## Conclusão

Este projeto implementa um CRUD simples para gerenciamento de livros utilizando Node.js, Express e MongoDB.
