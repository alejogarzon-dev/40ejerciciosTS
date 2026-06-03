interface Vehiculo {
    readonly placa: string;
    marca: string;
    modelo: string;
    kilometraje: number;
    año: number;
    disponible: boolean;
}
const fortuner: Vehiculo = {
    placa: "ABC123",
    marca: "Toyota",
    modelo: "Fortuner",
    año: 2020,
    kilometraje: 0,
    disponible: true
};
const hilux: Vehiculo = {
    placa: "DEF456",
    marca: "Toyota",
    modelo: "Hilux",
    año: 2021,
    kilometraje: 0,
    disponible: true
};
const ranger: Vehiculo = {
    placa: "GHI789",
    marca: "Ford",
    modelo: "Ranger",  
    año: 2022,
    kilometraje: 0,
    disponible: false
};

const vehiculos = [fortuner, hilux, ranger];
for (const vehiculo of vehiculos) {
    console.log(`${vehiculo.marca} ${vehiculo.modelo} (${vehiculo.año}) - kilometraje: ${vehiculo.kilometraje} - disponible: ${vehiculo.disponible ? "Sí" : "No"}`);
}