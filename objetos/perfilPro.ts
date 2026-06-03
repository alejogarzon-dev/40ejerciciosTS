/*
Crea un objeto Perfil con nombre, profesion, experiencia (años) y habilidades 
(array). Crea un perfil completo. Luego clona el perfil con spread cambiándole 
nombre y experiencia. Imprime las claves del objeto original con Object.keys. 
*/

type Perfil = {
    nombre: string;
    profesion: string;
    experiencia: number;
    habilidades: string[];
};

let perfilOriginal: Perfil = {
    nombre: "Santiago",
    profesion: "Desarrollador",
    experiencia: 5,
    habilidades: ["JavaScript", "TypeScript", "React"]
};

let perfilClonado: Perfil = {
    ...perfilOriginal,
    nombre: "María",
    experiencia: 10
};

console.log("Claves del perfil original:");
console.log(Object.keys(perfilOriginal));
console.log("Claves del perfil clonado:");
console.log(Object.keys(perfilClonado));