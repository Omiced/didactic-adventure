// Implementar scroll infinito en la página:

const contenedor = document.getElementById('contenedor');
const liEl = ` <li></li>`;

document.addEventListener("scroll", (e)=>{
  e.preventDefault();
const documentHeight = window.innerHeight;
const contenedorHeight = contenedor.offsetHeight;
  if(documentHeight + scrollY > contenedorHeight){
    contenedor.insertAdjacentHTML("beforeend", liEl);
  }
});
