# CRUD API

Esta é uma API simples para gerenciamento de livros, utilizando Node.js, Express e PostgreSQL. A API permite criar, ler, atualizar e deletar informações sobre livros.

## Requisitos

- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior)
- PostgreSQL (versão 12 ou superior)

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/grupofiapsctj3/CRUD.git
    cd CRUD
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure o banco de dados PostgreSQL:

   - Crie um banco de dados chamado `crud_db` (ou o nome que preferir):

    ```sql
    CREATE DATABASE crud_db;
    ```

   - Crie a tabela de livros executando o seguinte comando SQL no seu banco de dados:

    ```sql
    CREATE TABLE books (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      author VARCHAR(100),
      publisher VARCHAR(100)
    );
    ```

4. Configure a conexão com o banco de dados:

   - Crie um arquivo `.env` na raiz do projeto e adicione suas configurações de banco de dados:

    ```env
    DB_USER=seu_usuario
    DB_HOST=localhost
    DB_DATABASE=crud_db
    DB_PASSWORD=sua_senha
    DB_PORT=5432
    ```

5. Inicie o servidor:

    ```bash
    node index.js
    ```

6. Acesse a API em `http://localhost:3000`.

## Endpoints

### Criar um livro

- **URL:** `/books`
- **Método:** `POST`
- **Body:**
  ```json
  {
    "name": "Nome do Livro",
    "author": "Autor do Livro",
    "publisher": "Editora do Livro"
  }
