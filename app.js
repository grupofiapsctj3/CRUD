import express from "express";
import cors from 'cors';
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

// Conexão com banco de dados e Criação do servidor Express em (app).

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão:", erro)
});

conexao.once("open", () => {
    console.log("Conexão realizada com sucesso!")
});

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Replace with the origin of your React app
    methods: 'GET,POST,PUT,DELETE', // Adjust the methods as per your need
  }));
routes(app);

export default app;