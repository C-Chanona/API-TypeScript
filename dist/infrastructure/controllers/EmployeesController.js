"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesController = void 0;
class EmployeesController {
    //Recibe una instancia del caso de uso correspondiente para poder usar sus metodos
    constructor(getEmployeesUseCase, newEmployee, getById) {
        this.getEmployeesUseCase = getEmployeesUseCase;
        this.newEmployee = newEmployee;
        this.getById = getById;
        this.getEmployees = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const all = yield this.getEmployeesUseCase.allEmployees();
                res.status(200).json(all);
            }
            catch (error) {
                res.status(500).json({ error: "Internal server error" });
            }
        });
        this.getEmployeeById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { idEmployee } = req.params;
                const oneEmployee = yield this.getById.oneEmployee(idEmployee);
                res.status(200).json(oneEmployee);
            }
            catch (error) {
                res.status(500).json({ error: "Internal server error" });
            }
        });
        this.createEmployee = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                // Desestructuracion de los datos enviados en el body
                const { name, email, isManager } = req.body;
                //Envio de datos al caso de uso
                const dataEmployee = yield this.newEmployee.createNewEmployee(name, email, isManager);
                res.status(200).json(dataEmployee);
            }
            catch (error) {
                res.status(500).json({ error: "Internal server error" });
            }
        });
    }
    ;
}
exports.EmployeesController = EmployeesController;
;
