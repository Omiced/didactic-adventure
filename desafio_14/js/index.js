
// Implementar el buscador de texto:
// Al hacer click en el botón, se deberá buscar el texto que el usuario a
// agregado al campo de texto y marcarlo en negrita en el párrafo.

const texto = document.getElementById('texto');
const input = document.getElementById('input');
const buscar = document.getElementById('buscar');

buscar.addEventListener("click", e => {
  e.preventDefault();
  let parrafos = texto.innerHTML; 
  const valorSearch = input.value;
  if(!valorSearch) return;
 parrafos = parrafos.replaceAll(valorSearch, `<strong>${valorSearch}</strong>`);
  texto.innerHTML = parrafos;
});
