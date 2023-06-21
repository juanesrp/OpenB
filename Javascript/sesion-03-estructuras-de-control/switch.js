//Sentencias switch

let nota = 5;

switch (nota) {
  case 5:
    console.log("Buen trabajo sobresaliente");
    break;
  case 4:
    console.log("buen trabajo pero podrias haberlo hecho mejor");
    break;
  case 3:
    console.log("Has obtenido suficiente");
    break;
  case 2:
    console.log("No has aprobado por poco");
    break;
  case 1:
    console.log("No has estudiado nada, trabaja un poquito para la proxima");
    break;
  default:
    console.log("Introduce una nota entre el 1 y el 5");
    break;
}
