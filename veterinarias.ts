export { Veterinaria };
import { Cliente } from './clientes'
import { Decorado } from './decoradoMenu';
import { Paciente } from './mascotas';

class Veterinaria extends Decorado{
    
    private idVeterinaria: number;
    private nombreVeterinaria: string;
    private direccion: string;
    private cliente: Cliente[] = [];
    private min = 0;
    private max = 1000;

    //constructor
    constructor(nombreVeterinaria: string, direccion: string) {
        super();
        this.idVeterinaria = 0;
        this.nombreVeterinaria = nombreVeterinaria;
        this.direccion = direccion;
    }

    //Manejo Clientes
    public agregarCliente(nuevoCliente: Cliente) {
        if (nuevoCliente instanceof Cliente) {
            nuevoCliente.setIdCliente(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
            nuevoCliente.getPaciente().setIdDueño(nuevoCliente.getIdCliente());
            this.asignarIdCliente(nuevoCliente);
            this.cliente.push(nuevoCliente);
            console.log(this.chalk.magenta("Cliente agregado:\n" + nuevoCliente.getDatos()));
        } else {
            console.log(this.chalk.magenta("No es un objeto Cliente"));
        }
    }
    
    public darDeBajaCliente(clienteEliminar: Cliente) {
        const index = this.cliente.indexOf(clienteEliminar);
        if (index !== -1) {
            this.cliente.splice(index, 1);
            console.log(this.chalk.magenta("Cliente Eliminado: " + clienteEliminar.getDatos()));
        } else {
            console.log(this.chalk.magenta("Cliente no encontrado"));
        }
    }

    public asignarIdCliente(clienteAsig: Cliente) {
        const indiceDuplicado = this.cliente.findIndex((cliente) => cliente.getIdCliente() === clienteAsig.getIdCliente());
        if (indiceDuplicado !== -1) {
            let nuevoId = 1;
            while (this.cliente.some((cliente) => cliente.getIdCliente() === nuevoId)) {
                nuevoId++;
            }
            clienteAsig.setIdCliente(nuevoId);
            clienteAsig.getPaciente().setIdDueño(clienteAsig.getIdCliente());
        }
    }

    public modificarCliente(nombreClientecamb: string, telefonocamb: number, calidaVipcamb: boolean, clienteCambiar: Cliente) {
        const index = this.cliente.indexOf(clienteCambiar);
        console.log(this.chalk.magenta(this.chalk.magenta("Cliente encontrado " + index)));
        if (index !== -1) {
            this.cliente[index].setNombreCliente(nombreClientecamb);
            this.cliente[index].setTelefono(telefonocamb);
            this.cliente[index].setCalidaVip(calidaVipcamb);
            console.log(this.chalk.magenta("Cliente fue modificado"));
            this.cliente.forEach((cliente) => console.log(cliente.getDatos()));
        } else {
            console.log(this.chalk.magenta("Cliente no encontrado"));
        }
    }

    public clienteVisita(clientevisit: Cliente) {
        clientevisit.setContadorVisitas(clientevisit.getContadorVisitas() + 1);
        console.log(this.chalk.magenta(`Nos ha visitado el Cliente: ${clientevisit.getNombreCliente()}, Nº de visitas ${clientevisit.getContadorVisitas()}`));
        if (clientevisit.getContadorVisitas() >= 5 || clientevisit.getCalidaVip() == true) {
            console.log(this.chalk.magenta(`Cliente ${clientevisit.getNombreCliente()} Cliente: VIP`));
            clientevisit.setCalidaVip(true)
        }
        else{
            console.log(this.chalk.magenta(`Cliente ${clientevisit.getNombreCliente()} Cliente:NO VIP`));
        }
    }

    //Manejo Pacientes
    public modificarPaciente(nombrePacientecamb: string, especiecamb: string, pacienteModificar: Paciente) {
        const clienteEncontrado = this.cliente.find((cliente) => cliente.getPaciente().getIdDueño() === pacienteModificar.getIdDueño());
        if (clienteEncontrado) {
            clienteEncontrado.getPaciente().setNombrePaciente(nombrePacientecamb);
            clienteEncontrado.getPaciente().setEspecie(especiecamb);
            console.log(this.chalk.magenta("Paciente modificado con éxito"));
            console.log(clienteEncontrado.getPaciente().getDatos());
        } else {
            console.log(this.chalk.magenta("Paciente no encontrado en ningún cliente"));
        }
    }

    public eliminarPaciente(pacienteEliminar: Paciente) {
        const clienteEncontrado = this.cliente.find((cliente) => cliente.getPaciente().getIdDueño() === pacienteEliminar.getIdDueño());
        if (clienteEncontrado) {
            const pacienteVacio = new Paciente("", "");
            clienteEncontrado.setPaciente(pacienteVacio);
            console.log(this.chalk.magenta("Paciente eliminado con éxito"));
        } else {
            console.log(this.chalk.magenta("Paciente no encontrado en ningún cliente"));
        }
    }

    //getters y setters
    public getNombreVeterinaria(): string {
        return this.nombreVeterinaria;
    }
    public setNombreVeterinaria(nuevonombreVeterinaria: string): void {
        this.nombreVeterinaria = nuevonombreVeterinaria;
    }

    public getIdVeterinaria(): number {
        return this.idVeterinaria;
    }
    public setIdVeterinaria(nuevoidVeterinaria: number): void {
        this.idVeterinaria = nuevoidVeterinaria;
    }

    public getDireccion(): string {
        return this.direccion;
    }
    public setDireccion(nuevodireccion: string): void {
        this.direccion = nuevodireccion;
    }

    public getCliente(): Cliente[] {
        return this.cliente;
    }

    public setCliente(cliente: Cliente[]): void  {
        this.cliente = cliente;
    }

    public imprimirListaCliente() {
        const titulo = "Lista de Clientes: ";
        const opciones = this.cliente.map(cliente => cliente.getDatos());
        this.crearCasilla1(titulo, opciones,'magenta');
        console.log(this.chalk.magenta('-------------------------------------' + '\n'));
    }

    public getDatosVeterinariaClientes() {
    return (`IdVet:${this.getIdVeterinaria()}, Nom: ${this.getNombreVeterinaria()}, Dir: ${this.getDireccion()}
    Cliente: ` + this.cliente.map((cliente) => cliente.getDatos()).join("\n"));
    }

    public getDatosVeterinaria() {
    return (`IdVet:${this.getIdVeterinaria()}, Nom:${this.getNombreVeterinaria()}, Dir:${this.getDireccion()}`);
    }
}     