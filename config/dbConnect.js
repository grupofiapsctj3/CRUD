import mongoose from "mongoose";

// Função para conexão com do banco mongo Atlas via mon 

async function conectaNaDataBase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING)

    return mongoose.connection;
};

export default conectaNaDataBase;