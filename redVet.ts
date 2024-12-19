export { RedVeterinaria };
import { Veterinaria } from './veterinarias';
import { Proveedor } from './proveedores';
import { Decorado } from './decoradoMenu';

class RedVeterinaria extends Decorado{
    private veterinaria: Veterinaria[] = [];
    private proveedores: Proveedor[] = [];
    private min = 0;
    private max = 1000;
    
    constructor() {super();}

 //Funciones para Veterinarias
    public agregarVeterinaria(nuevoVeterinaria: Veterinaria) {
        nuevoVeterinaria.setIdVeterinaria(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
        this.asignarIdVeterinaria(nuevoVeterinaria);
        if (nuevoVeterinaria instanceof Veterinaria) {
            this.veterinaria.push(nuevoVeterinaria);
            console.log(this.chalk.yellow("Veterinaria agregado:\n" + nuevoVeterinaria.getDatosVeterinaria()));
        } else {
            console.log(this.chalk.yellow("No es un objeto Veterinaria"));
        }
    }
    public asignarIdVeterinaria(veterinariaAsig: Veterinaria) {
        const indiceDuplicado = this.veterinaria.findIndex((veterinarias) => veterinarias.getIdVeterinaria() === veterinariaAsig.getIdVeterinaria());
        if (indiceDuplicado !== -1) {
            let nuevoId = 1;
            while (this.veterinaria.some((veterinarias) => veterinarias.getIdVeterinaria() === nuevoId)) {
                nuevoId++;
            }
            veterinariaAsig.setIdVeterinaria(nuevoId);
        }
    }
    public darDeBajaVeterinaria(veterinariaEliminar: Veterinaria) {
        const index = this.veterinaria.indexOf(veterinariaEliminar);
        if (index !== -1) {
            this.veterinaria.splice(index, 1);
            console.log(this.chalk.yellow("Veterinaria Eliminada: " + veterinariaEliminar.getDatosVeterinaria()));
        } else {
            console.log(this.chalk.yellow("Veterinaria no encontrado"));
        }
    }
    public modificarVeterinaria(nombreVeterinariacamb: string, direccioncamb: string, veterinariaCambiar: Veterinaria) {
        const index = this.veterinaria.indexOf(veterinariaCambiar);
        console.log(this.chalk.yellow("Veterinaria encontrada " + index));
        if (index !== -1) {
            this.veterinaria[index].setNombreVeterinaria(nombreVeterinariacamb);
            this.veterinaria[index].setDireccion(direccioncamb);
            console.log(this.chalk.yellow("Veterinaria fue modificada"));
            this.veterinaria.forEach((veterinaria) => console.log(veterinaria.getDatosVeterinaria()));
        } else {
            console.log(this.chalk.yellow("Veterinaria no encontrado"));
        }
    }
  
     public imprimirListaVeterinarias() {
        const titulo = "Lista de Veterinarias: ";
        const opciones = this.veterinaria.map(veterinaria => veterinaria.getDatosVeterinaria());
        this.crearCasilla(titulo, opciones,'amarillo');
        console.log(this.chalk.yellow('-------------------------------------' + '\n'));
    }
    


    //Funciones para Proveedores
    public agregarProveedores(nuevoProveedores: Proveedor) {
        nuevoProveedores.setIdProveedores(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
        this.asignarIdProveedores(nuevoProveedores);
        if (nuevoProveedores instanceof Proveedor) {
            this.proveedores.push(nuevoProveedores);
            console.log(this.chalk.cyan("Proveedores agregado: \n" + nuevoProveedores.getDatosProveedor()));
        } else {
            console.log(this.chalk.cyan("No es un objeto Proveedores"));
        }
    }
    public asignarIdProveedores(proveedoresAsig: Proveedor) {
        const indiceDuplicado = this.proveedores.findIndex((proveedor) => proveedor.getIdProveedores() === proveedoresAsig.getIdProveedores());
        if (indiceDuplicado !== -1) {
            let nuevoId = 1;
            while (this.proveedores.some((proveedor) => proveedor.getIdProveedores() === nuevoId)) {
                nuevoId++;
            }
            proveedoresAsig.setIdProveedores(nuevoId);
        }
    }
    public darDeBajaProveedores(proveedoresEliminar: Proveedor) {
        const index = this.proveedores.indexOf(proveedoresEliminar);
        if (index !== -1) {
            this.proveedores.splice(index, 1);
            console.log(this.chalk.cyan("Proveedores Eliminado: " + proveedoresEliminar.getDatosProveedor()));
        } else {
            console.log(this.chalk.cyan("Proveedores no encontrado"));
        }
    }
    public modificarProveedor(nombreEmpresacamb: string, telefonocamb: number, proveedorCambiar: Proveedor) {
        const index = this.proveedores.indexOf(proveedorCambiar);
        console.log(this.chalk.cyan("Proveedor encontrado " + index));
        if (index !== -1) {
            this.proveedores[index].setNombreProveedor(nombreEmpresacamb);
            this.proveedores[index].setTelefono(telefonocamb);
            console.log(this.chalk.cyan("Proveedor fue modificada"));
            this.proveedores.forEach((proveedores) => console.log(proveedores.getDatosProveedor()));
        } else {
            console.log(this.chalk.cyan("Proveedor no encontrado"));
        }
    }
  
    public imprimirListaProveedores() {
        const titulo = "Lista de Proveedores:";
        const opciones = this.proveedores.map(proveedor => proveedor.getDatosProveedor());
        this.crearCasilla(titulo, opciones, 'azul');
        console.log('-------------------------------------' + '\n');
        }

    //Getters y setters
    public getProveedores(): Proveedor[] {
        return this.proveedores;
    }
    public setProveedores(proveedores: Proveedor[]) {
        this.proveedores = proveedores;
    }
    public getVeterinaria(): Veterinaria[] {
        return this.veterinaria;
    }
    public setVeterinaria(veterinaria: Veterinaria[]) {
        this.veterinaria = veterinaria;
    }
}