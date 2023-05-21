import express from "express"
import { routes } from "./infrastructure/routes/employeesRoute";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

//Configuracion del middleware que analiza el cuerpo (body) 
//IMPORTANTISIMO INSTALAR junto con su paquete de tipos [pnpm install --save-dev @types/body-parser] sin esto no jala el body
app.use(bodyParser.json());

app.use("/employees", routes);

app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT: ${PORT}`);
});