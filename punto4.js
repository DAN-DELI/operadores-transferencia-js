// CONSTANTES: Se asignan las calificaciones fijas obtenidas por el aprendiz
const nota1 = 4.5;
const nota2 = 3.8;
const nota3 = 2.9;
const nota4 = 4.0;

// VARIABLES: Se calculan la suma total, el promedio y el resultado de la operación compuesta
let suma = (nota1 + nota2 + nota3 + nota4).toFixed(2); 
let promedio = (suma / 4).toFixed(2);
let resultado = ((nota1 + nota2) * (nota3 + nota4) / 2).toFixed(2); 

// Muestra el resultado de los anteriores cálculos
console.log(`
La suma de las notas es: ${suma}
El promedio de las notas es: ${promedio}
El resultado de la operación es: ${resultado}`);

