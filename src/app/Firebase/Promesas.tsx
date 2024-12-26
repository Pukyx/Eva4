import { Persona, Usuario } from "@/Interfaces/Interfaces";
import { addDoc, collection, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./Firebase";

// Registrar Persona
export const registrarPersona = async (persona: Persona) => {
  const docRef = await addDoc(collection(db, "personas"), persona);
};

// Obtener todas las Personas
export const obtenerPersonas = async () => {
  const querySnapshot = await getDocs(collection(db, "personas"));
  let personas: Persona[] = [];
  querySnapshot.forEach((doc) => {
    let persona: Persona = {
      nombre: doc.data().nombre,
      apellido: doc.data().apellido,
      email: doc.data().email,
      contrasenia: doc.data().contrasenia,
      fechaNacimiento: doc.data().fechaNacimiento,
      genero: doc.data().genero,
      maquillaje: doc.data().maquillaje,
      favorito: doc.data().favorito,
      terminos: doc.data().terminos,
      key: doc.id,
    };
    personas.push(persona);
  });
  return personas;
};

// Obtener una Persona por su Key
export const obtenerPersona = async (key: string) => {
  const docRef = doc(db, "personas", key);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    let persona: Persona = {
      nombre: docSnap.data().nombre,
      apellido: docSnap.data().apellido,
      email: docSnap.data().email,
      contrasenia: docSnap.data().contrasenia,
      fechaNacimiento: docSnap.data().fechaNacimiento,
      genero: docSnap.data().genero,
      maquillaje: docSnap.data().maquillaje,
      favorito: docSnap.data().favorito,
      terminos: docSnap.data().terminos,
      key: docSnap.id,
    };
    return persona;
  } else {
    return undefined;
  }
};

// Modificar una Persona
export const modificarPersona = async (persona: Persona) => {
  const ref = doc(db, "personas", persona.key!); // Asegurarse de que key está presente
  await updateDoc(ref, {
    nombre: persona.nombre,
    apellido: persona.apellido,
    email: persona.email,
    contrasenia: persona.contrasenia,
    fechaNacimiento: persona.fechaNacimiento,
    genero: persona.genero,
    maquillaje: persona.maquillaje,
    favorito: persona.favorito,
    terminos: persona.terminos,
  });
};

// Eliminar una Persona
export const eliminarPersona = async (key: string) => {
  const ref = doc(db, "personas", key);
  await deleteDoc(ref);
};

// Verificar si existe un Usuario con las credenciales proporcionadas
export const verificarUsuario = async (username: string, password: string) => {
  const querySnapshot = await getDocs(collection(db, "usuarios"));
  let eUsuario = false;

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    if (data.username === username && data.password === password) {
      eUsuario = true;
    }
  });
  return eUsuario;
};

// Registrar un nuevo Usuario
export const registrarUsuario = async (usuario: Usuario) => {
  const docRef = await addDoc(collection(db, "usuarios"), usuario);
};

  