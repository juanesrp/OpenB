//Factorial for

let resultado = 1;
for (let i = 1; i <= 10; i++) {
  resultado *= i;
}

console.log(resultado);

//factorial while
let i = 1;
let factorial = 1;
while (i <= 10) {
  factorial *= i;
  i++;
}
console.log(factorial);

//factorial while
let j = 1;
let factorial2 = 1;
while (true) {
  factorial2 *= j;
  if (j === 10) {
    break;
  }
  j++;
}
console.log(factorial2);
