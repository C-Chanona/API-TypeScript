"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeesController = void 0;
const EmployeesRepository_1 = require("./EntityManager/EmployeesRepository");
const CreateEmployeesUseCase_1 = require("../application/CreateEmployeesUseCase");
const EmployeesController_1 = require("./controllers/EmployeesController");
const GetEmployeesUseCase_1 = require("../application/GetEmployeesUseCase");
//Repositorys
const employeesRep = new EmployeesRepository_1.EmployeesRepository();
//Casos de uso con repositorys como parametros
const getEmployees = new GetEmployeesUseCase_1.getEmployeesUseCase(employeesRep);
const newEmployee = new CreateEmployeesUseCase_1.CreateEmployeesUseCase(employeesRep);
//Controladores con sus casos de uso
exports.employeesController = new EmployeesController_1.EmployeesController(getEmployees, newEmployee);
