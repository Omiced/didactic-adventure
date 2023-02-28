"use strict";
//Crear array de productos que cada uno incluya información sobre id, nombreProducto, marca, fechaExpiracion:
// Crear dos funciones para buscar productos acorde a los parámetros:
const arrProductos = [
  {
    id: 1,
    nombreProducto: "Pepsi",
    marca: "Pecsi",
    fechaExpiracion: "21/02/2023",
  },
  {
    id: 2,
    nombreProducto: "Pepsi2",
    marca: "Pecsi2",
    fechaExpiracion: "21/02/2026",
  },
  {
    id: 3,
    nombreProducto: "Pepsi3",
    marca: "Pecsi3",
    fechaExpiracion: "21/02/2025",
  },
  {
    id: 4,
    nombreProducto: "Pepsi4",
    marca: "Pecsi4",
    fechaExpiracion: "21/02/2024",
  },
];

function buscarProductosPorId(id) {
  const producto = arrProductos.filter((producto) => producto.id === id);
  if (!producto.length) return "No hay";

  return producto;
}

function buscarProductosPorFecha(fecha) {
  const producto = arrProductos.filter(
    (producto) => producto.fechaExpiracion === fecha
  );
  if (!producto.length) return "No hay";
  return producto;
}

console.log(buscarProductosPorId(1));
console.log(buscarProductosPorId(6));
console.log(buscarProductosPorFecha("21/02/205"));
console.log(buscarProductosPorFecha("21/02/2025"));
