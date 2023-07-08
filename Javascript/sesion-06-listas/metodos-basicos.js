//Como trabajar con listas (arrays, arreglos, vectores)
let var1 = { id: false };
let array = [1, "hola", false, { id: 5 }, null, undefined, var1];

console.log(array);

//Acceder a los valores de un array a través de su posición
//Array indice => 0,1,2,3,4,5, ..
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

//Metodos para introducir nuevos valoresen nuestros arrays
//.push .unshift => Mutan el valor a nuestro array
//Valores al final -> push
//Valores al inicio -> unshift
array.push("final", 45, 100, false);
console.log(array);

array.unshift("inicio", 87, 99);
console.log(array);

//Metodos para eliminar valores a nuestros arrays
//.pop() .shift() => Mutan el valor a nuestro array

let array2 = [1, 3, "hola", false];
array2.pop();
console.log(array2);

//Valores al principio shift

array2.shift();
console.log(array2);

//MAtodo para eliminar, modificar o añadir valores
//.splice(x,y,z)
const array3 = [1, 2, 3, 4, 5, 6];

//Eliminar valores .splice(indice, valores a eliminar)
array3.splice(2, 1);
console.log(array3);

//Añadir valores .splice(indice, 0, valores)
array3.splice(2, 0, "hola", 3);
console.log(array3);

//Modificar valores splice(indice, 1, valores)
array3.splice(2, 1, "chao");
console.log(array3);
