// 1. Loop de pares
// Deberás crear una función llamada loopDePares que reciba como parámetro un número
//  y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
//  En caso de que el número de la iteración sumado con el número pasado por parámetro sea par,
//  mostrará en la consola: “El número X es par”.

// function loopPares(numero){
//     for(let i = 0; i <= 100; i ++){
//         console.log(i)
//         let sumar = i + numero
//         if(sumar % 2 == 0){
//             console.log("El numero " + numero + " + " + i + " = " + sumar + " es par")
//         }
//     }
// }
// loopPares(40)


// 2. Loop de impares con palabra
// Deberás crear una función llamada loopDeImpares que reciba como parámetros un número y una palabra,
// y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
// Luego, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, 
// muestre en la consola la palabra pasada por parámetro.

// function loopDeImpares(numero,palabra){
//     for (let i = 0; i <= 100; i++) {
//         console.log(i)
//         let sumar = i + numero
//         if(sumar % 2 != 0){
//             console.log(numero + " + " + i + " = " + palabra)
//         }
//     }
// }
// loopDeImpares(3, "este si que es impar")

// 3. Sumatoria
// Deberás crear una función llamada sumatoria que reciba un número como parámetro y 
// que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo:

// sumatoria(3) debe retornar 6 porque hace (1+2+3)
// sumatoria(8) debe retornar 36


// function sumatoria(numero){
//     let sumar = 0
//     for(let i = numero; i >= 0; i --){
//         sumar = numero + i
//         console.log(numero + i)
//     }
// }
// sumatoria(28)


// 4. Nuevo arreglo
// Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro
// y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.

// Ejemplo:
// nuevoArreglo(5) debe retornar [1,2,3,4,5]
// nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]

// function nuevoArreglo(numero){
//     let array = []
//     for (let i = 1; i <= numero ; i++) {
//         array.push(i)
//     }
//     return array
// }
// console.table(nuevoArreglo(10))
// console.log(nuevoArreglo(10))

// 5. Similar String.split()
// Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original. 
// Si no estás seguro de cómo funciona, Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
// split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// split(“chau”) debe retornar [“c”,”h”,”a”,”u”]


// function split(string){
//     let array = []
//     for (let i = 0; i < string.length; i++) {
//         array[i] = string[i]
//     }
//     return array
// }
// console.log(split('hola'))
// console.log(split('chau'))
// console.log(split('buendía'))



// 6. Manejando dos arreglos
// Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual largo como parámetros y muestre en la consola 
// “Soy {elemento de array 1} y yo soy {elemento de array 2}”. Ejemplo:
// arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 
// Soy 1 y yo soy h
// Soy 2 y yo soy o
// Soy 3 y yo soy l
// Soy 4 y yo soy a

// function arrayHandler(array1,array2){
//     for (let i = 0; i < array1.length; i++) {
//         console.log("soy " + array1[i] + " y yo soy " + array2[i])
//     }
// }
// arrayHandler([1,2,3,4], ["h","o","l","a"])

// Palíndromo
// Deberás crear una función llamada palindromo que indique si una palabra es palíndroma o no. 
// Debe retornar “true” en caso de que lo sea, y “false” en caso de que no. Ejemplo:
// palindromo(“anilina”) debe retornar true
// palindromo(“Ana”) debe retornar true
// palindromo(“Enrique”) debe retornar false


// function palindrome(string) {
//     let re = /[^A-Za-z0-9]/g;
//     string = string.toLowerCase().replace(re, '');
//     var frase = string.length;
//     for (var i = 0; i < frase/2; i++) {
//     if (string[i] !== string[frase - 1 - i]) {
//         return false;
//     }
//     }
//     return true;
// }
// console.log(palindrome("fabian"))


// function palindromo(palabra){
//     let palabraInversa = palabra.split('').reverse().join(''); 
//     if(palabra === palabraInversa){
//         return true
//     }
//     else{
//         return false
//     }
    
// }
// console.log(palindromo('ana'))


// let personas = [
//     {
//       "id": 0,
//       "isProgrammer": true,
//       "age": 28,
//       "name": "Harrington Curry",
//       "company": "TRANSLINK",
//       "favoriteFruit": "strawberry"
//     },
//     {
//       "id": 1,
//       "isProgrammer": false,
//       "age": 38,
//       "name": "Greta Morton",
//       "company": "PYRAMI",
//       "favoriteFruit": "apple"
//     },
//     {
//       "id": 2,
//       "isProgrammer": false,
//       "age": 32,
//       "name": "Hester Bowen",
//       "company": "TURNABOUT",
//       "favoriteFruit": "apple"
//     },
//     {
//       "id": 3,
//       "isProgrammer": false,
//       "age": 25,
//       "name": "Melendez Mcfarland",
//       "company": "XSPORTS",
//       "favoriteFruit": "strawberry"
//     },
//     {
//       "id": 4,
//       "isProgrammer": false,
//       "age": 31,
//       "name": "Kimberly Matthews",
//       "company": "KNOWLYSIS",
//       "favoriteFruit": "banana"
//     },
//     {
//       "id": 5,
//       "isProgrammer": false,
//       "age": 36,
//       "name": "Hardin Sims",
//       "company": "SEALOUD",
//       "favoriteFruit": "banana"
//     },
//     {
//       "id": 6,
//       "isProgrammer": false,
//       "age": 29,
//       "name": "Natalia Huff",
//       "company": "ENERSOL",
//       "favoriteFruit": "apple"
//     }
//   ]


  // 2 - Dado el Siguiente array de personas desarrollar funciones:
//   - Funcion que reciba el array de personas y liste el nombre de cada una. 


// function nombres(arrayPersonas){
//     for (let i = 0; i < arrayPersonas.length; i++) {
//         console.log(arrayPersonas[i].age)
//     }
// }
// nombres(personas)


//   - Funcion que reciba el array de personas y retorne en un array los que son programadores.


// function programadores(arrayPersonas){
//     let programers = []
//     for (let i = 0; i < arrayPersonas.length; i++) {
//         if(arrayPersonas[i].isProgrammer == true){
//             return programers.push(personas)
//         }
//     }
// }
// programadores(personas)
// console.log(programadores(personas))

//   - Funcion que reciba el array de personas y un id a buscar, 
//        retorne la persona en caso de encontrar, 
//        caso contrario retorne null

// function buscarPersonas(arrayPersonas, id){
//     for (let i = 0; i < arrayPersonas.length; i++) {
//         if(arrayPersonas[i].id == id){
//             return arrayPersonas[i].name
//         }
//     }
//     return null
// }
// console.log(buscarPersonas(personas, 7))

//Convierte a todos en programadores

// function todosProgramadores(arrayPersonas){
//     for (let i = 0; i < arrayPersonas.length; i++) {
//         if(arrayPersonas[i].isProgrammer == false){
//             return true
//         }
//     }
// }
// console.log(todosProgramadores(personas))


// let numeros = [1, 2, 3, 4, 5, 6]

// // // desarrolle la funcion

// function paresImpares(arrayNumeros){
//     let pares = []
//     let impares = []
//     for (let i = 0; i < arrayNumeros.length; i++) {
//         if(arrayNumeros[i] % 2 == 0){
//             pares.push(arrayNumeros[i])
//         }
//         else{
//             impares.push(arrayNumeros[i])
//         }
//     }
//     return {pares, impares}
// }
// console.log(paresImpares(numeros))


// 6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array
//    {
//       edadesMenor : "// edades menor a 18",  
//       edadesMayor : "// edades menor a 18"
//    }



