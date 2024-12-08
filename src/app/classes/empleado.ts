export class Empleado {
    id: number;
    email: string;
    nombre: string;
    apellidos: string;
    cargo_id: number

    constructor(id: number=0, nombre: string='', apellidos: string='', email: string='', cargo_id: number=0) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.cargo_id = cargo_id;
    }
}
