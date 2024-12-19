"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
var Paciente = /** @class */ (function () {
    //constructor
    function Paciente(nombrePaciente, especie) {
        this.idDueño = 0;
        this.nombrePaciente = nombrePaciente;
        this.especie = especie;
        if (this.especie != "perro" && this.especie != "gato") {
            this.especie = "exotico";
        }
    }
    //getters y setters
    Paciente.prototype.getNombrePaciente = function () {
        return this.nombrePaciente;
    };
    Paciente.prototype.setNombrePaciente = function (nuevonombrePaciente) {
        this.nombrePaciente = nuevonombrePaciente;
    };
    Paciente.prototype.getIdDueño = function () {
        return this.idDueño;
    };
    Paciente.prototype.setIdDueño = function (nuevoidDueño) {
        this.idDueño = nuevoidDueño;
    };
    Paciente.prototype.getEspecie = function () {
        return this.especie;
    };
    Paciente.prototype.setEspecie = function (nuevoespecie) {
        this.especie = nuevoespecie;
    };
    Paciente.prototype.getDatos = function () {
        return ("IdDue\u00F1o:".concat(this.getIdDueño(), "\u2551 Nom Paciente:").concat(this.getNombrePaciente(), "\u2551 Especie:").concat(this.getEspecie()));
    };
    return Paciente;
}());
exports.Paciente = Paciente;
