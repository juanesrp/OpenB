const fecha_hoy = new Date();

const fechaNacimiento = new Date(1998, 2, 14, 7, 10);

const hoyEsMastarde = fecha_hoy.getTime() > fechaNacimiento.getTime();

console.log(hoyEsMastarde);

const mesNacimiento = fechaNacimiento.getMonth() + 1;
console.log(mesNacimiento);

const anyoNacimiento = fechaNacimiento.getFullYear();
console.log(anyoNacimiento);
