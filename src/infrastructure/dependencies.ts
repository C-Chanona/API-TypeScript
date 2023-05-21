import { EmployeesRepository } from "./EntityManager/EmployeesRepository";
import { CreateEmployeesUseCase } from "../application/CreateEmployeesUseCase";
import { EmployeesController } from "./controllers/EmployeesController";
import { getEmployeesUseCase } from "../application/GetEmployeesUseCase";


//Repositorys
const employeesRep = new EmployeesRepository();

//Casos de uso con repositorys como parametros
const getEmployees = new getEmployeesUseCase(employeesRep);
const newEmployee = new CreateEmployeesUseCase(employeesRep);

//Controladores con sus casos de uso
export const employeesController = new EmployeesController(getEmployees, newEmployee);