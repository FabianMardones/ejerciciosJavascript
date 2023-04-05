// Ejercicio 1
// Dado él siguiente array 


let arrayDeNumeros = [1,2,3, 8, 9, 104, 5, 6, 7, 15];


// Crear una función que reciba como parámetros el array la misma deberá retornar un objeto literal con dos propiedades
// {
// 	    pares: // array de pares
//  	impares: // array de impares
// }


function arrayParesImpares(array){
    let par = []
    let impar = []
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0){
            par.push(array[i])
        }
        else if(array[i] % 2 !== 0){
            impar.push(array[i])
        }
    }
    return {par:par,
            impar:impar}
}
console.log('1.- El objeto literal como restultado del "arrayDeNumeros" obtenido de la funcion arrayParesImpares es:')
console.log('')
console.log(arrayParesImpares(arrayDeNumeros))
console.log('')
console.log('-----------------------------------------------------')

// Ejercicio 2
// Dado él siguiente array de paises

let paises = [
    {
        nombre: "Argentina",
        continente: "Sudamérica",
        poblacion: 40000
    },
    {
        nombre: "Colombia",
        continente: "Sudamérica",
        poblacion: 50372
    },

    {
        nombre: "Brasil",
        continente: "Sudamérica",
        poblacion: 300000
    },
    {
        nombre: "Etiopía",
        continente: "África",
        poblacion: 15000
    },
    {
        nombre: "Chile",
        continente: "Sudamérica",
        poblacion: 10000
    }
];
// console.table(paises)

// Crear una función llamada bubbleSort que reciba como parámetros el array de países, 
// deberá realizar un ordenamiento ascendente según la población, es decir, de menor a mayor	
// Para analizar el correcto funcionamiento imprimir por consola el array antes y después de ejecutar la función. 

function bubbleSort(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j].poblacion > array[j + 1].poblacion){
                let aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            }
        }
    }
}
console.log('')
console.log('2.- El restulado del ordenamiento descendente según su población del array de objetos llamado: "paises" obtenido de la funcion bubbleSort es:')
console.log('')
bubbleSort(paises)
console.table(paises)
console.log('')
console.log('-----------------------------------------------------')

// Ejercicio 3
// Dada la matriz 

let matriz = [
    [5, 2, 2], // 0
    [2, 5, 2], // 1
    [4, 4, 5]  // 2
];

// A. Crear una función que reciba la matriz por parámetro, 
// multiplique todos los valores de primer diagonal  y retorne él valor.


function multiplicarPrimerDiagonal(matriz){
    let acc = 1
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if(matriz[i] == matriz[j]){
                acc = acc * matriz[i][j]
            }
        }
    }
    return acc
}
console.log('')
console.log('3.A El resultado de la multiplicacion de la primera diagonal de la "matriz" en la función multiplicarPrimerDiagonal es :')
console.log('')
console.log(multiplicarPrimerDiagonal(matriz))
console.log('')
console.log('-----------------------------------------------------')

// B. Crear una función que reciba la matriz generada por parámetro
//  y retorne un nuevo array con todos los valores impares de la matriz.

function matrizImpar(matriz){
    let impar = []
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if(matriz[i][j] % 2 !== 0){
                impar.push(matriz[i][j])
            }
        }
    }
    return impar
}
console.log('')
console.log('3.B El array retornado de la matriz, en la función matrizImpar es:')
console.log('')
console.log(matrizImpar(matriz))
console.log('')
console.log('-----------------------------------------------------')
