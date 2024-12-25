import { Persona, Usuario } from "@/Interfaces/Interfaces";

export const initialSatePersona: Persona = {
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    email: "",
    contrasenia: "",
    maquillaje: "",
    genero: "",
    favorito: "",
    terminos: false
};

export const initialStateUsuario: Usuario = {
    username: "",
    password: ""
};