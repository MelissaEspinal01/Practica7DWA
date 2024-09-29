// Ejemplo 3: Objeto con propiedades anidadas
const Estudiante = {
    Nombre: "Melissa",
    edad: 21,
    direccion: {
        calle: "Barrio Peña Blanca",
        ciudad: "Concepcion de Oriente"
   
    },
    materias: ["Matematicas", "Programación", "Fisica"]
    
};

console.log(Estudiante.direccion.ciudad);
console.log(Estudiante.materias[1]);

