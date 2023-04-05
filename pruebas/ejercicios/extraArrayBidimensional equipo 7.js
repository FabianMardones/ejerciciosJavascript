/* 
Dejo algunos ejercicios extras de array bidimensional
Cualquier consulta me etiquetan 🧉
*/

let matriz = [
    [14, 11, 15],   // indices --> 0
    [24, 34, 22],  // indices --> 1
    [33, 30, 21]  // indices --> 2
]


/* 
1 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos pares
*/


function pares(matriz){
    let par = []
    for (let i = 0; i < matriz.length; i++) {
        let arrayFila = matriz[i];
        
        for (let j = 0; j < arrayFila.length; j++) {
            let numeroPar = arrayFila[j];
            if(numeroPar % 2 == 0){
                par.push(numeroPar)
            }
        }
    }
    return par
}

console.log(pares(matriz))


/* 
2 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos impares
*/

function impar(matriz){
    let impar = []
    for (let i = 0; i < matriz.length; i++) {
        let arrayFila = matriz[i];
        
        for (let j = 0; j < arrayFila.length; j++) {
            let numeroImpar = arrayFila[j];
            if(numeroImpar % 2 != 0){
                impar.push(numeroImpar)
            }
            
        }
    }
    return impar
}

console.log(impar(matriz))


/* 
3 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos mayor a 20
*/

function Mayor(matriz){
    let nroMayor = []
    for (let i = 0; i < matriz.length; i++) {
        let arrayFila = matriz[i];
        for (let j = 0; j < arrayFila.length; j++) {
            let numeroMayor = arrayFila[j];
            if(numeroMayor > 20){
                nroMayor.push(numeroMayor)
            }
        }
    }
    return nroMayor
}

console.log(Mayor(matriz))
/* 
4 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos de la primer diagonal
*/

function primeraDiagonal(matriz){
    let primer= []
    for (let i = 0; i < matriz.length; i++) {
        let arrayInicial = matriz[i];
        
        for (let j = 0; j < arrayInicial.length; j++) {
            let diagBuscado = arrayInicial[j];
            if ([1],[1],[1]){
                primer.push(diagBuscado)
            }
        }
    }
    return primer
}

console.log(primeraDiagonal(matriz))