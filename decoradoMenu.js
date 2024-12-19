"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decorado = void 0;
var Decorado = /** @class */ (function () {
    function Decorado() {
        this.chalk = require('chalk');
        this.titulo1 = ' Menú Red de Veterinarias de consultas ';
        this.opciones1 = [
            ' 1.🐶 - Manejo Veterinarias ',
            ' 2.🏢 - Manejo Proveedores ',
            ' 3.🏥 - Ingresar a una Veterinaria en particular ',
            ' 4.😔 - Salir '
        ];
        this.titulo2 = ' Menú Veterinarias ';
        this.opciones2 = [
            ' 1.🏥 - Agregar Veterinaria ',
            ' 2.🚮 - Dar De Baja Veterinaria ',
            ' 3.🛠️  - Modificar Veterinaria                             ',
            ' 4.📠 - Imprimir Lista Veterinarias ',
            ' 5.👋 - Volver al Menu Principal ',
            ' 6.😔 - Salir '
        ];
        this.titulo3 = ' Menú Proveedores ';
        this.opciones3 = [
            ' 1.🏢 - Agregar Proveedores ',
            ' 2.🚮 - Dar De Baja Proveedores ',
            ' 3.🛠️  - Modificar Proveedor                               ',
            ' 4.📠 - Imprimir Lista Proveedores ',
            ' 5.👋 - Volver al Menu Principal ',
            ' 6.😔 - Salir '
        ];
        this.titulo4 = ' Veterianarias Menu: ';
        this.opciones4 = [
            ' 1.🏢 - Ingresar una Veterinaria Por Nombre ',
            ' 2.📠 - Ver Lista de Veterinarias ',
            ' 3.👋 - Volver al Menu Principal ',
            ' 4.😔 - Salir '
        ];
        this.opciones5 = [
            ' 1.📠 - Ver Lista de Clientes ',
            ' 2.🗂️  - Agregar Paciente/Cliente                          ',
            ' 3.🚮 - Eliminar Clientes/Paciente ',
            ' 4.🛠️  - Modificar Clientes/Pacientes                      ',
            ' 5.🐶 - Eliminar Pacientes ',
            ' 6.📝 - Asistencia Cliente ',
            ' 7.👋 - Volver al Menu Principal ',
            ' 8.😔 - Salir '
        ];
    }
    Decorado.prototype.crearCasilla = function (titulo, opciones, color) {
        var _this = this;
        var ancho = 60; // Define el ancho del cuadro
        var lineaHorizontal = '═'.repeat(ancho); // Crea la línea horizontal con el ancho definido
        var lineaVertical = '║'; // Define la línea vertical
        switch (color) {
            case 'amarillo':
                console.log(this.chalk.yellow("\u2554".concat(lineaHorizontal, "\u2557")));
                console.log(this.chalk.yellow("".concat(lineaVertical, " ").concat(titulo.padEnd(ancho - 2), " ").concat(lineaVertical)));
                console.log(this.chalk.yellow("\u2560".concat(lineaHorizontal, "\u2563")));
                opciones.forEach(function (opcion) {
                    console.log(_this.chalk.yellow("".concat(lineaVertical, " ").concat(opcion.padEnd(ancho - 2), " ").concat(lineaVertical)));
                });
                console.log(this.chalk.yellow("\u255A".concat(lineaHorizontal, "\u255D")));
                break;
            case 'verde':
                console.log(this.chalk.green("\u2554".concat(lineaHorizontal, "\u2557")));
                console.log(this.chalk.green("".concat(lineaVertical, " ").concat(titulo.padEnd(ancho - 2), " ").concat(lineaVertical)));
                console.log(this.chalk.green("\u2560".concat(lineaHorizontal, "\u2563")));
                opciones.forEach(function (opcion) {
                    console.log(_this.chalk.green("".concat(lineaVertical, " ").concat(opcion.padEnd(ancho - 2), " ").concat(lineaVertical)));
                });
                console.log(this.chalk.green("\u255A".concat(lineaHorizontal, "\u255D")));
                break;
            case 'azul':
                console.log(this.chalk.cyan("\u2554".concat(lineaHorizontal, "\u2557")));
                console.log(this.chalk.cyan("".concat(lineaVertical, " ").concat(titulo.padEnd(ancho - 2), " ").concat(lineaVertical)));
                console.log(this.chalk.cyan("\u2560".concat(lineaHorizontal, "\u2563")));
                opciones.forEach(function (opcion) {
                    console.log(_this.chalk.cyan("".concat(lineaVertical, " ").concat(opcion.padEnd(ancho - 2), " ").concat(lineaVertical)));
                });
                console.log(this.chalk.cyan("\u255A".concat(lineaHorizontal, "\u255D")));
                break;
            case 'magenta':
                console.log(this.chalk.magenta("\u2554".concat(lineaHorizontal, "\u2557")));
                console.log(this.chalk.magenta("".concat(lineaVertical, " ").concat(titulo.padEnd(ancho - 2), " ").concat(lineaVertical)));
                console.log(this.chalk.magenta("\u2560".concat(lineaHorizontal, "\u2563")));
                opciones.forEach(function (opcion) {
                    console.log(_this.chalk.magenta("".concat(lineaVertical, " ").concat(opcion.padEnd(ancho - 2), " ").concat(lineaVertical)));
                });
                console.log(this.chalk.magenta("\u255A".concat(lineaHorizontal, "\u255D")));
                break;
            default:
                console.log(this.chalk.white("\u2554".concat(lineaHorizontal, "\u2557")));
                console.log(this.chalk.white("".concat(lineaVertical, " ").concat(titulo.padEnd(ancho - 2), " ").concat(lineaVertical)));
                console.log(this.chalk.white("\u2560".concat(lineaHorizontal, "\u2563")));
                opciones.forEach(function (opcion) {
                    console.log(_this.chalk.white("".concat(lineaVertical, " ").concat(opcion.padEnd(ancho - 2), " ").concat(lineaVertical)));
                });
                console.log(this.chalk.white("".concat(lineaHorizontal, "\u255D")));
                break;
        }
    };
    Decorado.prototype.crearCasilla1 = function (titulo, opciones, color) {
        var _this = this;
        var ancho = 115; // Define el ancho del cuadro
        var lineaHorizontal = '═'.repeat(ancho); // Crea la línea horizontal con el ancho definido
        var lineaVertical = '║'; // Define la línea vertical
        switch (color) {
            case 'amarillo':
                console.log(this.chalk.yellow("\u2554".concat(lineaHorizontal, "\u2557")));
                console.log(this.chalk.yellow("".concat(lineaVertical, " ").concat(titulo.padEnd(ancho - 2), " ").concat(lineaVertical)));
                console.log(this.chalk.yellow("\u2560".concat(lineaHorizontal, "\u2563")));
                opciones.forEach(function (opcion) {
                    console.log(_this.chalk.yellow("".concat(lineaVertical, " ").concat(opcion.padEnd(ancho - 2), " ").concat(lineaVertical)));
                });
                console.log(this.chalk.yellow("\u255A".concat(lineaHorizontal, "\u255D")));
                break;
            case 'verde':
                console.log(this.chalk.green("\u2554".concat(lineaHorizontal, "\u2557")));
                console.log(this.chalk.green("".concat(lineaVertical, " ").concat(titulo.padEnd(ancho - 2), " ").concat(lineaVertical)));
                console.log(this.chalk.green("\u2560".concat(lineaHorizontal, "\u2563")));
                opciones.forEach(function (opcion) {
                    console.log(_this.chalk.green("".concat(lineaVertical, " ").concat(opcion.padEnd(ancho - 2), " ").concat(lineaVertical)));
                });
                console.log(this.chalk.green("\u255A".concat(lineaHorizontal, "\u255D")));
                break;
            case 'azul':
                console.log(this.chalk.cyan("\u2554".concat(lineaHorizontal, "\u2557")));
                console.log(this.chalk.cyan("".concat(lineaVertical, " ").concat(titulo.padEnd(ancho - 2), " ").concat(lineaVertical)));
                console.log(this.chalk.cyan("\u2560".concat(lineaHorizontal, "\u2563")));
                opciones.forEach(function (opcion) {
                    console.log(_this.chalk.cyan("".concat(lineaVertical, " ").concat(opcion.padEnd(ancho - 2), " ").concat(lineaVertical)));
                });
                console.log(this.chalk.cyan("\u255A".concat(lineaHorizontal, "\u255D")));
                break;
            case 'magenta':
                console.log(this.chalk.magenta("\u2554".concat(lineaHorizontal, "\u2557")));
                console.log(this.chalk.magenta("".concat(lineaVertical, " ").concat(titulo.padEnd(ancho - 2), " ").concat(lineaVertical)));
                console.log(this.chalk.magenta("\u2560".concat(lineaHorizontal, "\u2563")));
                opciones.forEach(function (opcion) {
                    console.log(_this.chalk.magenta("".concat(lineaVertical, " ").concat(opcion.padEnd(ancho - 2), " ").concat(lineaVertical)));
                });
                console.log(this.chalk.magenta("\u255A".concat(lineaHorizontal, "\u255D")));
                break;
            default:
                console.log(this.chalk.white("\u2554".concat(lineaHorizontal, "\u2557")));
                console.log(this.chalk.white("".concat(lineaVertical, " ").concat(titulo.padEnd(ancho - 2), " ").concat(lineaVertical)));
                console.log(this.chalk.white("\u2560".concat(lineaHorizontal, "\u2563")));
                opciones.forEach(function (opcion) {
                    console.log(_this.chalk.white("".concat(lineaVertical, " ").concat(opcion.padEnd(ancho - 2), " ").concat(lineaVertical)));
                });
                console.log(this.chalk.white("".concat(lineaHorizontal, "\u255D")));
                break;
        }
    };
    Decorado.prototype.getTitulo1 = function () {
        return this.titulo1;
    };
    Decorado.prototype.getOpciones1 = function () {
        return this.opciones1;
    };
    Decorado.prototype.getTitulo2 = function () {
        return this.titulo2;
    };
    Decorado.prototype.getOpciones2 = function () {
        return this.opciones2;
    };
    Decorado.prototype.getTitulo3 = function () {
        return this.titulo3;
    };
    Decorado.prototype.getOpciones3 = function () {
        return this.opciones3;
    };
    Decorado.prototype.getTitulo4 = function () {
        return this.titulo4;
    };
    Decorado.prototype.getOpciones4 = function () {
        return this.opciones4;
    };
    Decorado.prototype.getOpciones5 = function () {
        return this.opciones5;
    };
    return Decorado;
}());
exports.Decorado = Decorado;
