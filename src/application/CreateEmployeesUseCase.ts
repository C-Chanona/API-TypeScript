import { IEmployeesRepository } from "../domain/repositorys/IEmployeesRepository";

export class CreateEmployeesUseCase{

    //El caso de uso recibe el repository para poder inicializarlo y tener acceso a sus metodos
    constructor(readonly employeesRepository: IEmployeesRepository){};

    //metodo que hace uso del repository
    async createNewEmployee(name: string, email:string, isManager: boolean){
        return this.employeesRepository.createEmployes(name,email,isManager)
        .then((newEmploye) => {
            console.log(newEmploye);
            return newEmploye;
        }).catch((error) => {
            console.log(error);
        });
    };
};