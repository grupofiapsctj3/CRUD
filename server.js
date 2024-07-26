import "dotenv/config";
import app from "./app.js";

// definicação da porta da API

const PORT = 3000;

// starta o servidor "escutando" requisições na porta definida da API.

app.listen(PORT, () => {
  console.log("servidor escutando!");
});
