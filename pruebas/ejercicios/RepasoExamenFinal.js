// Programación Imperativa
// Ejercitación de algoritmos
// Esta mesa de trabajo tiene ejercicios bastante complejos, les recomendamos
// fuertemente charlar con sus compañeros de mesa para poder resolverlos entre todos,
// ya que requiere mucho pensamiento lógico. En ese sentido, es normal sentir
// frustración, por lo que sus compañeros y buscar en internet serán sus mejores
// aliados.



// 1) Escribir un programa que muestre en pantalla los números del 1 al 100,
// sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
// “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—, por la palabra “fizzbuzz”.


function fizzBuzz(){
    let array = []
    for (let i = 1; i <= 100; i++) {
        array.push(i)
        for (let j = 0; j < array.length; j++) {
            if(array[j] % 15 == 0){
                array[j] = 'fizzbuzz'
            }
            else if(array[j] % 5 == 0){
                array[j] = 'buzz'
            }
            else if(array[j] % 3 == 0){
                array[j] = 'fizz'
            }
        }
    }
    return array
}
console.table(fizzBuzz())


// 2) Escriban una función que reciba dos parámetros: un array y un índice. La
// función deberá de mostrar por consola el valor del elemento según el
// índice dado. Por ejemplo, dada la siguiente array e índice, la función
// imprimirá '6'. 
let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 1;

function indice(array, index){
    console.log(array[index])
}
indice(array, index)


// 3) Escribir una función que, dado un número de mes, devuelva la cantidad
// de días de ese mes —suponiendo que no es un año bisiesto—.

function diasDelMes(mes){
    let dias = 0
    if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
        dias = (31 + ' Días tiene este mes!')
    }
    else if (mes == 2){
        dias = (28 + ' Días tiene este mes! y si es año bisciesto tiene uno mas :D')  
    }
    else if (mes == 4 || mes == 6 || mes == 9){
        dias = (30 +  ' Días tiene este mes!, por lo general es un poco más frío')
    }
    else {
        console.log('Este no es un numero de mes válido, recuerda que existen sólo : [12 meses] en el año, no sea nerf')
    }
    return dias
}
console.log(diasDelMes(13))

// 4) Escribir una función de JavaScript que invierta un número. Por ejemplo,
// si x = 32443, la salida debería ser 34423.

function alverre(numero){
    let numeroAlVerre = numero.toString().split('').reverse().join('')
    return numeroAlVerre
}
console.log(alverre(123456789))

// 5) Escribir una función que reciba una array y solo imprima los valores que
// se repiten. Por ejemplo, dada la siguiente array e índice, la función
// imprimirá '6,23,33,100'. 

let arrayNumeros = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

function numerosIguales(array){
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if(array.includes(array[i], i + 1)){
            newArray.push(array[i])
        }
    }
    return newArray
}
console.log(numerosIguales(arrayNumeros))


// Vamos a practicar el uso de matrices y, de paso, los ciclos FOR.
// 1) Seguir las instrucciones en este sandbox, para escribir y sumar los valores dentro
// de una matriz.

// 2) Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
// números. La matriz debe verse así:
// 1 2 3 4 5 6 7 8 9 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// 51 52 53 54 55 56 57 58 59 60
// 61 62 63 64 65 66 67 68 69 70
// 71 72 73 74 75 76 77 78 79 80
// 81 82 83 84 85 86 87 88 89 90
// 91 92 93 94 95 96 97 98 99 100


function generadorMatriz(filas, columnas){
    let matriz = []
    let acc = 1
    for (let i = 0; i < filas; i++) {
        matriz.push([])
        for (let j = 0; j < columnas; j++) {
            matriz[i].push(acc)
            acc++
        }
    }
    return matriz
}
// console.table(generadorMatriz(10,10))

let matriz1 = generadorMatriz(10, 10)
console.table(matriz1)

// 3) Por último, vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal marcada en rojo.

function sumarPrimeraDiagonal(matriz){
    let suma = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if(matriz[i] == matriz[j])
            suma = suma + matriz[i][j]
        }
    }
    return suma
}
console.log(sumarPrimeraDiagonal(matriz1))
// b) La otra va a marcar los valores de la diagonal marcada en verde.
// Ambas funciones deben devolver un resultado único.


function sumarSegundaDiagonal(matriz){
    let suma = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if(i + j === 9){
                suma = suma + matriz[i][j]
            }
        }
    }
    return suma
}
console.log(sumarSegundaDiagonal(matriz1))

// Rojo: 505
// Verde 505
// Trabajar en el mismo sandbox del ejercicio 2.

/* 
Dejo algunos ejercicios extras de array bidimensional
Cualquier consulta me etiquetan 🧉
*/

/* 
1 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos pares
*/


function paresMatriz(matriz){
    let pares = []
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if(matriz[i][j] % 2 == 0){
                pares.push(matriz[i][j])
            }
        }
    }
    return pares
}
console.log(paresMatriz(matriz1))
/* 
2 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos impares
*/

function imparMatriz(matriz){
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
console.log(imparMatriz(matriz1))

/* 
3 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos mayor a 20
*/

function mayorA(matriz, nro){
    let mayorA = []
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if(matriz[i][j] > nro){
                mayorA.push(matriz[i][j])
            }
        }
    }
    return mayorA
}
console.log(mayorA(matriz1, 20))
/* 
4 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos de la primer diagonal
*/


function primeraDiagonal(array){
    let primerDiagonal = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[i] == array[j]){
                primerDiagonal.push(array[i][j])
            }
        }
    }
    return primerDiagonal
}
console.log(primeraDiagonal(matriz1))

// 5 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
// * debe retornar un array con los elementos de la segunda diagonal
// */

function segundaDiagonal(array){
    let diagonal= []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(i + j === 9){
                diagonal.push(array[i][j])
            }
        }
    }
    return diagonal
}
console.log(segundaDiagonal(matriz1))


const edades = [33, 27, 34, 30, 34, 25];

// a. Desarrollar una función que ordene internamente de forma ascendente las
// edades, la misma deberá retornar él array ordenado , es decir deberíamos
// obtener resultado como él siguiente.
// [25, 27, 30, 33, 34, 34]

function ordernarArrayAscendente(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j] > array[j + 1]){
                let aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            }
        }
    }
}
ordernarArrayAscendente(edades)
console.log(edades)

// b. Desarrollar una función que ordene internamente de forma descendente
// las edades, la misma deberá retornar él array ordenado , es decir
// deberíamos obtener resultado como él siguiente.
// [34, 34, 33, 30, 27, 25]


function ordenarArrayDescendente(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j] < array[j + 1]){
                let aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            }
        }
    }
}
ordenarArrayDescendente(edades)
console.log(edades)

// 2. Dado un array de strings:
// const letras = [“C”, “A”, “D”, “E”, “H”, “Z”, “J”, “L”]
// ¿Cómo pudieras ordenar el array anterior, alfabéticamente?

const letras = ['C', 'A', 'D', 'E', 'H', 'Z', 'J', 'L']

function arrayLetras(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j] > array[j + 1]){
                let aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            }
        }
    }
}
arrayLetras(letras)
console.log(letras)

// 3. A partir del siguiente array de Objetos Literales se solicita realizar lo siguiente:

const arrayCuentas =
[
{
titular: "Arlene Barr",
estaHabilitada: false,
saldo: 3253.40,
edadTitular: 33,
tipoCuenta: "sueldo"
},
{
titular: "Roslyn Torres",
estaHabilitada: false,
saldo: 3229.45,
edadTitular: 27,
tipoCuenta: "sueldo"
},
{
titular: "Cleo Lopez",
estaHabilitada: true,
saldo: 1360.19,
edadTitular: 34,
tipoCuenta: "corriente"
},
{
titular: "Daniel Malone",
estaHabilitada: false,
saldo: 3627.12,
edadTitular: 30,
tipoCuenta: "sueldo"
},
{
titular: "Ethel Leon",
estaHabilitada: true,
saldo: 1616.52,
edadTitular: 34,
tipoCuenta: "sueldo"
},
{
titular: "Harding Mitchell",
estaHabilitada: true,
saldo: 1408.68,
edadTitular: 25,
tipoCuenta: "corriente"
}
]

// a. Desarrollar una función que ordene internamente de forma ascendente según él
// saldo de cada cuenta, la misma deberá retornar él array ordenado .

function ordenarArrayObjetosAscendente(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j].saldo > array[j + 1].saldo){
                let aux = array[j]
                array[j] = array [j + 1]
                array[j + 1] = aux
            }
        }
    }
}
ordenarArrayObjetosAscendente(arrayCuentas)
console.log(arrayCuentas)

// b. Desarrollar una función que ordene internamente de forma ascendente según la
// edad del titular de cada cuenta, la misma deberá retornar él array ordenado.

function ordenarEdadesArrayObjetos(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j].edadTitular > array[j + 1].edadTitular){
                let aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            }
        }
    }
}
ordenarEdadesArrayObjetos(arrayCuentas)
console.log(arrayCuentas)

// Ejercicio 1
// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
// likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
// los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
// obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
// que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.


let arrayLikes = [
{user: 1, nombre: "A", Likes: 50 },
{user: 2, nombre: "B", Likes: 100 },
{ user: 3, nombre: "C", Likes: 200 },
{ user: 4, nombre: "D", Likes: 130 },
{ user: 5, nombre: "E", Likes: 500 },
{ user: 6, nombre: "F", Likes: 800},
{ user: 7, nombre: "G", Likes: 20 },
{ user: 8, nombre: "H", Likes: 10 },
{ user: 9, nombre: "I", Likes: 50 },
{ user: 10, nombre: "J", Likes: 50 },
{ user: 11, nombre: "K", Likes: 50},
{ user: 12, nombre: "L", Likes: 150 },
{ user: 13, nombre: "M", Likes: 80 },
{ user: 14, nombre: "N", Likes: 1000 },
{ user: 15, nombre: "Ñ", Likes: 1 },
]

function cantidadDeLikes(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j].Likes < array[j + 1].Likes){
                let aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            }
        }
    }
}
cantidadDeLikes(arrayLikes)
console.log(arrayLikes)


// Ejercicio 2
// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
// objeto temperatura donde registra día —valor numérico del día—, mes —valor
// numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
// día. Las temperaturas —objeto temperatura— están cargados en un array.
// a) Ordenar por temperatura mínima de menor a mayor.
// b) Ordenar por temperatura máxima de mayor a menor.


const arrayTemperatura = [
    {dia: 1, mes: 1, maxima: 35, minima: 20},
    {dia: 15, mes: 5, maxima: 20, minima: 10},
    {dia: 30, mes: 3, maxima: 28, minima: 15},
    {dia: 31, mes: 8, maxima: 16, minima: -1},
    {dia: 8, mes: 4, maxima: 30, minima: 20},
    {dia: 5, mes: 2, maxima: 30, minima: 20},
    {dia: 17, mes: 11, maxima: 30, minima: 20},
    {dia: 23, mes: 9, maxima: 30, minima: 20},
    {dia: 27, mes: 10, maxima: 30, minima: 20},
    {dia: 29, mes: 12, maxima: 30, minima: 20},
    {dia: 18, mes: 6, maxima: 12, minima: 0},
    {dia: 7, mes: 7, maxima: 10, minima: -5},
]


function temperaturaMinima(arrayObjeto){
    for (let i = 0; i < arrayObjeto.length; i++) {
        for (let j = 0; j < arrayObjeto.length - 1; j++) {
            if(arrayObjeto[j].minima > arrayObjeto[j + 1].minima){
                let aux = arrayObjeto[j]
                arrayObjeto[j] = arrayObjeto[j + 1]
                arrayObjeto[j + 1] = aux
            }
        }
    }
}
temperaturaMinima(arrayTemperatura)
console.log(arrayTemperatura)


function temperaturaMaxima(arrayObjeto){
    for (let i = 0; i < arrayObjeto.length; i++) {
        for (let j = 0; j < arrayObjeto.length - 1; j++) {
            if (arrayObjeto[j].maxima < arrayObjeto[j + 1].maxima) {
                let aux = arrayObjeto[j]
                arrayObjeto[j] = arrayObjeto[j + 1]
                arrayObjeto[j + 1] = aux
            }
        }
    }
}
temperaturaMaxima(arrayTemperatura)
console.log(arrayTemperatura)

// Acceder a los objetos del array


// class Usuario {
//     constructor(nombre, like) {
//         this.nombre = nombre;
//         this.like = like;
//     }
// }
// const usuarios = [];

// const nombres = ["Daniela", "León", "Fabián", "Molly", "Mario", "Patricia", "Luis", "Luz" ,"Jenny", "kita", "pato", "nacho", "Cristian", "Jesus", "Mateo"];
// const arraylikes = [18, 21, 25, 30, 35, 40, 45, 50];

// for (let i = 0; i < nombres.length; i++) {
//     const nombre = nombres[Math.floor(Math.random() * nombres.length)];
//     const like = arraylikes[Math.floor(Math.random() * arraylikes.length)];
//     const usuario = new Usuario(nombre, like);
//     usuarios.push(usuario);
// }

// console.log(usuarios);

let personas = [
    {
      nombre: "Dua",
      apellido: "Lipa",
      ocupacion: "cantante",
      estatura: 173
    },
    {
      nombre: "Ariana",
      apellido: "Grande",
      ocupacion: "cantante",
      estatura: 160
    },
    {
      nombre: "Taylor",
      apellido: "Swift",
      ocupacion: "cantante",
      estatura: 180
    }
  ];
  
  function ordernaArray(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j].estatura > array[j + 1].estatura) {
          let aux = array[j];
          array[j] = array[j + 1];
          array[j + 1] = aux;
        }
      }
      }
      return array
  }
  console.log(ordernaArray(personas))


