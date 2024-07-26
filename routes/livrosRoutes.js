import express from "express";
import LivroController from "../controller/livroController.js";

// Criação de um roteador para agrupamento das rotas deste .js

const routes = express.Router();

// Criação das rotas de livros vinculado aos metodos correspondentes de LivroController

routes.get("/livros", LivroController.listaLivros);
routes.get("/livros/:id", LivroController.listaLivroPorID);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.updateLivro);
routes.delete("/livros/:id", LivroController.deleteLivro);

export default routes