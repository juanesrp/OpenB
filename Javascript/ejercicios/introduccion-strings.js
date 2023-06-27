//Strings o cadenas de caracteres

let str_dbl = "Hola soy un texto con comillas dobles";
let str_sin = "Hola soy un texto con comillas simples";

console.log(str_sin);
console.log(str_dbl);

let str_comillas = 'El otro dia me dijo literalmente "ve a sacar la basura"';
let str_comillas_simples =
  'El otro dia me dijo literalmente "ve a sacar la basura"';
let str_comillas_dobles =
  "El otro dia me dijo literalmente 've a sacar la basura'";
let str_comillas_simples_2 =
  "El otro dia me dijo literalmente 've a sacar la basura'";

console.log(str_comillas);
console.log(str_comillas_simples);
console.log(str_comillas_dobles);

//Comillas invertidas (backticks)

let str_backticks = `Hola esto es un string con backticks`;

console.log(str_backticks);

let nombre = "Juan";
let saludo = `Hola, ${nombre} bienvenido`;

console.log(saludo);

let plantilla = `
<html>
    <h1>Pagina Web de ${nombre}</h1>
    <p>Este es un párrafo</p>
</html>
`;
console.log(plantilla);

//Introducción de variables en html

let libros = [
  "Empieza por el por qué",
  "El monje que vendio su Ferrari",
  "El poder del ahora",
];
