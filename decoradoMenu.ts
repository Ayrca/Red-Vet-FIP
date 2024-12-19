export { Decorado };

class Decorado {
    chalk = require('chalk');
    constructor() { }

      public crearCasilla(titulo, opciones, color:string) {

        let ancho = 60; // Define el ancho del cuadro
        const lineaHorizontal = '═'.repeat(ancho); // Crea la línea horizontal con el ancho definido
        const lineaVertical = '║'; // Define la línea vertical
        
        switch (color) {
        case 'amarillo':
        console.log(this.chalk.yellow(`╔${lineaHorizontal}╗`));
        console.log(this.chalk.yellow(`${lineaVertical} ${titulo.padEnd(ancho - 2)} ${lineaVertical}`));
        console.log(this.chalk.yellow(`╠${lineaHorizontal}╣`));
        opciones.forEach(opcion => {
        console.log(this.chalk.yellow(`${lineaVertical} ${opcion.padEnd(ancho - 2)} ${lineaVertical}`));
        });
        console.log(this.chalk.yellow(`╚${lineaHorizontal}╝`));
        break;
        case 'verde':
        console.log(this.chalk.green(`╔${lineaHorizontal}╗`));
        console.log(this.chalk.green(`${lineaVertical} ${titulo.padEnd(ancho - 2)} ${lineaVertical}`));
        console.log(this.chalk.green(`╠${lineaHorizontal}╣`));
        opciones.forEach(opcion => {
        console.log(this.chalk.green(`${lineaVertical} ${opcion.padEnd(ancho - 2)} ${lineaVertical}`));
        });
        console.log(this.chalk.green(`╚${lineaHorizontal}╝`));
        break;
        case 'azul':
        console.log(this.chalk.cyan(`╔${lineaHorizontal}╗`));
        console.log(this.chalk.cyan(`${lineaVertical} ${titulo.padEnd(ancho - 2)} ${lineaVertical}`));
        console.log(this.chalk.cyan(`╠${lineaHorizontal}╣`));
        opciones.forEach(opcion => {
        console.log(this.chalk.cyan(`${lineaVertical} ${opcion.padEnd(ancho - 2)} ${lineaVertical}`));
        });
        console.log(this.chalk.cyan(`╚${lineaHorizontal}╝`));
        break;
        case 'magenta':
            console.log(this.chalk.magenta(`╔${lineaHorizontal}╗`));
            console.log(this.chalk.magenta(`${lineaVertical} ${titulo.padEnd(ancho - 2)} ${lineaVertical}`));
            console.log(this.chalk.magenta(`╠${lineaHorizontal}╣`));
            opciones.forEach(opcion => {
            console.log(this.chalk.magenta(`${lineaVertical} ${opcion.padEnd(ancho - 2)} ${lineaVertical}`));
            });
            console.log(this.chalk.magenta(`╚${lineaHorizontal}╝`));
            break;
        default:
        console.log(this.chalk.white(`╔${lineaHorizontal}╗`));
        console.log(this.chalk.white(`${lineaVertical} ${titulo.padEnd(ancho - 2)} ${lineaVertical}`));
        console.log(this.chalk.white(`╠${lineaHorizontal}╣`));
        opciones.forEach(opcion => {
        console.log(this.chalk.white(`${lineaVertical} ${opcion.padEnd(ancho - 2)} ${lineaVertical}`));
        });
        console.log(this.chalk.white(`${lineaHorizontal}╝`));
        break;
        }
        }
      

        public crearCasilla1(titulo, opciones, color:string) {

            let ancho = 115; // Define el ancho del cuadro
            const lineaHorizontal = '═'.repeat(ancho); // Crea la línea horizontal con el ancho definido
            const lineaVertical = '║'; // Define la línea vertical
            
            switch (color) {
            case 'amarillo':
            console.log(this.chalk.yellow(`╔${lineaHorizontal}╗`));
            console.log(this.chalk.yellow(`${lineaVertical} ${titulo.padEnd(ancho - 2)} ${lineaVertical}`));
            console.log(this.chalk.yellow(`╠${lineaHorizontal}╣`));
            opciones.forEach(opcion => {
            console.log(this.chalk.yellow(`${lineaVertical} ${opcion.padEnd(ancho - 2)} ${lineaVertical}`));
            });
            console.log(this.chalk.yellow(`╚${lineaHorizontal}╝`));
            break;
            case 'verde':
            console.log(this.chalk.green(`╔${lineaHorizontal}╗`));
            console.log(this.chalk.green(`${lineaVertical} ${titulo.padEnd(ancho - 2)} ${lineaVertical}`));
            console.log(this.chalk.green(`╠${lineaHorizontal}╣`));
            opciones.forEach(opcion => {
            console.log(this.chalk.green(`${lineaVertical} ${opcion.padEnd(ancho - 2)} ${lineaVertical}`));
            });
            console.log(this.chalk.green(`╚${lineaHorizontal}╝`));
            break;
            case 'azul':
            console.log(this.chalk.cyan(`╔${lineaHorizontal}╗`));
            console.log(this.chalk.cyan(`${lineaVertical} ${titulo.padEnd(ancho - 2)} ${lineaVertical}`));
            console.log(this.chalk.cyan(`╠${lineaHorizontal}╣`));
            opciones.forEach(opcion => {
            console.log(this.chalk.cyan(`${lineaVertical} ${opcion.padEnd(ancho - 2)} ${lineaVertical}`));
            });
            console.log(this.chalk.cyan(`╚${lineaHorizontal}╝`));
            break;
            case 'magenta':
                console.log(this.chalk.magenta(`╔${lineaHorizontal}╗`));
                console.log(this.chalk.magenta(`${lineaVertical} ${titulo.padEnd(ancho - 2)} ${lineaVertical}`));
                console.log(this.chalk.magenta(`╠${lineaHorizontal}╣`));
                opciones.forEach(opcion => {
                console.log(this.chalk.magenta(`${lineaVertical} ${opcion.padEnd(ancho - 2)} ${lineaVertical}`));
                });
                console.log(this.chalk.magenta(`╚${lineaHorizontal}╝`));
                break;
            default:
            console.log(this.chalk.white(`╔${lineaHorizontal}╗`));
            console.log(this.chalk.white(`${lineaVertical} ${titulo.padEnd(ancho - 2)} ${lineaVertical}`));
            console.log(this.chalk.white(`╠${lineaHorizontal}╣`));
            opciones.forEach(opcion => {
            console.log(this.chalk.white(`${lineaVertical} ${opcion.padEnd(ancho - 2)} ${lineaVertical}`));
            });
            console.log(this.chalk.white(`${lineaHorizontal}╝`));
            break;
            }
            }






    private titulo1 = ' Menú Red de Veterinarias de consultas ';
    private opciones1 = [
        ' 1.🐶 - Manejo Veterinarias ',
        ' 2.🏢 - Manejo Proveedores ',
        ' 3.🏥 - Ingresar a una Veterinaria en particular ',
        ' 4.😔 - Salir '];

    private titulo2 = ' Menú Veterinarias ';
    private opciones2 = [
        ' 1.🏥 - Agregar Veterinaria ',
        ' 2.🚮 - Dar De Baja Veterinaria ',
        ' 3.🛠️  - Modificar Veterinaria                             ',
        ' 4.📠 - Imprimir Lista Veterinarias ',
        ' 5.👋 - Volver al Menu Principal ',
        ' 6.😔 - Salir '];

    private titulo3 = ' Menú Proveedores ';
    private opciones3 = [
        ' 1.🏢 - Agregar Proveedores ',
        ' 2.🚮 - Dar De Baja Proveedores ',
        ' 3.🛠️  - Modificar Proveedor                               ',
        ' 4.📠 - Imprimir Lista Proveedores ',
        ' 5.👋 - Volver al Menu Principal ',
        ' 6.😔 - Salir '];

    private titulo4 = ' Veterianarias Menu: ';
    private opciones4 = [
        ' 1.🏢 - Ingresar una Veterinaria Por Nombre ',
        ' 2.📠 - Ver Lista de Veterinarias ',
        ' 3.👋 - Volver al Menu Principal ',
        ' 4.😔 - Salir '];


    private opciones5 = [
        ' 1.📠 - Ver Lista de Clientes ',
        ' 2.🗂️  - Agregar Paciente/Cliente                          ',
        ' 3.🚮 - Eliminar Clientes/Paciente ',
        ' 4.🛠️  - Modificar Clientes/Pacientes                      ',
        ' 5.🐶 - Eliminar Pacientes ',
        ' 6.📝 - Asistencia Cliente ',
        ' 7.👋 - Volver al Menu Principal ',
        ' 8.😔 - Salir '];
























    public getTitulo1(): string {
        return this.titulo1;
    }

    public getOpciones1(): string[] {
        return this.opciones1;
    }
    public getTitulo2(): string {
        return this.titulo2;
    }

    public getOpciones2(): string[] {
        return this.opciones2;
    }
    public getTitulo3(): string {
        return this.titulo3;
    }

    public getOpciones3(): string[] {
        return this.opciones3;
    }
    public getTitulo4(): string {
        return this.titulo4;
    }

    public getOpciones4(): string[] {
        return this.opciones4;
    }

 
    public getOpciones5(): string[] {
        return this.opciones5;
    }
}