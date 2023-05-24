"use strict";
//221233-CHANONA AQUINO CARLOS EDUARDO
//213537-RUIZ ROBLES PEDRO JOSAFAT
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employeesRoute_1 = require("./infrastructure/routes/employeesRoute");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const PORT = 3000;
//Configuracion del middleware que analiza el cuerpo (body) 
//IMPORTANTISIMO INSTALAR junto con su paquete de tipos [pnpm install --save-dev @types/body-parser] sin esto no jala el body
app.use(body_parser_1.default.json());
app.use("/employees", employeesRoute_1.routes);
app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT: ${PORT}`);
});
