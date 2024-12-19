import { extend } from "jquery";

export { Proveedor };

class Proveedor {
    private idProveedores: number;
    private nombre: string;
    private telefono: number;

    constructor(nombre: string, telefono: number) {
        this.idProveedores = 0;
        this.nombre = nombre;
        this.telefono = telefono;
    }

    //getters y setters
    public getNombreProveedor(): string {
        return this.nombre;
    }
    public setNombreProveedor(nuevonombre: string): void {
        this.nombre = nuevonombre;
    }
    public getIdProveedores(): number {
        return this.idProveedores;
    }
    public setIdProveedores(nuevoidProveedores: number): void {
        this.idProveedores = nuevoidProveedores;
    }
    public getTelefono(): number {
        return this.telefono;
    }
    public setTelefono(nuevotelefono: number): void {
        this.telefono = nuevotelefono;
    }

    public getDatosProveedor() {
        return (`IdProv:${this.getIdProveedores()}, Nom: ${this.getNombreProveedor()} , Tel: ${this.getTelefono()}`);
    }
}