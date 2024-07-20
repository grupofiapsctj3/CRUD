# CRUD API

Esta é uma API simples para gerenciamento de livros, utilizando Node.js, Express e MongoDB. A API permite criar, ler, atualizar e deletar informações sobre livros.
![stable-diffusion-imagem](https://github.com/user-attachments/assets/ee75e649-3439-4923-9a00-7e0dd2374d57)

## Requisitos

- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior)
- MongoDB (versão 4 ou superior)
- Postman (para testar a API)

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

3. **Configure o MongoDB:**

   - **Inicie o MongoDB:**

     Se você estiver usando Docker, pode iniciar o MongoDB com o seguinte comando:

    ```bash
    docker run -d -p 27017:27017 --name mongodb mongo
    ```

   - **Crie um banco de dados:**

     Não é necessário criar um banco de dados explicitamente. O MongoDB criará automaticamente o banco de dados quando você inserir dados nele.

4. **Configure a conexão com o MongoDB:**

   - Crie um arquivo `.env` na raiz do projeto com as seguintes configurações:

    ```env
    MONGO_URI=mongodb://localhost:27017/crud_db
    PORT=3000
    ```

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
