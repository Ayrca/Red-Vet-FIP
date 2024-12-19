export { Paciente };

class Paciente {
    private idDueño: number;
    private nombrePaciente: string;
    private especie: string;

    //constructor
    constructor(nombrePaciente: string, especie: string) {
        this.idDueño = 0;
        this.nombrePaciente = nombrePaciente;
        this.especie = especie
        if (this.especie != "perro" && this.especie != "gato") {
            this.especie = "exotico";
        }
        }

    //getters y setters
    public getNombrePaciente(): string {
        return this.nombrePaciente;
    }
    public setNombrePaciente(nuevonombrePaciente: string): void {
        this.nombrePaciente = nuevonombrePaciente;
    }

    public getIdDueño(): number {
        return this.idDueño;
    }
    public setIdDueño(nuevoidDueño: number): void {
        this.idDueño = nuevoidDueño;
    }

    public getEspecie(): string {
        return this.especie;
    }
    public setEspecie(nuevoespecie: string): void {
        this.especie = nuevoespecie;
    }

    public getDatos() {
    return (`IdDueño:${this.getIdDueño()}║ Nom Paciente:${this.getNombrePaciente()}║ Especie:${this.getEspecie()}`);
    }
}