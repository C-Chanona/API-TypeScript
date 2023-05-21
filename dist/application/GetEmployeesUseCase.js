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
exports.getEmployeesUseCase = void 0;
class getEmployeesUseCase {
    constructor(employeesRepository) {
        this.employeesRepository = employeesRepository;
    }
    allEmployees() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.employeesRepository.getEmployees()
                .then((employeesResolve) => {
                console.log(employeesResolve);
                return employeesResolve;
            }).catch((error) => {
                console.log(error);
            });
        });
    }
}
exports.getEmployeesUseCase = getEmployeesUseCase;
