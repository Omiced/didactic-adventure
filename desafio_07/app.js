"use strict";
const nombres = [
  "June Greene",
  "Magdalena Hardy",
  "Merle Gonzales",
  "Whitaker Anderson",
  "Lucille Landry",
  "Annmarie Burns",
  "Erica Morrison",
  "Twila Dotson",
  "Cash Ratliff",
  "Maria Pierce",
  "Slater Mayo",
  "Gonzales Velazquez",
  "Hogan Tran",
  "Holland Harvey",
  "Carr Porter",
  "Marquez Bruce",
  "Rojas Wall",
  "Florine Lang",
  "Quinn Blanchard",
  "Charles Hughes",
  "Melba Moon",
  "Gilliam Marsh",
  "Lea Salazar",
  "Jackie Hogan",
  "Jacobson Riggs",
  "Mckee Mcclure",
  "Joanna Hampton",
  "Alexander Stokes",
  "Lola Witt",
  "Doyle Lee",
];
console.log(nombres.sort());
const arrNombres = [];
nombres.forEach((nombre) =>
  arrNombres.push(nombre.split(" ").reverse().join(" "))
);

console.log(arrNombres.sort());
