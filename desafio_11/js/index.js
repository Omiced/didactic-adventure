
function generarNumeroAleatorio(max) {
    return Math.floor(Math.random() * max);
}

function generarMatriz(tamano) {
    const matrix = [];
    for (let a = 0; a < tamano; a++) {
        const hijo = [];
        for (let b = 0; b < tamano; b++) {
            hijo.push(generarNumeroAleatorio(2));
        }
        matrix.push(hijo);
    }
    return matrix;
}

// Determinar si el usuario ha ganado el juego cuando 
// la matriz tiene una fila o columna donde todos los elementos son iguales.

const TAMANO_TABLERO = 4;
const matriz = generarMatriz(TAMANO_TABLERO);
console.log(matriz);

const filasCheck =(arr) => arr.every((num) => num ==  arr[0]);

const finalCheck =  (arr) => {
   let mensaje = "";
   for(let f = 0; f < TAMANO_TABLERO; f++){
     console.log(filasCheck(arr[f])); 
     if(filasCheck(arr[f])){
      
        mensaje = "ganaste";
        break;
      }

    }
   if(mensaje) return mensaje; 
   for(let c = 0; c  < TAMANO_TABLERO; c++){
    const columna = arr.map(el => el[c]);
     console.log(columna);
    if(filasCheck(columna)){
      mensaje = "ganaste"
      break;
    };
   }
  console.log(mensaje);
  return mensaje ? mensaje: "Perdiste f";


};
console.log(finalCheck(matriz));
