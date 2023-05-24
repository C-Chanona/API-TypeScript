"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("../dependencies");
exports.routes = express_1.default.Router();
//llama a las funciones que viven dentro de los controllers
exports.routes.get("/", dependencies_1.employeesController.getEmployees.bind(dependencies_1.employeesController));
exports.routes.get("/:idEmployee", dependencies_1.employeesController.getEmployeeById.bind(dependencies_1.employeesController));
exports.routes.post("/", dependencies_1.employeesController.createEmployee.bind(dependencies_1.employeesController));
