//Métodos de cadena de texto parte 2

let input = "Piscis";
let db = "piscis";

//toLowerCase o toUpperCase
console.log(input.toLowerCase());
console.log(input.toUpperCase());
console.log(input.toLowerCase() === db.toLowerCase());
console.log(input.toUpperCase() === db.toUpperCase());

//Formas de concatenar 2 cadenas de caracteres

let str_1 = "Hola soy la primera cadena.";
let str_2 = "Y yo soy la segunda cadena";

console.log(str_1.concat(" ", str_2));
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`);

//Eliminar los espacios al principio o al final

let str_3 = "   Hola soy una string con espacios al final.    ";
console.log(str_3.length);
//trim()
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

//Como obtener el caracter que hay en cierta posición

let str_4 = "Hola soy el string número 4"; //['h','o', 'l', 'a']

console.log(str_4.charAt(5));
console.log(str_4[5]);

//Obtener la posición de una palabra dentro de una cadena de caracteres

let str_5 =
  "Hola soy Juanes y me gusta el futbol. Mi nomnres es Juanes y mi apelllido Rendón";

console.log(str_5.indexOf("Juanes"));
console.log(str_5[9]);
console.log(str_5.lastIndexOf("Juanes"));
