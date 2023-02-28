"use strict";

// Escribir función que indica si un número es primo

function esPrimo(numero) {
  // escribe tu código aquí
  if (numero <= 1) return false;
  if (numero === 2 || numero === 3) return true;
  if (numero % 2 === 0 || numero % 3 === 0) return false;
  return true;
}

console.log(esPrimo(2)); //  true
console.log(esPrimo(7)); //  true
console.log(esPrimo(10)); // false
console.log(esPrimo(15)); // false
console.log(esPrimo(29)); // true
console.log(esPrimo(21)); // false
console.log(esPrimo(31)); // true
