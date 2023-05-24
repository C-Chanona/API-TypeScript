import { Employees } from "../entities/Employees";

export interface IEmployeesRepository{
    
    //METODOS que interactuan con mi BD
    //regresa una promesa de tipo Employees, quien se encuentra en entidad
    getEmployees(): Promise <Employees[] | null>;
    createEmployes(name: string, email: string, isManager: boolean): Promise <Employees | null>;
    getByIdEmploye(id: string):Promise <Employees | null> ;
}