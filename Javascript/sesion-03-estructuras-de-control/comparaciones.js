//Comparaciones

// Igualdad

if (5 == 5) {
  console.log("5 es igual a 5");
}

if (5 === 5) {
  console.log("5 es muy igual a 5");
}

let a = 5;
console.log(typeof a);
let b = "5";
console.log(typeof b);

//==  Solo compara el valor
//=== Compara el valor y el tipo

if (a == b) {
  console.log("a es igual a b - debil");
}

if (a === b) {
  console.log("a es igual a b - fuerte");
}

let c = 4;
let d = "4";

//Desigualdad

if (c != d) {
  console.log("c es diferente a f - debil");
}

if (c !== d) {
  console.log("c es diferente a f - fuerte");
}

//Comparaciones Mayor y menor

let max = 10;
let min = 5;

if (max > min) {
  console.log("Max es mayor que mim");
}

if (max >= 10) {
  console.log("Max es mayor que mim");
}

if (min < max) {
  console.log("Min es menor que max");
}

if (min <= max) {
  console.log("Min es menor que max");
}
