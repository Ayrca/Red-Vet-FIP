export { Menu };
import * as readline from 'readline';
import { Veterinaria } from './veterinarias';
import { Cliente } from './clientes'
import { Paciente } from './mascotas';
import { RedVeterinaria } from './redVet';
import { Proveedor } from './proveedores';
import { Decorado } from './decoradoMenu';
//import chalk from 'chalk';

class Menu {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  private indexAuxVet: number;
  decorado = new Decorado();

  constructor() { }
  private redVet1 = new RedVeterinaria();
  // Menu Red de Veterinarias
  chalk = require('chalk');

  public menuRedVet() {
    this.decorado.crearCasilla(this.decorado.getTitulo1(), this.decorado.getOpciones1(),"verde");
    this.rl.question(this.chalk.green.bold('Ingrese su opción: '), (opcion1) => {
      switch (opcion1) {
        case '1':
          console.clear();
          this.menuVeterinarias();
          break;
        case '2':
          console.clear();
          this.menuProveedores();
          break;
        case '3':
          console.clear();
          this.menuDeVeterinaria();
          break;
        case '4':
          this.rl.close();
          break;
        default:
          console.clear();
          console.log(this.chalk.red.bold.underline('Opción inválida'));
          this.menuRedVet();
      }
    });
  }
  //Menu Para manejar las Veterinarias dentro de la Red de Veterinarias
  public menuVeterinarias() {
    let veterinarias: Veterinaria[] = this.redVet1.getVeterinaria();
    this.decorado.crearCasilla(this.decorado.getTitulo2(), this.decorado.getOpciones2(),"amarillo");
    this.rl.question(this.chalk.yellow.bold('Ingrese su opción: '), (opcion2) => {
      switch (opcion2) {
        case '1':
          console.clear();
          this.rl.question(this.chalk.yellow.bold('Ingrese Nombre Veterinaria: '), (nombreVet) => {
            this.rl.question(this.chalk.yellow.bold('Ingrese Direccion Veterinaria: '), (direccionVet) => {
              const veterinaria1 = new Veterinaria(nombreVet, direccionVet);
              this.redVet1.agregarVeterinaria(veterinaria1);
              this.rl.question('Presione Enter para continuar...', () => {
                console.clear();
                this.menuVeterinarias();
                });
            });
          });
          break;
        case '2':
          console.clear();
          this.rl.question(this.chalk.yellow.bold('Ingrese Nombre Veterinaria a Eliminar: '), (nombreVeterinariaeliminar) => {
            const index = veterinarias.findIndex((vet) => vet.getNombreVeterinaria() === nombreVeterinariaeliminar);
            if (index !== -1) {
              this.rl.question(this.chalk.yellow.bold('¿Está seguro de eliminar la veterinaria? (s/n)'), (respuesta) => {
                if (respuesta.toLowerCase() === 's') {
                  this.redVet1.darDeBajaVeterinaria(veterinarias[index]);
                  this.rl.question('Presione Enter para continuar...', () => {
                    console.clear();
                    this.menuVeterinarias();
                  });
                } else {
                  console.log(this.chalk.yellow.bold("Operación cancelada"));
                  this.rl.question('Presione Enter para continuar...', () => {
                    console.clear();
                    this.menuVeterinarias();
                  });
                }
              });
            } else {
              console.clear();
              console.log(this.chalk.yellow.bold("Veterinaria no encontrado"));
              this.rl.question('Presione Enter para continuar...', () => {
                console.clear();
                this.menuVeterinarias();
              });
            }
          });
          break;
        case '3':
          console.clear();
          this.rl.question(this.chalk.yellow.bold('Ingrese Nombre Veterinaria a Modificar : '), (nombreVet) => {
            const index = veterinarias.findIndex((vet) => vet.getNombreVeterinaria() === nombreVet);
            if (index !== -1) {
              this.rl.question(this.chalk.yellow.bold('Ingrese Nuevo Nombre Veterinaria: '), (nombreVet1) => {
                this.rl.question(this.chalk.yellow.bold('Ingrese Nueva Direccion Veterinaria: '), (direccionVet1) => {
                  this.redVet1.modificarVeterinaria(nombreVet1, direccionVet1, veterinarias[index]);
                  this.rl.question('Presione Enter para continuar...', () => {
                    console.clear();
                    this.menuVeterinarias();
                  });
                  });
              });
            } else {
              console.clear();
              console.log(this.chalk.yellow.bold("Veterinaria no encontrado"));
              this.rl.question('Presione Enter para continuar...', () => {
                console.clear();
                this.menuVeterinarias();
              });
            }
          });
          break;
        case '4':
          console.clear();
          this.redVet1.imprimirListaVeterinarias();
          this.rl.question('Presione Enter para continuar...', () => {
            console.clear();
            this.menuVeterinarias();
          });
          break;
        case '5':
          console.clear();
          this.menuRedVet();
          break;
        case '6':
          this.rl.close();
          break;
        default:
          console.clear();
          console.log(this.chalk.red.bold('Opción inválida'));
          this.menuRedVet();
      }
    });
  }
  //Menu Para manejar los Proveedores dentro de la Red de Veterinarias
  public menuProveedores() {
    const proveedores: Proveedor[] = this.redVet1.getProveedores();
    this.decorado.crearCasilla(this.decorado.getTitulo3(), this.decorado.getOpciones3(),"azul");
    this.rl.question(this.chalk.cyan('Ingrese su opción: '), (opcion2) => {
      switch (opcion2) {
        case '1':
          console.clear();
          this.rl.question(this.chalk.cyan.bold('Ingrese Nombre Proveedor: '), (nombrePro) => {
            this.rl.question(this.chalk.cyan.bold('Ingrese Telefono Proveedor: '), (telefonoPro) => {
              let TelAux = parseInt(telefonoPro);
              const proveedor1 = new Proveedor(nombrePro, TelAux);
              this.redVet1.agregarProveedores(proveedor1);
              this.rl.question('Presione Enter para continuar...', () => {
                console.clear();
                this.menuProveedores();
              });
               });
          });
          break;
        case '2':
          console.clear();
          this.rl.question(this.chalk.cyan.bold('Ingrese Nombre Proveedor a Eliminar: '), (nombreVet2) => {
            const index = proveedores.findIndex((pro) => pro.getNombreProveedor() === nombreVet2);
            if (index !== -1) {
              this.rl.question(this.chalk.cyan.bold('¿Está seguro de eliminar la Proveedor? (s/n)'), (respuesta) => {
                if (respuesta.toLowerCase() === 's') {
                  this.redVet1.darDeBajaProveedores(proveedores[index]);
                  this.rl.question('Presione Enter para continuar...', () => {
                    console.clear();
                    this.menuProveedores();
                  });
                } else {
                  console.log(this.chalk.cyan.bold("Operación cancelada"));
                  this.rl.question('Presione Enter para continuar...', () => {
                    console.clear();
                    this.menuProveedores();
                  });
                }
              });
            } else {
              console.clear();
              console.log(this.chalk.cyan.bold("Proveedor no encontrado"));
              this.rl.question('Presione Enter para continuar...', () => {
                console.clear();
                this.menuProveedores();
              });
            }
          });
          break;
        case '3':
          console.clear();
          this.rl.question(this.chalk.cyan.bold('Ingrese Nombre Proveedor a Modificar: '), (nombrePro1) => {
            const index = proveedores.findIndex((prov) => prov.getNombreProveedor() === nombrePro1);
            if (index !== -1) {
              this.rl.question(this.chalk.cyan.bold('Ingrese Nuevo Nombre Proveedor: '), (nombreProv1) => {
                this.rl.question(this.chalk.cyan.bold('Ingrese Nuevo Telefono Proveedor: '), (telefonoPro) => {
                  let TelAux1 = parseInt(telefonoPro);
                  this.redVet1.modificarProveedor(nombreProv1, TelAux1, proveedores[index]);
                  this.rl.question('Presione Enter para continuar...', () => {
                    console.clear();
                    this.menuProveedores();
                  });
                });
              });
            } else {
              console.clear();
              console.log(this.chalk.cyan.bold("Proveedor no encontrado"));
              this.rl.question('Presione Enter para continuar...', () => {
                console.clear();
                this.menuProveedores();
              });
            }
          });
          break;
        case '4':
          console.clear();
          this.redVet1.imprimirListaProveedores();
          this.rl.question('Presione Enter para continuar...', () => {
            console.clear();
            this.menuProveedores();
            });
          break;
        case '5':
          console.clear();
          this.menuRedVet();
          break;
        case '6':
          this.rl.close();
          break;
        default:
          console.log(this.chalk.red.bold('Opción inválida'));
          this.menuRedVet();
      }
    });
  }
  //Menu Para ingresar a manejar las Veterinarias de forma particular
  public menuDeVeterinaria() {
    this.decorado.crearCasilla(this.decorado.getTitulo4(), this.decorado.getOpciones4(),"magenta");
    this.rl.question(this.chalk.magenta.bold('Ingrese su opción: '), (opcion2) => {
      switch (opcion2) {
        case '1':
          console.clear();
          this.elegirVeterinaria();
          break;
        case '2':
          console.clear();
          this.redVet1.imprimirListaVeterinarias();
          this.rl.question('Presione Enter para continuar...', () => {
            console.clear();
            this.menuDeVeterinaria();
            });
          break;
        case '3':
          console.clear();
          this.menuRedVet();
          break;
        case '4':
          this.rl.close();
          break;
        default:
          console.clear();
          console.log(this.chalk.red.bold('Opción inválida'));
          this.menuRedVet();
      }
    });
  }
  //Menu para a manejar las Veterinarias de forma particular
  public menuIndividualVeterinaria() {
    const veterinarias: Veterinaria[] = this.redVet1.getVeterinaria();
    this.decorado.crearCasilla((`${veterinarias[this.indexAuxVet].getDatosVeterinaria()}`), this.decorado.getOpciones5(),"magenta");
    this.rl.question(this.chalk.magenta.bold('Ingrese su opción: '), (opcion2) => {
      switch (opcion2) {
        case '1':
          console.clear();
          veterinarias[this.indexAuxVet].imprimirListaCliente();
          this.rl.question('Presione Enter para continuar...', () => {
            console.clear();
            this.menuIndividualVeterinaria();
            });
         break;
        case '2':
          console.clear();
          console.log(this.chalk.magenta(`Veterinaria seleccionada: ${veterinarias[this.indexAuxVet].getDatosVeterinaria()} \n`));
          this.rl.question(this.chalk.magenta('Ingrese Nombre del Paciente: '), (nombrePaci) => {
            this.rl.question(this.chalk.magenta('Ingrese el tipo de Especie: '), (especie) => {
              this.rl.question(this.chalk.magenta('Ingrese Nombre del Cliente: '), (nombreCli) => {
                this.rl.question(this.chalk.magenta('Ingrese Telefono del Cliente: '), (telefono) => {
                  let tel1: number = parseInt(telefono)
                  if (isNaN(tel1)) {
                    tel1 = 0;
                  }
                  else {
                    tel1 = parseInt(telefono);
                  }
                  this.rl.question(this.chalk.magenta('El Cliente es Vip? S/N.'), (calidadVip) => {
                    const calVip1 = calidadVip.toLowerCase() === 's';
                    const especie1 = especie.toLowerCase();
                    const paciente1 = new Paciente(nombrePaci, especie1);
                    const cliente1 = new Cliente(nombreCli, tel1, calVip1, paciente1);
                    veterinarias[this.indexAuxVet].agregarCliente(cliente1);
                    this.rl.question('Presione Enter para continuar...', () => {
                    console.clear();
                    this.menuIndividualVeterinaria();
                    });
                    
                  });
                });
              });
            });
          });
          break;
        case '3':
          console.clear();
          console.log(this.chalk.magenta(`Veterinaria seleccionada: ${veterinarias[this.indexAuxVet].getDatosVeterinaria()} \n`));
          this.rl.question(this.chalk.magenta('Ingrese Nombre Cliente a eliminar: '), (nombreCli) => {
            const clientes = veterinarias[this.indexAuxVet].getCliente();
            const indiceCliente = clientes.findIndex((cliente) => cliente.getNombreCliente().toLowerCase() === nombreCli.toLowerCase());
            if (indiceCliente !== -1) {
              console.log(this.chalk.magenta(`Cliente encontrado \n :${clientes[indiceCliente].getDatos()}`));
              this.rl.question(this.chalk.magenta('¿Está seguro de eliminar este cliente? (S/N)'), (confirmacion) => {
                if (confirmacion.toLowerCase() === 's') {
                  veterinarias[this.indexAuxVet].darDeBajaCliente(clientes[indiceCliente]);
                } else {
                  console.clear();
                  console.log(this.chalk.magenta('Operación cancelada'));
                }
                this.rl.question('Presione Enter para continuar...', () => {
                  console.clear();
                  this.menuIndividualVeterinaria();
                  });
              });
            } else {
              console.clear();
              console.log(this.chalk.magenta('Cliente no encontrado'));
              this.rl.question('Presione Enter para continuar...', () => {
                console.clear();
                this.menuIndividualVeterinaria();
                });
            }
          });
          break;
        case '4':
          console.clear();
          console.log(this.chalk.magenta(`Veterinaria seleccionada: ${veterinarias[this.indexAuxVet].getDatosVeterinaria()} \n`));
          this.rl.question(this.chalk.magenta('Ingrese Nombre Cliente a modificar: '), (nombreCli) => {
            const clientes = veterinarias[this.indexAuxVet].getCliente();
            const indiceCliente = clientes.findIndex((cliente) => cliente.getNombreCliente().toLowerCase() === nombreCli.toLowerCase());
            if (indiceCliente !== -1) {
              console.log(this.chalk.magenta(`Cliente encontrado \n :${clientes[indiceCliente].getDatos()}`));
              this.rl.question(this.chalk.magenta('¿Qué desea modificar? (1. Nombre Cliente, 2. Teléfono, 3. Calidad Vip, 4. Paciente)'), (opcion) => {
                switch (opcion) {
                  case '1':
                    this.rl.question(this.chalk.magenta('Ingrese nuevo nombre cliente: '), (nuevoNombre) => {
                      clientes[indiceCliente].setNombreCliente(nuevoNombre);
                      veterinarias[this.indexAuxVet].setCliente(clientes);
                      console.log(this.chalk.magenta('Nombre cliente modificado con éxito'));
                      this.rl.question('Presione Enter para continuar...', () => {
                        console.clear();
                        this.menuIndividualVeterinaria();
                        });
                    });
                    break;
                  case '2':
                    console.clear();
                    this.rl.question(this.chalk.magenta('Ingrese nuevo teléfono cliente: '), (nuevoTelefono) => {
                      clientes[indiceCliente].setTelefono(parseInt(nuevoTelefono));
                      veterinarias[this.indexAuxVet].setCliente(clientes);
                      console.log(this.chalk.magenta('Teléfono cliente modificado con éxito'));
                      this.rl.question('Presione Enter para continuar...', () => {
                        console.clear();
                        this.menuIndividualVeterinaria();
                        });
                    });
                    break;
                  case '3':
                    console.clear();
                    this.rl.question(this.chalk.magenta('Ingrese Calidad Vip: s por Si, n por NO'), (nuevoCalidadVip) => {
                      const calVip2 = nuevoCalidadVip.toLowerCase() === 's';
                      clientes[indiceCliente].setCalidaVip(calVip2);
                      veterinarias[this.indexAuxVet].setCliente(clientes);
                      console.log(this.chalk.magenta('Calidad Vip modificada con éxito'));
                      this.rl.question('Presione Enter para continuar...', () => {
                        console.clear();
                        this.menuIndividualVeterinaria();
                        });
                    });
                    break;
                  case '4':
                    console.clear();
                    this.rl.question(this.chalk.magenta('¿Qué desea modificar del paciente? (1. Nombre Paciente, 2. Especie)'), (opcion) => {
                      switch (opcion) {
                        case '1':
                          this.rl.question(this.chalk.magenta('Ingrese nuevo nombre paciente: '), (nuevoNombre) => {
                            clientes[indiceCliente].getPaciente().setNombrePaciente(nuevoNombre);
                            console.log(this.chalk.magenta('Nombre paciente modificado con éxito'));
                            this.rl.question('Presione Enter para continuar...', () => {
                              console.clear();
                              this.menuIndividualVeterinaria();
                              });
                          });
                          break;
                        case '2':
                          console.clear();
                          this.rl.question(this.chalk.magenta('Ingrese nueva especie paciente: '), (nuevaEspecie) => {
                            if (nuevaEspecie != "perro" && nuevaEspecie != "gato") {
                              nuevaEspecie = "exotico";
                            }
                            clientes[indiceCliente].getPaciente().setEspecie(nuevaEspecie);
                            console.log(this.chalk.magenta('Especie paciente modificado con éxito'));
                            this.rl.question('Presione Enter para continuar...', () => {
                              console.clear();
                              this.menuIndividualVeterinaria();
                              });
                          });
                          break;
                        default:
                          console.clear();
                          console.log(this.chalk.red('Opción inválida'));
                          this.rl.question('Presione Enter para continuar...', () => {
                            console.clear();
                            this.menuIndividualVeterinaria();
                            });
                      }
                    });
                }
              });
            } else {
              console.clear();
              console.log(this.chalk.magenta(`No se encontro ese Cliente`));
              this.rl.question('Presione Enter para continuar...', () => {
                console.clear();
                this.menuIndividualVeterinaria();
                });
            }
          });
          break;
        case '5':
          console.clear();
          console.log(this.chalk.magenta(`Veterinaria seleccionada: ${veterinarias[this.indexAuxVet].getDatosVeterinaria()}`));
          this.rl.question(this.chalk.magenta('Ingrese Nombre Paciente a eliminar: '), (nombrePaci) => {
            const clientes = veterinarias[this.indexAuxVet].getCliente();
            const clienteEncontrado = clientes.find((cliente) => cliente.getPaciente().getNombrePaciente().toLowerCase() === nombrePaci.toLowerCase());
            if (clienteEncontrado) {
              console.log(this.chalk.magenta('Paciente encontrado:'));
              console.log(this.chalk.magenta(`Nombre: ${clienteEncontrado.getPaciente().getNombrePaciente()}`));
              console.log(this.chalk.magenta(`Especie: ${clienteEncontrado.getPaciente().getEspecie()}`));
              console.log(this.chalk.magenta(`Dueño: ${clienteEncontrado.getNombreCliente()}`));
              this.rl.question(this.chalk.magenta('¿Está seguro de eliminar este paciente? (S/N)'), (confirmacion) => {
                if (confirmacion.toLowerCase() === 's') {
                  clienteEncontrado.getPaciente().setNombrePaciente("");
                  clienteEncontrado.getPaciente().setEspecie("");
                  veterinarias[this.indexAuxVet].setCliente(clientes);
                  console.log(this.chalk.magenta('Paciente eliminado con éxito'));
                } else {
                  console.clear();
                  console.log(this.chalk.magenta('Operación cancelada'));
                }
                this.rl.question('Presione Enter para continuar...', () => {
                  console.clear();
                  this.menuIndividualVeterinaria();
                  });
              });
            } else {
              console.clear();
              console.log(this.chalk.magenta('Paciente no encontrado'));
              this.rl.question('Presione Enter para continuar...', () => {
                console.clear();
                this.menuIndividualVeterinaria();
                });
            }
          });
          break;
        case '6':
          console.clear();
          console.log(this.chalk.magenta(`Veterinaria seleccionada: ${veterinarias[this.indexAuxVet].getDatosVeterinaria()} \n`));
          this.rl.question(this.chalk.magenta('Ingrese Nombre Cliente agregar asistencia: '), (nombreCli) => {
            const clientes = veterinarias[this.indexAuxVet].getCliente();
            const indiceCliente = clientes.findIndex((cliente) => cliente.getNombreCliente().toLowerCase() === nombreCli.toLowerCase());
            if (indiceCliente !== -1) {
              console.clear();
              console.log(this.chalk.magenta(`Se agrega asistencia a: \n :${clientes[indiceCliente].getDatos()}`));
              veterinarias[this.indexAuxVet].clienteVisita(clientes[indiceCliente]);
              this.rl.question('Presione Enter para continuar...', () => {
                console.clear();
                this.menuIndividualVeterinaria();
                });
            } else {
              console.clear();
              console.log(this.chalk.magenta(`No se encontro Cliente`));
              this.rl.question('Presione Enter para continuar...', () => {
                console.clear();
                this.menuIndividualVeterinaria();
                });
            }
          });
          break;
        case '7':
          console.clear();
          this.menuRedVet();
          break;
        case '8':
          this.rl.close();
          break;
        default:
          console.clear();
          console.log(this.chalk.red('Opción inválida'));
          this.menuRedVet();
      }
    });
  }
  //Funcion de Veterinaria
  public elegirVeterinaria() {
    const veterinarias: Veterinaria[] = this.redVet1.getVeterinaria();
    this.rl.question(this.chalk.magenta('Ingrese Nombre Veterinaria : '), (nombreVet) => {
      const index1 = veterinarias.findIndex((vet) => vet.getNombreVeterinaria().toLowerCase() === nombreVet.toLowerCase());;
      if (index1 !== -1) {
        this.indexAuxVet = index1;
        console.log(this.chalk.magenta(`Veterinaria seleccionada: ${veterinarias[this.indexAuxVet].getNombreVeterinaria()}`));
        this.rl.question('Presione Enter para continuar...', () => {
          console.clear();
          this.menuIndividualVeterinaria();
          });
      } else {
        console.log(this.chalk.magenta("Veterinaria no encontrado"));
        this.rl.question('Presione Enter para continuar...', () => {
          console.clear();
          this.menuDeVeterinaria();
          });
       }
    });
  }
}