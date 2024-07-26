import express from "express";
import livros from "./livrosRoutes.js";

// criação da função rotas, que recebe a instancia Express (app) como argumento e aplica o middleware para json adicionando a rota livros importada a cima. 

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

    app.use(express.json(), livros);
}

export default routes