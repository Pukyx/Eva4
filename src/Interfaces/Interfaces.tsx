export interface Persona {
    nombre: string;
    apellido: string;
    fechaNacimiento?: string;
    email: string;
    contrasenia: string;
    maquillaje?: string;
    genero?: string;
    favorito?: string;
    terminos?: boolean;
    key?: string;
    
}

export interface Usuario {
    username: string;
    password: string;
  }