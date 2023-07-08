const listaCompras = ["Arroz", "Agua", "Panela", "Frijoles", "Mantequilla"];

listaCompras.push("Acete de Girasol");

console.log(listaCompras);

listaCompras.pop();

console.log(listaCompras);

//Lista de peliculas favoritas

const listaPeliculas = [
  {
    titulo: "Harry Potter y el principe mestizo",
    director: "J.K Rowling",
    fecha: new Date(2009, 6, 15),
  },
  {
    titulo: "La caida del alcón negro",
    director: "Ridley Scott",
    fecha: new Date(2002, 2, 1),
  },
  {
    titulo: "El Origen",
    director: "Christopher Nolan",
    fecha: new Date(2010, 7, 6),
  },
];

const filtro = listaPeliculas.filter(
  (pelicula) => pelicula.fecha > new Date(2010, 0, 1)
);

console.log(filtro);

const directores = listaPeliculas.map((nombre) => nombre.director);

console.log(directores);

const titulos = listaPeliculas.map((nombre) => nombre.titulo);

console.log(titulos);

const listasConcatenadas = directores.concat(titulos);
console.log(listasConcatenadas);

const listasConcatenadas2 = [...directores, ...titulos];
console.log(listasConcatenadas2);
