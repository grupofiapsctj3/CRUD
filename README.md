# CRUD API

Esta é uma API simples para gerenciamento de livros, utilizando Node.js, Express e PostgreSQL. A API permite criar, ler, atualizar e deletar informações sobre livros.

## Requisitos

- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior)
- PostgreSQL (versão 12 ou superior)

## Instalação

1. **Clone o repositório:**

    Abra o terminal e execute os seguintes comandos:

    ```bash
    git clone https://github.com/grupofiapsctj3/CRUD.git
    cd CRUD
    ```

2. **Instale as dependências:**

    No diretório do projeto, execute:

    ```bash
    npm install
    ```

3. **Configure o banco de dados PostgreSQL:**

   - **Crie um banco de dados:**

     Abra o terminal do PostgreSQL (psql) e execute:

    ```sql
    CREATE DATABASE crud_db;
    ```

   - **Crie a tabela de livros:**

     No terminal do PostgreSQL (psql), conecte-se ao banco de dados e crie a tabela:

    ```bash
    \c crud_db
    ```

    ```sql
    CREATE TABLE books (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      author VARCHAR(100),
      publisher VARCHAR(100)
    );
    ```

4. **Configure a conexão com o banco de dados:**

   - Crie um arquivo `.env` na raiz do projeto com as seguintes configurações:

    ```env
    DB_USER=seu_usuario
    DB_HOST=localhost
    DB_DATABASE=crud_db
    DB_PASSWORD=sua_senha
    DB_PORT=5432
    ```

     Substitua `seu_usuario` e `sua_senha` pelos seus dados de conexão do PostgreSQL.

5. **Inicie o servidor:**

    No diretório do projeto, execute:

    ```bash
    node index.js
    ```

    Você verá a mensagem `Server is running on port 3000` no terminal, indicando que o servidor está em execução.

6. **Teste a API:**

    Acesse a API em `http://localhost:3000` com uma ferramenta como Postman ou cURL.

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
