//* Formas de importar/exportar módulos
/// 1. CommonJS - require
/// 2. Import ES6 - Import

// const moduloMatematicas = require("./modulos/matematicas.js")
// const factorial = moduloMatematicas.factorial
// const { factorial, suma} = moduloMatematicas;
// const suma = moduloMatematicas.suma
// console.log(moduloMatematicas);

const { factorial, suma } = require("./modulos/matematicas")


const fact = factorial(5);
console.log(fact);

const sum = suma(12, 90);
console.log(sum);