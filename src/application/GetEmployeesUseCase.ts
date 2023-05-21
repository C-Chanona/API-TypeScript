import { IEmployeesRepository } from "../domain/repositorys/IEmployeesRepository";

export class getEmployeesUseCase {

    constructor(readonly employeesRepository: IEmployeesRepository){}

    async allEmployees() {
        return this.employeesRepository.getEmployees()
        .then((employeesResolve) => {
            console.log(employeesResolve);
            return employeesResolve;
        }).catch((error) => {
            console.log(error);
        });
    }
}