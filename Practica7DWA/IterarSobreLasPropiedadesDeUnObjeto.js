// Ejemplo 5: Iterar sobre las propiedades de un objeto
const producto = {
    nombre: "Laptop",
    autor: "Miguel de Cervantes",
    precio: 800,
    disponible: true
};

for (let propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
}
