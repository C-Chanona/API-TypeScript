import { Request, Response } from "express";
import { CreateEmployeesUseCase } from "../../application/CreateEmployeesUseCase";
import { getEmployeesUseCase } from "../../application/GetEmployeesUseCase";
import { getByIdUseCase } from "../../application/GetByIdUseCase";

export class EmployeesController {

    //Recibe una instancia del caso de uso correspondiente para poder usar sus metodos
    constructor(readonly getEmployeesUseCase: getEmployeesUseCase, readonly newEmployee: CreateEmployeesUseCase, 
        readonly getById: getByIdUseCase) { };

    getEmployees = async (req: Request, res: Response) => {
        try {
            const all = await this.getEmployeesUseCase.allEmployees();
            res.status(200).json(all);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }

    getEmployeeById = async(req: Request, res: Response) =>{
        try {
            const {idEmployee} = req.params;
            const oneEmployee = await  this.getById.oneEmployee(idEmployee);
            res.status(200).json(oneEmployee);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }

    createEmployee = async (req: Request, res: Response) => {
        try {
            // Desestructuracion de los datos enviados en el body
            const { name, email, isManager } = req.body;
            
            //Envio de datos al caso de uso
            const dataEmployee = await this.newEmployee.createNewEmployee(name, email, isManager);
            res.status(200).json(dataEmployee);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    };
};