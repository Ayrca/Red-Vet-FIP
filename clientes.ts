export {Cliente};
import {Paciente} from './mascotas';

class Cliente {
    
    private idCliente: number;
    private nombreCliente: string ;
    private telefono:number;
    private calidaVip: boolean;
    private pacientes: Paciente; //composicion de la clase Pacientes
    private contadorVisitas:number;

    //constructor
    constructor(nombreCliente: string, telefono:number, calidaVip: boolean, pacientes:Paciente) {
       
        this.idCliente = 0;
        this.nombreCliente = nombreCliente;
        this.telefono = telefono;
        this.calidaVip = calidaVip;
        this.contadorVisitas=0;
        this.pacientes= pacientes;
    }
   
// getters y setters
    public getNombreCliente(): string {
        return this.nombreCliente;
    }
    public setNombreCliente(nuevonombreCliente: string ): void {
            this.nombreCliente = nuevonombreCliente;
    }

    public getIdCliente(): number {
        return this.idCliente;
    }
    public setIdCliente(nuevoidCliente:number ): void {
            this.idCliente = nuevoidCliente;
    }

    public getTelefono(): number {
        return this.telefono;
    }
    public setTelefono(nuevoTelefono: number ): void {
            this.telefono = nuevoTelefono;
    }
   
    public getContadorVisitas(): number {
        return this.contadorVisitas;
    }
    public setContadorVisitas(nuevoContadorVisitas: number ): void {
            this.contadorVisitas = nuevoContadorVisitas;
    }

    public getCalidaVip(): boolean {
        return this.calidaVip;
    }
    public setCalidaVip(nuevoCalidaVip: boolean ): void {
            this.calidaVip = nuevoCalidaVip;
    }
    
    public setPaciente(nuevoPacientes: Paciente ): void {
        this.pacientes = nuevoPacientes;
    }
    public getPaciente(): Paciente {
        return this.pacientes;
    }

    public getDatos() {
        return(
          `IdCliente:${this.getIdCliente()}║ Nom: ${this.getNombreCliente()}║ Tel: ${this.getTelefono()}║ Vip: ${this.getCalidaVip()}║ Paciente:${ this.pacientes.getDatos()}`);
     }
   
}