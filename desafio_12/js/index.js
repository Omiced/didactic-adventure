
// Buscar elemento dentro del DOM utilizando recursión.

const elemento = 'Elemento10';
let encontrado = false;
const body = document.querySelector("body");
const buscarElmento = (root) => {
  if(root.innerHTML === elemento || root.innerText === elemento){
    encontrado = true;
    return; 
  }

  if(root.children && root.children.length === 0) return;

  for (const hijo  of root.children) {
    buscarElmento(hijo)
  }
}

buscarElmento(body);
console.log(encontrado);
