import express from "express"
import { employeesController } from "../dependencies";

export const routes = express.Router();

//llama a las funciones que viven dentro de los controllers
routes.get("/", employeesController.getEmployees.bind(employeesController));
routes.get("/:idEmployee", employeesController.getEmployeeById.bind(employeesController));
routes.post("/", employeesController.createEmployee.bind(employeesController));