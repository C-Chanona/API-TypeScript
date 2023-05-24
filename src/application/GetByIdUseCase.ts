import { IEmployeesRepository } from "../domain/repositorys/IEmployeesRepository";

export class getByIdUseCase {

    constructor(readonly employeesRepository: IEmployeesRepository){}

    async oneEmployee(id: string) {
        return this.employeesRepository.getByIdEmploye(id)
        .then((employeesResolve) => {
            console.log(employeesResolve);
            return employeesResolve;
        }).catch((error) => {
            console.log(error);
        });
    }
}