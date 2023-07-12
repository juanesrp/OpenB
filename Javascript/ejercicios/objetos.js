const objeto = {
  nombre: "Juan Esteban",
  apellido: "Rendón",
  edad: 25,
  altura: 166,
  isDeveloper: true,
};

let edad_obj = objeto.edad;
console.log(edad_obj);

const listaAmigos = [
  {
    nombre: "Juan Esteban",
    apellido: "Rendón",
    edad: 25,
    altura: 166,
    isDeveloper: true,
  },
  {
    nombre: "Brayan",
    apellido: "Gonzales",
    edad: 23,
    altura: 180,
    isDeveloper: false,
  },
  {
    nombre: "Nicolas",
    apellido: "Castaño",
    edad: 24,
    altura: 170,
    isDeveloper: false,
  },
];

const listaAmigosOrdenada = listaAmigos.sort((a, b) => a.edad - b.edad);

console.log(listaAmigosOrdenada);
