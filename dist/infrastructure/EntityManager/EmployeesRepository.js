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
exports.EmployeesRepository = void 0;
const Pooler_1 = require("../database/Pooler");
class EmployeesRepository {
    getByIdEmploye(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const database = new Pooler_1.Pooler();
            return yield new Promise((resolve, reject) => {
                const queryEmployee = `SELECT * FROM employees_exe.employees WHERE id_employee = ${id}`;
                database.pool.query(queryEmployee, (error, success) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(success);
                    }
                });
            });
        });
    }
    getEmployees() {
        return __awaiter(this, void 0, void 0, function* () {
            const database = new Pooler_1.Pooler();
            return yield new Promise((resolve, reject) => {
                database.pool.query("SELECT * FROM employees_exe.employees", (error, rows) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(rows);
                    }
                });
            });
        });
    }
    ;
    createEmployes(name, email, isManager) {
        return __awaiter(this, void 0, void 0, function* () {
            const database = new Pooler_1.Pooler();
            return yield new Promise((resolve, reject) => {
                const queryEmployee = `INSERT INTO employees_exe.employees(name,email,isManager) VALUES ('${name}', '${email}', ${isManager})`;
                database.pool.query(queryEmployee, (error, success) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(success);
                    }
                });
            });
        });
    }
    ;
}
exports.EmployeesRepository = EmployeesRepository;
