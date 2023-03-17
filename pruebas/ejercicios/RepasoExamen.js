// // Dejo Desafío para quien quiera practicar, Martín                                                                                                                                                                                                                                                                           - En caso de resolverlo sin problemas reaccionar con :white_check_mark: ,                                                                                                                                                                                                                        - Caso  contrario,  consultar en este canal la duda acompañada con algo  código, *`Buen código`*```js

// // A - Nivel 1

// // 1 - Desarrollar una función que reciba 2 numeros y retorne la suma de ambos

// // let suma = (a, b) => a + b
// // console.log(suma(5,7))

// // 2 - Desarrollar una función que reciba 2 numeros y 
// //      retorne la suma de ambos, si el primer parametro es mayor, 
// //      caso contrario retornar la resta.

// // let sumaCondicional = (a, b) => a > b ? a + b : a - b;
// // console.log(sumaCondicional(7,10))


// // 3 - Desarrollar una función que reciba 4 numeros y calcular la suma de total
// //      si el el resultado es mayor o igual a 7, retornar 'Aprobado', 
// //      caso contrario retornar 'otra chance '.

// // function cuatroNumeros(a,b,c,d){
// //     let suma = (a + b + c + d)/4
// //     if(suma >= 7){
// //         return 'Aprobado'
// //     }
// //     else {
// //         return 'Otra chance'
// //     }
// // }
// // console.log(cuatroNumeros(7,7,7,7))


// // 4 - Desarrollar una función que reciba 4 numeros y calcular la suma de total
// //      si el el resultado es par, retornar la mitad del total,  
// //      caso contrario retornar el doble del total.


// // function dividirMultiplicar(a, b, c, d){
// //     let suma = a + b + c + d
// //     if(suma % 2 == 0){
// //         return suma / 2
// //     }
// //     else{
// //         return suma * 2
// //     }
// // }
// // console.log(dividirMultiplicar(7,7,7,8))


// // B  Nivel 2
// // - Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] , luego desarrollar las siguientes funciones:

// // 1 - Funcion que reciba un array de edades y retorne el promedio 

// let edades = [30, 9, 8, 29, 50, 80, 5, 63, 29, 9]
// let edades1 = [1, 9, 18, 22, 55, 150, 25, 36, 21, 9]
// let edades2 = [1, 9, 8, 22, 55, 70, 15, 63, 29, 1]

// function promedio(array){
//     let suma = 0
//     for (let i = 0; i < array.length; i++) {
//         suma = suma + array[i]
//     }
//     return suma / array.length
// }
// console.log(promedio(edades))
// console.log(promedio(edades1))
// console.log(promedio(edades2))

// // 2 - Funcion que reciba un array de edades y retorne el mayor elemento // 80

// function mayorElemento(array){
//     let inicio = array[0]
//     for (let i = 0; i < array.length; i++) {
//         let edad = array[i]
//         if(edad > inicio){
//             inicio = edad
//         }
//     }
//     return inicio
// }
// console.log(mayorElemento(edades))
// console.log(mayorElemento(edades1))
// console.log(mayorElemento(edades2))

// // 3 - Funcion que reciba un array de edades y retorne el menor elemento // 5

// function menorElemento (array){
//     let inicio = array[0]
//     for (let i = 0; i < array.length; i++) {
//         let edad = array[i]
//         if(edad < inicio){
//             inicio = edad
//         }
//     }
//     return inicio
// }
// console.log(menorElemento(edades))
// console.log(menorElemento(edades1))
// console.log(menorElemento(edades2))


// // 4 - Funcion que reciba un array de edades y retorne true si encuentra algun elemento repetido o false caso contrario

// function elementoRepetido (array){
//     let inicio = array[0]
//     for (let i = 0; i < array.length; i++) {
//         if(inicio === array[i]){
//             return true
//         }
//         else{
//             return false
//         }
//     }
// }
// console.log(elementoRepetido(edades))
// console.log(elementoRepetido(edades1))
// console.log(elementoRepetido(edades2))


// // 5 - Funcion que reciba un array de edades y una edada buscar, retorne el primer índice si encuentra coincidencia o null caso contrario

// function coincidencia(array, edad){
//     for (let i = 0; i < array.length; i++) {
//         if(edad === array[i]){
//             return i
//         }
//         else{
//             return 'null'
//         }
//     }
// }
// console.log(coincidencia(edades, 30))
// console.log(coincidencia(edades1, 5))
// console.log(coincidencia(edades2, 15))

// // 6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array
// //    {
// //       edadesMenor : "// edades menor a 18",  
// //       edadesMayor : "// edades menor a 18"
// //    }


// function objLiteral(array){
//     let edadesMenor = []
//     let edadesMayor = []
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] < 18){
//             edadesMenor.push(array[i])
//         }
//         else{
//             edadesMayor.push(array[i])
//         }
//     }
//     return {edadesMenor, edadesMayor}
// }
// console.log(objLiteral(edades))
// console.log(objLiteral(edades1))
// console.log(objLiteral(edades2))

// console.table(objLiteral(edades))
// console.table(objLiteral(edades1))
// console.table(objLiteral(edades2))

// C  Nivel 3

// 1 - Desarrollar un objeto literal que contenga 5 propiedades que sean del siguiente tipo:
//    - 2 String   
//    - 1 Boolean
//    - 1 Number
//    - 1 Array
//    - 1 Metodo que retorne un saludito
//     * por ejemplo:
    
// let misDatos =
//     {
//     nombre : 'Fabian',
//     musica  : 'baladas',
//     estaVacunado : true,
//     edad : 28,
//     comunas : ['La Pintana', 'Quinta Normal', 'Puente Alto'],
//     saludo: function(){
//         return 'Hola Hi Hows it going?..'
//      } 
//     }
// - Luego desarrollar una funcion que liste individualmente los elementos de la propiedad del tipo Array 

// function consultarDato(array){
//     for (let i = 0; i < array.comunas.length; i++) {
//         console.log(array.comunas[i])
//     }
// }
// consultarDato(misDatos)


// let datoPersonas = [
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
//     "id": 6,
//     "isProgrammer": false,
//     "age": 29,
//     "name": "Natalia Huff",
//     "company": "ENERSOL",
//     "favoriteFruit": "apple"
//     }
// ]
// 2 - Dado el Siguiente array de personas desarrollar funciones:
//   - Funcion que reciba el array de personas y liste el nombre de cada una. 

// function listarNombres(array){
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i].name)
//     }
// }
// listarNombres(datoPersonas)

//   - Funcion que reciba el array de personas y retorne en un array los que son programadores.

// function sonProgramadores(array){
//     let program = []
//     for (let i = 0; i < array.length; i++) {
//         if(array[i].isProgrammer === true){
//             program.push(array[i])
//         }
//     }
//     return program
// }
// console.table(sonProgramadores(datoPersonas))

//   - Funcion que reciba el array de personas y un id a buscar, 
//        retorne la persona en caso de encontrar, 
//        caso contrario retorne null

// function idPersonas(array, id){
//     for (let i = 0; i < array.length; i++) {
//         if(array[i].id == id){
//             return array[i].name
//         }
//     }
//     return null
// }
// console.log(idPersonas(datoPersonas, 6))



// Tips

// * Es para que practiquen sintaxis ademas del pensamiento computacional, piensen tipo de datos posibles.
// * Desarrollen y lean enunciados en voz alta, utilicen abstracción, vean las alternativas de llegar al mismo resultado de diferentes formas


// nota : Se recomienda utilizar estructuras y conceptos vistos en la materia
