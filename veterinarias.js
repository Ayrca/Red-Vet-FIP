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
exports.Veterinaria = void 0;
var clientes_1 = require("./clientes");
var decoradoMenu_1 = require("./decoradoMenu");
var mascotas_1 = require("./mascotas");
var Veterinaria = /** @class */ (function (_super) {
    __extends(Veterinaria, _super);
    //constructor
    function Veterinaria(nombreVeterinaria, direccion) {
        var _this = _super.call(this) || this;
        _this.cliente = [];
        _this.min = 0;
        _this.max = 1000;
        _this.idVeterinaria = 0;
        _this.nombreVeterinaria = nombreVeterinaria;
        _this.direccion = direccion;
        return _this;
    }
    //Manejo Clientes
    Veterinaria.prototype.agregarCliente = function (nuevoCliente) {
        if (nuevoCliente instanceof clientes_1.Cliente) {
            nuevoCliente.setIdCliente(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
            nuevoCliente.getPaciente().setIdDueño(nuevoCliente.getIdCliente());
            this.asignarIdCliente(nuevoCliente);
            this.cliente.push(nuevoCliente);
            console.log(this.chalk.magenta("Cliente agregado:\n" + nuevoCliente.getDatos()));
        }
        else {
            console.log(this.chalk.magenta("No es un objeto Cliente"));
        }
    };
    Veterinaria.prototype.darDeBajaCliente = function (clienteEliminar) {
        var index = this.cliente.indexOf(clienteEliminar);
        if (index !== -1) {
            this.cliente.splice(index, 1);
            console.log(this.chalk.magenta("Cliente Eliminado: " + clienteEliminar.getDatos()));
        }
        else {
            console.log(this.chalk.magenta("Cliente no encontrado"));
        }
    };
    Veterinaria.prototype.asignarIdCliente = function (clienteAsig) {
        var indiceDuplicado = this.cliente.findIndex(function (cliente) { return cliente.getIdCliente() === clienteAsig.getIdCliente(); });
        if (indiceDuplicado !== -1) {
            var nuevoId_1 = 1;
            while (this.cliente.some(function (cliente) { return cliente.getIdCliente() === nuevoId_1; })) {
                nuevoId_1++;
            }
            clienteAsig.setIdCliente(nuevoId_1);
            clienteAsig.getPaciente().setIdDueño(clienteAsig.getIdCliente());
        }
    };
    Veterinaria.prototype.modificarCliente = function (nombreClientecamb, telefonocamb, calidaVipcamb, clienteCambiar) {
        var index = this.cliente.indexOf(clienteCambiar);
        console.log(this.chalk.magenta(this.chalk.magenta("Cliente encontrado " + index)));
        if (index !== -1) {
            this.cliente[index].setNombreCliente(nombreClientecamb);
            this.cliente[index].setTelefono(telefonocamb);
            this.cliente[index].setCalidaVip(calidaVipcamb);
            console.log(this.chalk.magenta("Cliente fue modificado"));
            this.cliente.forEach(function (cliente) { return console.log(cliente.getDatos()); });
        }
        else {
            console.log(this.chalk.magenta("Cliente no encontrado"));
        }
    };
    Veterinaria.prototype.clienteVisita = function (clientevisit) {
        clientevisit.setContadorVisitas(clientevisit.getContadorVisitas() + 1);
        console.log(this.chalk.magenta("Nos ha visitado el Cliente: ".concat(clientevisit.getNombreCliente(), ", N\u00BA de visitas ").concat(clientevisit.getContadorVisitas())));
        if (clientevisit.getContadorVisitas() >= 5 || clientevisit.getCalidaVip() == true) {
            console.log(this.chalk.magenta("Cliente ".concat(clientevisit.getNombreCliente(), " Cliente: VIP")));
            clientevisit.setCalidaVip(true);
        }
        else {
            console.log(this.chalk.magenta("Cliente ".concat(clientevisit.getNombreCliente(), " Cliente:NO VIP")));
        }
    };
    //Manejo Pacientes
    Veterinaria.prototype.modificarPaciente = function (nombrePacientecamb, especiecamb, pacienteModificar) {
        var clienteEncontrado = this.cliente.find(function (cliente) { return cliente.getPaciente().getIdDueño() === pacienteModificar.getIdDueño(); });
        if (clienteEncontrado) {
            clienteEncontrado.getPaciente().setNombrePaciente(nombrePacientecamb);
            clienteEncontrado.getPaciente().setEspecie(especiecamb);
            console.log(this.chalk.magenta("Paciente modificado con éxito"));
            console.log(clienteEncontrado.getPaciente().getDatos());
        }
        else {
            console.log(this.chalk.magenta("Paciente no encontrado en ningún cliente"));
        }
    };
    Veterinaria.prototype.eliminarPaciente = function (pacienteEliminar) {
        var clienteEncontrado = this.cliente.find(function (cliente) { return cliente.getPaciente().getIdDueño() === pacienteEliminar.getIdDueño(); });
        if (clienteEncontrado) {
            var pacienteVacio = new mascotas_1.Paciente("", "");
            clienteEncontrado.setPaciente(pacienteVacio);
            console.log(this.chalk.magenta("Paciente eliminado con éxito"));
        }
        else {
            console.log(this.chalk.magenta("Paciente no encontrado en ningún cliente"));
        }
    };
    //getters y setters
    Veterinaria.prototype.getNombreVeterinaria = function () {
        return this.nombreVeterinaria;
    };
    Veterinaria.prototype.setNombreVeterinaria = function (nuevonombreVeterinaria) {
        this.nombreVeterinaria = nuevonombreVeterinaria;
    };
    Veterinaria.prototype.getIdVeterinaria = function () {
        return this.idVeterinaria;
    };
    Veterinaria.prototype.setIdVeterinaria = function (nuevoidVeterinaria) {
        this.idVeterinaria = nuevoidVeterinaria;
    };
    Veterinaria.prototype.getDireccion = function () {
        return this.direccion;
    };
    Veterinaria.prototype.setDireccion = function (nuevodireccion) {
        this.direccion = nuevodireccion;
    };
    Veterinaria.prototype.getCliente = function () {
        return this.cliente;
    };
    Veterinaria.prototype.setCliente = function (cliente) {
        this.cliente = cliente;
    };
    Veterinaria.prototype.imprimirListaCliente = function () {
        var titulo = "Lista de Clientes: ";
        var opciones = this.cliente.map(function (cliente) { return cliente.getDatos(); });
        this.crearCasilla1(titulo, opciones, 'magenta');
        console.log(this.chalk.magenta('-------------------------------------' + '\n'));
    };
    Veterinaria.prototype.getDatosVeterinariaClientes = function () {
        return ("IdVet:".concat(this.getIdVeterinaria(), ", Nom: ").concat(this.getNombreVeterinaria(), ", Dir: ").concat(this.getDireccion(), "\n    Cliente: ") + this.cliente.map(function (cliente) { return cliente.getDatos(); }).join("\n"));
    };
    Veterinaria.prototype.getDatosVeterinaria = function () {
        return ("IdVet:".concat(this.getIdVeterinaria(), ", Nom:").concat(this.getNombreVeterinaria(), ", Dir:").concat(this.getDireccion()));
    };
    return Veterinaria;
}(decoradoMenu_1.Decorado));
exports.Veterinaria = Veterinaria;
