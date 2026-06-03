/*
Login con validaciones múltiples 
Crea una función login(usuario, contraseña) que lance distintos errores: si el 
usuario está vacío, si la contraseña tiene menos de 6 caracteres, o si la 
combinación no es válida (compara contra valores guardados). Pruébala con tres 
escenarios diferentes. 
*/

function login(usuario: string, contraseña: string) {
    if (!usuario) {
        throw new Error("El usuario no puede estar vacío");
    }
    if (contraseña.length < 6) {
        throw new Error("La contraseña debe tener al menos 6 caracteres");
    }
    // Simulación de validación de combinación
    if (usuario !== "admin" || contraseña !== "123456") {
        throw new Error("La combinación de usuario y contraseña no es válida");
    }
    return "LOGIN EXITOSO!!!!"
}

console.log(login("admin", "123456"));
console.log(login("", "123456"));
console.log(login("admin", "123"));
console.log(login("user", "password"));