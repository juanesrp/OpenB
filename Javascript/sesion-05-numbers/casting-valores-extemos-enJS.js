//Operador .valueOf()- Obtener valores numérios a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());

console.log(b.valueOf());

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());

//NaN (Not a Number) - Infinity
let n = Number("adios");
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;

console.log(numerador / divisor);

let divisor_2 = null;
console.log(numerador / divisor_2);

//Como convertir los strings a valores numéricos con Number, parseInt y Parsefloat
let numero = "5.89";
let num2 = 17.2;
console.log(typeof numero);
console.log(numero + num2); //Error de concepto

console.log(Number(numero) + num2);

console.log(parseInt(numero));
console.log(parseFloat(numero));

let num3 = 4;
console.log(parseInt(num3));
console.log(parseFloat(num3));

//Números hexadecimales (base 16)
let numHex = "0x3a5b7";
console.log(parseInt(numHex));

//Obtener los valores maximo y minimo en javascript

let min_presicion = Number.EPSILON;
let min_value = Number.MIN_VALUE;
let max_value = Number.MAX_VALUE;

console.log(min_presicion);
console.log(min_value);
console.log(max_value);
