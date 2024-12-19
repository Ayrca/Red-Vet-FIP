"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedVeterinaria = void 0;
var veterinarias_1 = require("./veterinarias");
var proveedores_1 = require("./proveedores");
var decoradoMenu_1 = require("./decoradoMenu");
var RedVeterinaria = /** @class */ (function (_super) {
    __extends(RedVeterinaria, _super);
    function RedVeterinaria() {
        var _this = _super.call(this) || this;
        _this.veterinaria = [];
        _this.proveedores = [];
        _this.min = 0;
        _this.max = 1000;
        return _this;
    }
    //Funciones para Veterinarias
    RedVeterinaria.prototype.agregarVeterinaria = function (nuevoVeterinaria) {
        nuevoVeterinaria.setIdVeterinaria(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
        this.asignarIdVeterinaria(nuevoVeterinaria);
        if (nuevoVeterinaria instanceof veterinarias_1.Veterinaria) {
            this.veterinaria.push(nuevoVeterinaria);
            console.log(this.chalk.yellow("Veterinaria agregado:\n" + nuevoVeterinaria.getDatosVeterinaria()));
        }
        else {
            console.log(this.chalk.yellow("No es un objeto Veterinaria"));
        }
    };
    RedVeterinaria.prototype.asignarIdVeterinaria = function (veterinariaAsig) {
        var indiceDuplicado = this.veterinaria.findIndex(function (veterinarias) { return veterinarias.getIdVeterinaria() === veterinariaAsig.getIdVeterinaria(); });
        if (indiceDuplicado !== -1) {
            var nuevoId_1 = 1;
            while (this.veterinaria.some(function (veterinarias) { return veterinarias.getIdVeterinaria() === nuevoId_1; })) {
                nuevoId_1++;
            }
            veterinariaAsig.setIdVeterinaria(nuevoId_1);
        }
    };
    RedVeterinaria.prototype.darDeBajaVeterinaria = function (veterinariaEliminar) {
        var index = this.veterinaria.indexOf(veterinariaEliminar);
        if (index !== -1) {
            this.veterinaria.splice(index, 1);
            console.log(this.chalk.yellow("Veterinaria Eliminada: " + veterinariaEliminar.getDatosVeterinaria()));
        }
        else {
            console.log(this.chalk.yellow("Veterinaria no encontrado"));
        }
    };
    RedVeterinaria.prototype.modificarVeterinaria = function (nombreVeterinariacamb, direccioncamb, veterinariaCambiar) {
        var index = this.veterinaria.indexOf(veterinariaCambiar);
        console.log(this.chalk.yellow("Veterinaria encontrada " + index));
        if (index !== -1) {
            this.veterinaria[index].setNombreVeterinaria(nombreVeterinariacamb);
            this.veterinaria[index].setDireccion(direccioncamb);
            console.log(this.chalk.yellow("Veterinaria fue modificada"));
            this.veterinaria.forEach(function (veterinaria) { return console.log(veterinaria.getDatosVeterinaria()); });
        }
        else {
            console.log(this.chalk.yellow("Veterinaria no encontrado"));
        }
    };
    RedVeterinaria.prototype.imprimirListaVeterinarias = function () {
        var titulo = "Lista de Veterinarias: ";
        var opciones = this.veterinaria.map(function (veterinaria) { return veterinaria.getDatosVeterinaria(); });
        this.crearCasilla(titulo, opciones, 'amarillo');
        console.log(this.chalk.yellow('-------------------------------------' + '\n'));
    };
    //Funciones para Proveedores
    RedVeterinaria.prototype.agregarProveedores = function (nuevoProveedores) {
        nuevoProveedores.setIdProveedores(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
        this.asignarIdProveedores(nuevoProveedores);
        if (nuevoProveedores instanceof proveedores_1.Proveedor) {
            this.proveedores.push(nuevoProveedores);
            console.log(this.chalk.cyan("Proveedores agregado: \n" + nuevoProveedores.getDatosProveedor()));
        }
        else {
            console.log(this.chalk.cyan("No es un objeto Proveedores"));
        }
    };
    RedVeterinaria.prototype.asignarIdProveedores = function (proveedoresAsig) {
        var indiceDuplicado = this.proveedores.findIndex(function (proveedor) { return proveedor.getIdProveedores() === proveedoresAsig.getIdProveedores(); });
        if (indiceDuplicado !== -1) {
            var nuevoId_2 = 1;
            while (this.proveedores.some(function (proveedor) { return proveedor.getIdProveedores() === nuevoId_2; })) {
                nuevoId_2++;
            }
            proveedoresAsig.setIdProveedores(nuevoId_2);
        }
    };
    RedVeterinaria.prototype.darDeBajaProveedores = function (proveedoresEliminar) {
        var index = this.proveedores.indexOf(proveedoresEliminar);
        if (index !== -1) {
            this.proveedores.splice(index, 1);
            console.log(this.chalk.cyan("Proveedores Eliminado: " + proveedoresEliminar.getDatosProveedor()));
        }
        else {
            console.log(this.chalk.cyan("Proveedores no encontrado"));
        }
    };
    RedVeterinaria.prototype.modificarProveedor = function (nombreEmpresacamb, telefonocamb, proveedorCambiar) {
        var index = this.proveedores.indexOf(proveedorCambiar);
        console.log(this.chalk.cyan("Proveedor encontrado " + index));
        if (index !== -1) {
            this.proveedores[index].setNombreProveedor(nombreEmpresacamb);
            this.proveedores[index].setTelefono(telefonocamb);
            console.log(this.chalk.cyan("Proveedor fue modificada"));
            this.proveedores.forEach(function (proveedores) { return console.log(proveedores.getDatosProveedor()); });
        }
        else {
            console.log(this.chalk.cyan("Proveedor no encontrado"));
        }
    };
    RedVeterinaria.prototype.imprimirListaProveedores = function () {
        var titulo = "Lista de Proveedores:";
        var opciones = this.proveedores.map(function (proveedor) { return proveedor.getDatosProveedor(); });
        this.crearCasilla(titulo, opciones, 'azul');
        console.log('-------------------------------------' + '\n');
    };
    //Getters y setters
    RedVeterinaria.prototype.getProveedores = function () {
        return this.proveedores;
    };
    RedVeterinaria.prototype.setProveedores = function (proveedores) {
        this.proveedores = proveedores;
    };
    RedVeterinaria.prototype.getVeterinaria = function () {
        return this.veterinaria;
    };
    RedVeterinaria.prototype.setVeterinaria = function (veterinaria) {
        this.veterinaria = veterinaria;
    };
    return RedVeterinaria;
}(decoradoMenu_1.Decorado));
exports.RedVeterinaria = RedVeterinaria;
