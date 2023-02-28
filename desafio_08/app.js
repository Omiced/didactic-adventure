"use strict";

// 1. Escribir una clase para guardar el nombre, la fecha de expiracion
// y el precio de venta de los productos.
class Producto {
  nombre;
  fechaExpiracion;
  precioVenta;
  constructor(nombre, fechaExpiracion, precioVenta) {
    this.nombre = nombre;
    this.fechaExpiracion = fechaExpiracion;
    this.precioVenta = precioVenta;
  }

  getNombre() {
    return this.nombre;
  }

  getFechaExpiracion() {
    return this.fechaExpiracion;
  }

  getPrecioVenta() {
    return this.precioVenta;
  }
}
// fecha año mes dia
const lista = [
  new Producto("Papas", "2023-01-05", 100),
  new Producto("Zanahoria", "2023-02-27", 200),
  new Producto("Brocoli", "2022-12-25", 300),
  new Producto("Cebolla", "2023-03-04", 400),
  new Producto("Perejil", "2021-05-12", 500),
];

// 2. Escribir una función que tome una lista de productos y sume el total del costo
// de los productos, excuyendo los productos expirados.
function carritoDeCompra(productos) {
  const noExpirados = lista.filter((producto) => {
    const fechaActual = new Date();
    return new Date(producto.fechaExpiracion) > fechaActual;
  });
  return noExpirados.reduce(
    (total, producto) => (total += producto.getPrecioVenta()),
    0
  );
}

console.log(carritoDeCompra(lista));
