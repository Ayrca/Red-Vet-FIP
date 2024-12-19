"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    //constructor
    function Cliente(nombreCliente, telefono, calidaVip, pacientes) {
        this.idCliente = 0;
        this.nombreCliente = nombreCliente;
        this.telefono = telefono;
        this.calidaVip = calidaVip;
        this.contadorVisitas = 0;
        this.pacientes = pacientes;
    }
    // getters y setters
    Cliente.prototype.getNombreCliente = function () {
        return this.nombreCliente;
    };
    Cliente.prototype.setNombreCliente = function (nuevonombreCliente) {
        this.nombreCliente = nuevonombreCliente;
    };
    Cliente.prototype.getIdCliente = function () {
        return this.idCliente;
    };
    Cliente.prototype.setIdCliente = function (nuevoidCliente) {
        this.idCliente = nuevoidCliente;
    };
    Cliente.prototype.getTelefono = function () {
        return this.telefono;
    };
    Cliente.prototype.setTelefono = function (nuevoTelefono) {
        this.telefono = nuevoTelefono;
    };
    Cliente.prototype.getContadorVisitas = function () {
        return this.contadorVisitas;
    };
    Cliente.prototype.setContadorVisitas = function (nuevoContadorVisitas) {
        this.contadorVisitas = nuevoContadorVisitas;
    };
    Cliente.prototype.getCalidaVip = function () {
        return this.calidaVip;
    };
    Cliente.prototype.setCalidaVip = function (nuevoCalidaVip) {
        this.calidaVip = nuevoCalidaVip;
    };
    Cliente.prototype.setPaciente = function (nuevoPacientes) {
        this.pacientes = nuevoPacientes;
    };
    Cliente.prototype.getPaciente = function () {
        return this.pacientes;
    };
    Cliente.prototype.getDatos = function () {
        return ("IdCliente:".concat(this.getIdCliente(), "\u2551 Nom: ").concat(this.getNombreCliente(), "\u2551 Tel: ").concat(this.getTelefono(), "\u2551 Vip: ").concat(this.getCalidaVip(), "\u2551 Paciente:").concat(this.pacientes.getDatos()));
    };
    return Cliente;
}());
exports.Cliente = Cliente;
