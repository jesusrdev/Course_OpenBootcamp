//? Operador - valueOf() - Obtener valores numéricos a partir de literales

let a  = 2;
let b = new Number(3)

console.log(a);
console.log(b);

console.log(b.valueOf());


//? NaN (Not a Number) - Infinity
let n = Number('adios')
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;

let divisor_2 = null;

console.log(numerador / divisor);
console.log(numerador / divisor_2);


//? Como convertir los string a valores numéricos con Number, parseInt y parseFloat

let numero = '5.89';
let num2 = 17.2;

console.log(typeof numero);
console.log(numero + num2); // Error de concepto

console.log(Number(numero) + num2);


console.log(parseInt(numero));

console.log(parseFloat(numero));

let num3 = 4;
console.log(parseInt(num3));
console.log(parseFloat(num3));


//? Números hexadecimales

let numHex = '0x3a5b7'
console.log(parseInt(numHex));


//? Obtener los valores máximo y mínimo en Javascript

let minPrecision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(minPrecision);
console.log(min_valor_JS);
console.log(max_valor_JS);