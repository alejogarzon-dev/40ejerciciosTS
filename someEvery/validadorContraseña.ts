// Lista de contraseñas registradas
const contrasenas = [
    "sol2026segura",
    "admin12345",
    "claveSuper99",
    "usuario789",
    "seguridad2026"
];

// Verificar que todas tengan al menos 8 caracteres
const todasValidas = contrasenas.every(
    contrasena => contrasena.length >= 8
);

// Verificar si alguna contiene la palabra "admin"
const existeAdmin = contrasenas.some(
    contrasena => contrasena.includes("admin")
);

// Mostrar resultados
console.log("¿Todas tienen al menos 8 caracteres?", todasValidas);
console.log("¿Alguna contiene la palabra 'admin'?", existeAdmin);