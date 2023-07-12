//Sets o conjuntos (en castellano)

const array = [1, 2, 3, 4, 5, 6, 1, 2, 5, "Hola", { id: 5 }, "Hola"];
const miSet = new Set(array);

//Array es un conjunto ordenado de valores y objetos
console.log(array);
//Sets e sun conujunto no ordenado de valores unicos
//Nos permite asegurarnos que en este conjunto no habra valores repetidos
console.log(miSet);

//.add()
miSet.add(9);
console.log(miSet);
miSet.add(4);
console.log(miSet);

//.delete()

miSet.delete("Hola");
console.log(miSet);

//.clear()
// miSet.clear('Hola')
// console.log(miSet)

//.has()
// console.log(array.includes(2))
console.log(miSet.has(40));

//.size
console.log(miSet.size);

miSet.forEach((valor) => {
  console.log(valor);
});

const it_miSet = miSet.values();
console.log(it_miSet);

const ar_miSet = [...miSet];
console.log(ar_miSet);
