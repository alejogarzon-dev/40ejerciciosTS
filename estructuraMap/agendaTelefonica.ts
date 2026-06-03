const agenda = new Map<string, string>();

// Agregar contactos
agenda.set("Ana", "3001234567");
agenda.set("Carlos", "3109876543");
agenda.set("Laura", "3204567890");
agenda.set("Pedro", "3157412589");
agenda.set("Sofía", "3018529637");

// Buscar contactos
console.log("Teléfono de Ana:", agenda.get("Ana"));
console.log("Teléfono de Pedro:", agenda.get("Pedro"));

// Eliminar un contacto
agenda.delete("Carlos");

// Mostrar contactos restantes
console.log("Contactos restantes:");

for (const [nombre, telefono] of agenda) {
    console.log(nombre, "→", telefono);
}