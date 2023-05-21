"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pooler = void 0;
const mysql2_1 = require("mysql2");
class Pooler {
    constructor() {
        this.poolConfig = {
            host: "localhost",
            user: "Chanona",
            password: "carloseduardo",
            port: 3306,
            database: "employees_exe"
        };
        //Ahora esta variable importala en rutas
        this.pool = (0, mysql2_1.createPool)(this.poolConfig);
    }
}
exports.Pooler = Pooler;
;
