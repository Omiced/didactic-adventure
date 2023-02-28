"use strict";
function numeroAleatorio(numeroA, numeroB) {
  return Math.floor(Math.random() * (numeroB - numeroA) + numeroA);
}

console.log(numeroAleatorio(5, 10));
console.log(numeroAleatorio(-25, -22));
console.log(numeroAleatorio(100, 0));
console.log(numeroAleatorio(-2, 2));
