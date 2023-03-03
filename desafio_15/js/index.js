
// Validar que el número de teléfono tenga el formato correcto:
// XXXX-XX-XX

const input = document.getElementById('input');
const buscar = document.getElementById('buscar');
const resultado = document.getElementById('resultado');

buscar.addEventListener('click', ()=> {
    const valor = input.value;
    const regexFon = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
    if(!valor) return; 
    if(!regexFon.test(valor)){
      resultado.textContent = "Formato invalido"
      return;
    };
    resultado.textContent = "Todo chido";

});

