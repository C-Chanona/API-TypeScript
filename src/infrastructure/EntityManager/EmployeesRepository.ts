import { Employees } from "../../domain/entities/Employees";
import { IEmployeesRepository } from "../../domain/repositorys/IEmployeesRepository";
import { Pooler } from "../database/Pooler";
import { QueryError } from "mysql2";

export class EmployeesRepository implements IEmployeesRepository {
    
    async getByIdEmploye(id: string): Promise<Employees | null> {
        const database = new Pooler();
        return await new Promise((resolve, reject) =>{
            const queryEmployee = `SELECT * FROM employees_exe.employees WHERE id_employee = ${id}`;
            database.pool.query(queryEmployee, (error: QueryError, success: Employees) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(success);
                }
            })
        })
    }

    async getEmployees(): Promise<Employees[] | null> {
        const database = new Pooler();
        return await new Promise((resolve, reject) => {
            database.pool.query("SELECT * FROM employees_exe.employees", (error: QueryError, rows: Employees[]) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
        });
    };

    async createEmployes(name: string, email: string, isManager: boolean): Promise<Employees | null> {
        const database = new Pooler();
        return await new Promise((resolve, reject) => {
            const queryEmployee = `INSERT INTO employees_exe.employees(name,email,isManager) VALUES ('${name}', '${email}', ${isManager})`;
            database.pool.query(queryEmployee, (error: QueryError, success: Employees ) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(success);
                }
            });
        });
    };

}