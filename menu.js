"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var readline = require("readline");
var veterinarias_1 = require("./veterinarias");
var clientes_1 = require("./clientes");
var mascotas_1 = require("./mascotas");
var redVet_1 = require("./redVet");
var proveedores_1 = require("./proveedores");
var decoradoMenu_1 = require("./decoradoMenu");
//import chalk from 'chalk';
var Menu = /** @class */ (function () {
    function Menu() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.decorado = new decoradoMenu_1.Decorado();
        this.redVet1 = new redVet_1.RedVeterinaria();
        // Menu Red de Veterinarias
        this.chalk = require('chalk');
    }
    Menu.prototype.menuRedVet = function () {
        var _this = this;
        this.decorado.crearCasilla(this.decorado.getTitulo1(), this.decorado.getOpciones1(), "verde");
        this.rl.question(this.chalk.green.bold('Ingrese su opción: '), function (opcion1) {
            switch (opcion1) {
                case '1':
                    console.clear();
                    _this.menuVeterinarias();
                    break;
                case '2':
                    console.clear();
                    _this.menuProveedores();
                    break;
                case '3':
                    console.clear();
                    _this.menuDeVeterinaria();
                    break;
                case '4':
                    _this.rl.close();
                    break;
                default:
                    console.clear();
                    console.log(_this.chalk.red.bold.underline('Opción inválida'));
                    _this.menuRedVet();
            }
        });
    };
    //Menu Para manejar las Veterinarias dentro de la Red de Veterinarias
    Menu.prototype.menuVeterinarias = function () {
        var _this = this;
        var veterinarias = this.redVet1.getVeterinaria();
        this.decorado.crearCasilla(this.decorado.getTitulo2(), this.decorado.getOpciones2(), "amarillo");
        this.rl.question(this.chalk.yellow.bold('Ingrese su opción: '), function (opcion2) {
            switch (opcion2) {
                case '1':
                    console.clear();
                    _this.rl.question(_this.chalk.yellow.bold('Ingrese Nombre Veterinaria: '), function (nombreVet) {
                        _this.rl.question(_this.chalk.yellow.bold('Ingrese Direccion Veterinaria: '), function (direccionVet) {
                            var veterinaria1 = new veterinarias_1.Veterinaria(nombreVet, direccionVet);
                            _this.redVet1.agregarVeterinaria(veterinaria1);
                            _this.rl.question('Presione Enter para continuar...', function () {
                                console.clear();
                                _this.menuVeterinarias();
                            });
                        });
                    });
                    break;
                case '2':
                    console.clear();
                    _this.rl.question(_this.chalk.yellow.bold('Ingrese Nombre Veterinaria a Eliminar: '), function (nombreVeterinariaeliminar) {
                        var index = veterinarias.findIndex(function (vet) { return vet.getNombreVeterinaria() === nombreVeterinariaeliminar; });
                        if (index !== -1) {
                            _this.rl.question(_this.chalk.yellow.bold('¿Está seguro de eliminar la veterinaria? (s/n)'), function (respuesta) {
                                if (respuesta.toLowerCase() === 's') {
                                    _this.redVet1.darDeBajaVeterinaria(veterinarias[index]);
                                    _this.rl.question('Presione Enter para continuar...', function () {
                                        console.clear();
                                        _this.menuVeterinarias();
                                    });
                                }
                                else {
                                    console.log(_this.chalk.yellow.bold("Operación cancelada"));
                                    _this.rl.question('Presione Enter para continuar...', function () {
                                        console.clear();
                                        _this.menuVeterinarias();
                                    });
                                }
                            });
                        }
                        else {
                            console.clear();
                            console.log(_this.chalk.yellow.bold("Veterinaria no encontrado"));
                            _this.rl.question('Presione Enter para continuar...', function () {
                                console.clear();
                                _this.menuVeterinarias();
                            });
                        }
                    });
                    break;
                case '3':
                    console.clear();
                    _this.rl.question(_this.chalk.yellow.bold('Ingrese Nombre Veterinaria a Modificar : '), function (nombreVet) {
                        var index = veterinarias.findIndex(function (vet) { return vet.getNombreVeterinaria() === nombreVet; });
                        if (index !== -1) {
                            _this.rl.question(_this.chalk.yellow.bold('Ingrese Nuevo Nombre Veterinaria: '), function (nombreVet1) {
                                _this.rl.question(_this.chalk.yellow.bold('Ingrese Nueva Direccion Veterinaria: '), function (direccionVet1) {
                                    _this.redVet1.modificarVeterinaria(nombreVet1, direccionVet1, veterinarias[index]);
                                    _this.rl.question('Presione Enter para continuar...', function () {
                                        console.clear();
                                        _this.menuVeterinarias();
                                    });
                                });
                            });
                        }
                        else {
                            console.clear();
                            console.log(_this.chalk.yellow.bold("Veterinaria no encontrado"));
                            _this.rl.question('Presione Enter para continuar...', function () {
                                console.clear();
                                _this.menuVeterinarias();
                            });
                        }
                    });
                    break;
                case '4':
                    console.clear();
                    _this.redVet1.imprimirListaVeterinarias();
                    _this.rl.question('Presione Enter para continuar...', function () {
                        console.clear();
                        _this.menuVeterinarias();
                    });
                    break;
                case '5':
                    console.clear();
                    _this.menuRedVet();
                    break;
                case '6':
                    _this.rl.close();
                    break;
                default:
                    console.clear();
                    console.log(_this.chalk.red.bold('Opción inválida'));
                    _this.menuRedVet();
            }
        });
    };
    //Menu Para manejar los Proveedores dentro de la Red de Veterinarias
    Menu.prototype.menuProveedores = function () {
        var _this = this;
        var proveedores = this.redVet1.getProveedores();
        this.decorado.crearCasilla(this.decorado.getTitulo3(), this.decorado.getOpciones3(), "azul");
        this.rl.question(this.chalk.cyan('Ingrese su opción: '), function (opcion2) {
            switch (opcion2) {
                case '1':
                    console.clear();
                    _this.rl.question(_this.chalk.cyan.bold('Ingrese Nombre Proveedor: '), function (nombrePro) {
                        _this.rl.question(_this.chalk.cyan.bold('Ingrese Telefono Proveedor: '), function (telefonoPro) {
                            var TelAux = parseInt(telefonoPro);
                            var proveedor1 = new proveedores_1.Proveedor(nombrePro, TelAux);
                            _this.redVet1.agregarProveedores(proveedor1);
                            _this.rl.question('Presione Enter para continuar...', function () {
                                console.clear();
                                _this.menuProveedores();
                            });
                        });
                    });
                    break;
                case '2':
                    console.clear();
                    _this.rl.question(_this.chalk.cyan.bold('Ingrese Nombre Proveedor a Eliminar: '), function (nombreVet2) {
                        var index = proveedores.findIndex(function (pro) { return pro.getNombreProveedor() === nombreVet2; });
                        if (index !== -1) {
                            _this.rl.question(_this.chalk.cyan.bold('¿Está seguro de eliminar la Proveedor? (s/n)'), function (respuesta) {
                                if (respuesta.toLowerCase() === 's') {
                                    _this.redVet1.darDeBajaProveedores(proveedores[index]);
                                    _this.rl.question('Presione Enter para continuar...', function () {
                                        console.clear();
                                        _this.menuProveedores();
                                    });
                                }
                                else {
                                    console.log(_this.chalk.cyan.bold("Operación cancelada"));
                                    _this.rl.question('Presione Enter para continuar...', function () {
                                        console.clear();
                                        _this.menuProveedores();
                                    });
                                }
                            });
                        }
                        else {
                            console.clear();
                            console.log(_this.chalk.cyan.bold("Proveedor no encontrado"));
                            _this.rl.question('Presione Enter para continuar...', function () {
                                console.clear();
                                _this.menuProveedores();
                            });
                        }
                    });
                    break;
                case '3':
                    console.clear();
                    _this.rl.question(_this.chalk.cyan.bold('Ingrese Nombre Proveedor a Modificar: '), function (nombrePro1) {
                        var index = proveedores.findIndex(function (prov) { return prov.getNombreProveedor() === nombrePro1; });
                        if (index !== -1) {
                            _this.rl.question(_this.chalk.cyan.bold('Ingrese Nuevo Nombre Proveedor: '), function (nombreProv1) {
                                _this.rl.question(_this.chalk.cyan.bold('Ingrese Nuevo Telefono Proveedor: '), function (telefonoPro) {
                                    var TelAux1 = parseInt(telefonoPro);
                                    _this.redVet1.modificarProveedor(nombreProv1, TelAux1, proveedores[index]);
                                    _this.rl.question('Presione Enter para continuar...', function () {
                                        console.clear();
                                        _this.menuProveedores();
                                    });
                                });
                            });
                        }
                        else {
                            console.clear();
                            console.log(_this.chalk.cyan.bold("Proveedor no encontrado"));
                            _this.rl.question('Presione Enter para continuar...', function () {
                                console.clear();
                                _this.menuProveedores();
                            });
                        }
                    });
                    break;
                case '4':
                    console.clear();
                    _this.redVet1.imprimirListaProveedores();
                    _this.rl.question('Presione Enter para continuar...', function () {
                        console.clear();
                        _this.menuProveedores();
                    });
                    break;
                case '5':
                    console.clear();
                    _this.menuRedVet();
                    break;
                case '6':
                    _this.rl.close();
                    break;
                default:
                    console.log(_this.chalk.red.bold('Opción inválida'));
                    _this.menuRedVet();
            }
        });
    };
    //Menu Para ingresar a manejar las Veterinarias de forma particular
    Menu.prototype.menuDeVeterinaria = function () {
        var _this = this;
        this.decorado.crearCasilla(this.decorado.getTitulo4(), this.decorado.getOpciones4(), "magenta");
        this.rl.question(this.chalk.magenta.bold('Ingrese su opción: '), function (opcion2) {
            switch (opcion2) {
                case '1':
                    console.clear();
                    _this.elegirVeterinaria();
                    break;
                case '2':
                    console.clear();
                    _this.redVet1.imprimirListaVeterinarias();
                    _this.rl.question('Presione Enter para continuar...', function () {
                        console.clear();
                        _this.menuDeVeterinaria();
                    });
                    break;
                case '3':
                    console.clear();
                    _this.menuRedVet();
                    break;
                case '4':
                    _this.rl.close();
                    break;
                default:
                    console.clear();
                    console.log(_this.chalk.red.bold('Opción inválida'));
                    _this.menuRedVet();
            }
        });
    };
    //Menu para a manejar las Veterinarias de forma particular
    Menu.prototype.menuIndividualVeterinaria = function () {
        var _this = this;
        var veterinarias = this.redVet1.getVeterinaria();
        this.decorado.crearCasilla(("".concat(veterinarias[this.indexAuxVet].getDatosVeterinaria())), this.decorado.getOpciones5(), "magenta");
        this.rl.question(this.chalk.magenta.bold('Ingrese su opción: '), function (opcion2) {
            switch (opcion2) {
                case '1':
                    console.clear();
                    veterinarias[_this.indexAuxVet].imprimirListaCliente();
                    _this.rl.question('Presione Enter para continuar...', function () {
                        console.clear();
                        _this.menuIndividualVeterinaria();
                    });
                    break;
                case '2':
                    console.clear();
                    console.log(_this.chalk.magenta("Veterinaria seleccionada: ".concat(veterinarias[_this.indexAuxVet].getDatosVeterinaria(), " \n")));
                    _this.rl.question(_this.chalk.magenta('Ingrese Nombre del Paciente: '), function (nombrePaci) {
                        _this.rl.question(_this.chalk.magenta('Ingrese el tipo de Especie: '), function (especie) {
                            _this.rl.question(_this.chalk.magenta('Ingrese Nombre del Cliente: '), function (nombreCli) {
                                _this.rl.question(_this.chalk.magenta('Ingrese Telefono del Cliente: '), function (telefono) {
                                    var tel1 = parseInt(telefono);
                                    if (isNaN(tel1)) {
                                        tel1 = 0;
                                    }
                                    else {
                                        tel1 = parseInt(telefono);
                                    }
                                    _this.rl.question(_this.chalk.magenta('El Cliente es Vip? S/N.'), function (calidadVip) {
                                        var calVip1 = calidadVip.toLowerCase() === 's';
                                        var especie1 = especie.toLowerCase();
                                        var paciente1 = new mascotas_1.Paciente(nombrePaci, especie1);
                                        var cliente1 = new clientes_1.Cliente(nombreCli, tel1, calVip1, paciente1);
                                        veterinarias[_this.indexAuxVet].agregarCliente(cliente1);
                                        _this.rl.question('Presione Enter para continuar...', function () {
                                            console.clear();
                                            _this.menuIndividualVeterinaria();
                                        });
                                    });
                                });
                            });
                        });
                    });
                    break;
                case '3':
                    console.clear();
                    console.log(_this.chalk.magenta("Veterinaria seleccionada: ".concat(veterinarias[_this.indexAuxVet].getDatosVeterinaria(), " \n")));
                    _this.rl.question(_this.chalk.magenta('Ingrese Nombre Cliente a eliminar: '), function (nombreCli) {
                        var clientes = veterinarias[_this.indexAuxVet].getCliente();
                        var indiceCliente = clientes.findIndex(function (cliente) { return cliente.getNombreCliente().toLowerCase() === nombreCli.toLowerCase(); });
                        if (indiceCliente !== -1) {
                            console.log(_this.chalk.magenta("Cliente encontrado \n :".concat(clientes[indiceCliente].getDatos())));
                            _this.rl.question(_this.chalk.magenta('¿Está seguro de eliminar este cliente? (S/N)'), function (confirmacion) {
                                if (confirmacion.toLowerCase() === 's') {
                                    veterinarias[_this.indexAuxVet].darDeBajaCliente(clientes[indiceCliente]);
                                }
                                else {
                                    console.clear();
                                    console.log(_this.chalk.magenta('Operación cancelada'));
                                }
                                _this.rl.question('Presione Enter para continuar...', function () {
                                    console.clear();
                                    _this.menuIndividualVeterinaria();
                                });
                            });
                        }
                        else {
                            console.clear();
                            console.log(_this.chalk.magenta('Cliente no encontrado'));
                            _this.rl.question('Presione Enter para continuar...', function () {
                                console.clear();
                                _this.menuIndividualVeterinaria();
                            });
                        }
                    });
                    break;
                case '4':
                    console.clear();
                    console.log(_this.chalk.magenta("Veterinaria seleccionada: ".concat(veterinarias[_this.indexAuxVet].getDatosVeterinaria(), " \n")));
                    _this.rl.question(_this.chalk.magenta('Ingrese Nombre Cliente a modificar: '), function (nombreCli) {
                        var clientes = veterinarias[_this.indexAuxVet].getCliente();
                        var indiceCliente = clientes.findIndex(function (cliente) { return cliente.getNombreCliente().toLowerCase() === nombreCli.toLowerCase(); });
                        if (indiceCliente !== -1) {
                            console.log(_this.chalk.magenta("Cliente encontrado \n :".concat(clientes[indiceCliente].getDatos())));
                            _this.rl.question(_this.chalk.magenta('¿Qué desea modificar? (1. Nombre Cliente, 2. Teléfono, 3. Calidad Vip, 4. Paciente)'), function (opcion) {
                                switch (opcion) {
                                    case '1':
                                        _this.rl.question(_this.chalk.magenta('Ingrese nuevo nombre cliente: '), function (nuevoNombre) {
                                            clientes[indiceCliente].setNombreCliente(nuevoNombre);
                                            veterinarias[_this.indexAuxVet].setCliente(clientes);
                                            console.log(_this.chalk.magenta('Nombre cliente modificado con éxito'));
                                            _this.rl.question('Presione Enter para continuar...', function () {
                                                console.clear();
                                                _this.menuIndividualVeterinaria();
                                            });
                                        });
                                        break;
                                    case '2':
                                        console.clear();
                                        _this.rl.question(_this.chalk.magenta('Ingrese nuevo teléfono cliente: '), function (nuevoTelefono) {
                                            clientes[indiceCliente].setTelefono(parseInt(nuevoTelefono));
                                            veterinarias[_this.indexAuxVet].setCliente(clientes);
                                            console.log(_this.chalk.magenta('Teléfono cliente modificado con éxito'));
                                            _this.rl.question('Presione Enter para continuar...', function () {
                                                console.clear();
                                                _this.menuIndividualVeterinaria();
                                            });
                                        });
                                        break;
                                    case '3':
                                        console.clear();
                                        _this.rl.question(_this.chalk.magenta('Ingrese Calidad Vip: s por Si, n por NO'), function (nuevoCalidadVip) {
                                            var calVip2 = nuevoCalidadVip.toLowerCase() === 's';
                                            clientes[indiceCliente].setCalidaVip(calVip2);
                                            veterinarias[_this.indexAuxVet].setCliente(clientes);
                                            console.log(_this.chalk.magenta('Calidad Vip modificada con éxito'));
                                            _this.rl.question('Presione Enter para continuar...', function () {
                                                console.clear();
                                                _this.menuIndividualVeterinaria();
                                            });
                                        });
                                        break;
                                    case '4':
                                        console.clear();
                                        _this.rl.question(_this.chalk.magenta('¿Qué desea modificar del paciente? (1. Nombre Paciente, 2. Especie)'), function (opcion) {
                                            switch (opcion) {
                                                case '1':
                                                    _this.rl.question(_this.chalk.magenta('Ingrese nuevo nombre paciente: '), function (nuevoNombre) {
                                                        clientes[indiceCliente].getPaciente().setNombrePaciente(nuevoNombre);
                                                        console.log(_this.chalk.magenta('Nombre paciente modificado con éxito'));
                                                        _this.rl.question('Presione Enter para continuar...', function () {
                                                            console.clear();
                                                            _this.menuIndividualVeterinaria();
                                                        });
                                                    });
                                                    break;
                                                case '2':
                                                    console.clear();
                                                    _this.rl.question(_this.chalk.magenta('Ingrese nueva especie paciente: '), function (nuevaEspecie) {
                                                        if (nuevaEspecie != "perro" && nuevaEspecie != "gato") {
                                                            nuevaEspecie = "exotico";
                                                        }
                                                        clientes[indiceCliente].getPaciente().setEspecie(nuevaEspecie);
                                                        console.log(_this.chalk.magenta('Especie paciente modificado con éxito'));
                                                        _this.rl.question('Presione Enter para continuar...', function () {
                                                            console.clear();
                                                            _this.menuIndividualVeterinaria();
                                                        });
                                                    });
                                                    break;
                                                default:
                                                    console.clear();
                                                    console.log(_this.chalk.red('Opción inválida'));
                                                    _this.rl.question('Presione Enter para continuar...', function () {
                                                        console.clear();
                                                        _this.menuIndividualVeterinaria();
                                                    });
                                            }
                                        });
                                }
                            });
                        }
                        else {
                            console.clear();
                            console.log(_this.chalk.magenta("No se encontro ese Cliente"));
                            _this.rl.question('Presione Enter para continuar...', function () {
                                console.clear();
                                _this.menuIndividualVeterinaria();
                            });
                        }
                    });
                    break;
                case '5':
                    console.clear();
                    console.log(_this.chalk.magenta("Veterinaria seleccionada: ".concat(veterinarias[_this.indexAuxVet].getDatosVeterinaria())));
                    _this.rl.question(_this.chalk.magenta('Ingrese Nombre Paciente a eliminar: '), function (nombrePaci) {
                        var clientes = veterinarias[_this.indexAuxVet].getCliente();
                        var clienteEncontrado = clientes.find(function (cliente) { return cliente.getPaciente().getNombrePaciente().toLowerCase() === nombrePaci.toLowerCase(); });
                        if (clienteEncontrado) {
                            console.log(_this.chalk.magenta('Paciente encontrado:'));
                            console.log(_this.chalk.magenta("Nombre: ".concat(clienteEncontrado.getPaciente().getNombrePaciente())));
                            console.log(_this.chalk.magenta("Especie: ".concat(clienteEncontrado.getPaciente().getEspecie())));
                            console.log(_this.chalk.magenta("Due\u00F1o: ".concat(clienteEncontrado.getNombreCliente())));
                            _this.rl.question(_this.chalk.magenta('¿Está seguro de eliminar este paciente? (S/N)'), function (confirmacion) {
                                if (confirmacion.toLowerCase() === 's') {
                                    clienteEncontrado.getPaciente().setNombrePaciente("");
                                    clienteEncontrado.getPaciente().setEspecie("");
                                    veterinarias[_this.indexAuxVet].setCliente(clientes);
                                    console.log(_this.chalk.magenta('Paciente eliminado con éxito'));
                                }
                                else {
                                    console.clear();
                                    console.log(_this.chalk.magenta('Operación cancelada'));
                                }
                                _this.rl.question('Presione Enter para continuar...', function () {
                                    console.clear();
                                    _this.menuIndividualVeterinaria();
                                });
                            });
                        }
                        else {
                            console.clear();
                            console.log(_this.chalk.magenta('Paciente no encontrado'));
                            _this.rl.question('Presione Enter para continuar...', function () {
                                console.clear();
                                _this.menuIndividualVeterinaria();
                            });
                        }
                    });
                    break;
                case '6':
                    console.clear();
                    console.log(_this.chalk.magenta("Veterinaria seleccionada: ".concat(veterinarias[_this.indexAuxVet].getDatosVeterinaria(), " \n")));
                    _this.rl.question(_this.chalk.magenta('Ingrese Nombre Cliente agregar asistencia: '), function (nombreCli) {
                        var clientes = veterinarias[_this.indexAuxVet].getCliente();
                        var indiceCliente = clientes.findIndex(function (cliente) { return cliente.getNombreCliente().toLowerCase() === nombreCli.toLowerCase(); });
                        if (indiceCliente !== -1) {
                            console.clear();
                            console.log(_this.chalk.magenta("Se agrega asistencia a: \n :".concat(clientes[indiceCliente].getDatos())));
                            veterinarias[_this.indexAuxVet].clienteVisita(clientes[indiceCliente]);
                            _this.rl.question('Presione Enter para continuar...', function () {
                                console.clear();
                                _this.menuIndividualVeterinaria();
                            });
                        }
                        else {
                            console.clear();
                            console.log(_this.chalk.magenta("No se encontro Cliente"));
                            _this.rl.question('Presione Enter para continuar...', function () {
                                console.clear();
                                _this.menuIndividualVeterinaria();
                            });
                        }
                    });
                    break;
                case '7':
                    console.clear();
                    _this.menuRedVet();
                    break;
                case '8':
                    _this.rl.close();
                    break;
                default:
                    console.clear();
                    console.log(_this.chalk.red('Opción inválida'));
                    _this.menuRedVet();
            }
        });
    };
    //Funcion de Veterinaria
    Menu.prototype.elegirVeterinaria = function () {
        var _this = this;
        var veterinarias = this.redVet1.getVeterinaria();
        this.rl.question(this.chalk.magenta('Ingrese Nombre Veterinaria : '), function (nombreVet) {
            var index1 = veterinarias.findIndex(function (vet) { return vet.getNombreVeterinaria().toLowerCase() === nombreVet.toLowerCase(); });
            ;
            if (index1 !== -1) {
                _this.indexAuxVet = index1;
                console.log(_this.chalk.magenta("Veterinaria seleccionada: ".concat(veterinarias[_this.indexAuxVet].getNombreVeterinaria())));
                _this.rl.question('Presione Enter para continuar...', function () {
                    console.clear();
                    _this.menuIndividualVeterinaria();
                });
            }
            else {
                console.log(_this.chalk.magenta("Veterinaria no encontrado"));
                _this.rl.question('Presione Enter para continuar...', function () {
                    console.clear();
                    _this.menuDeVeterinaria();
                });
            }
        });
    };
    return Menu;
}());
exports.Menu = Menu;
