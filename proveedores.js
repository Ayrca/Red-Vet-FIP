"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proveedor = void 0;
var Proveedor = /** @class */ (function () {
    function Proveedor(nombre, telefono) {
        this.idProveedores = 0;
        this.nombre = nombre;
        this.telefono = telefono;
    }
    //getters y setters
    Proveedor.prototype.getNombreProveedor = function () {
        return this.nombre;
    };
    Proveedor.prototype.setNombreProveedor = function (nuevonombre) {
        this.nombre = nuevonombre;
    };
    Proveedor.prototype.getIdProveedores = function () {
        return this.idProveedores;
    };
    Proveedor.prototype.setIdProveedores = function (nuevoidProveedores) {
        this.idProveedores = nuevoidProveedores;
    };
    Proveedor.prototype.getTelefono = function () {
        return this.telefono;
    };
    Proveedor.prototype.setTelefono = function (nuevotelefono) {
        this.telefono = nuevotelefono;
    };
    Proveedor.prototype.getDatosProveedor = function () {
        return ("IdProv:".concat(this.getIdProveedores(), ", Nom: ").concat(this.getNombreProveedor(), " , Tel: ").concat(this.getTelefono()));
    };
    return Proveedor;
}());
exports.Proveedor = Proveedor;
