//Trabajando con fechas

const fecha = new Date();

console.log(fecha);

//Los meses inicializan en 0
const fecha2 = new Date(1998, 2, 14, 7, 10, 35, 289);
console.log(fecha2);

const fecha3 = new Date(-10000000000000);
console.log(fecha3);

const fecha4 = new Date("October 13, 1979 12:15:15");
console.log(fecha4);

const fecha5 = new Date(1998, 2, 14, 7, 10, 35, 289);
console.log(fecha5 === fecha2); //No se pueden comparar fechas de esta manera

console.log(fecha2.getTime() == fecha5.getTime()); //OK - Esta es la forma de comparar fechas

//Obtener el día, mes y año
//Obtener el día .getDate()
console.log(fecha2.getDate());

//Obtener mes
console.log(fecha2.getMonth() + 1);

//Obtener año
console.log(fecha2.getFullYear());

console.log(fecha2);

//.toLocaleDateString
//// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString("en-Us"));
