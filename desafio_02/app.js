"use strict";
function sonSimilares(arregloA, arregloB) {
  if (arregloA.length !== arregloB.length) return false;
  const filtrado = arregloA.filter((el, i) => el !== arregloB[i]);
  if (filtrado.length === 0) return true;
  return false;
}

console.log(sonSimilares([1, 2], [1, 2, 3])); // false
console.log(sonSimilares([1, 2, 3], [1, 2, 3])); // true
console.log(sonSimilares([1, 2, 3], ["1", "2", "3"])); // false
console.log(sonSimilares([1, 2, 3, 4], [1, 2, 3, 4])); // true
