const nombres = [
  "Juan Jose",
  "Juan Daniel",
  "Maria Paz",
  "Liliana",
  "Juan Esteban",
];
const conjunto = new Set(nombres);

console.log(conjunto);

conjunto.add("Juan Esteban");

console.log(conjunto);

conjunto.add("Javascript");
console.log(conjunto);
