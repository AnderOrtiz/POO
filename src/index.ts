import { Empleado, EmpleadoTiempoCompleto, EmpleadoPorHoras } from "./empleado.js";

const empleado = new Empleado('Juan', 'M', 22, 12312323);
console.table(empleado)

const empleadoTiempoCompleto = new EmpleadoTiempoCompleto('Juan2', 'M', 22, 12312323, 500);
console.table(empleadoTiempoCompleto)

const empleadoPorHoras = new EmpleadoPorHoras('Juan3', 'M', 22, 12312323, 20, 2.5);
console.table(empleadoPorHoras)