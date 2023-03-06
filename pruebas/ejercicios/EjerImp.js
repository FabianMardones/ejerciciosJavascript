// Dejo Desafío para quien quiera practicar, Martín                                                                                                                                                                                                                                                                           - En caso de resolverlo sin problemas reaccionar con :white_check_mark: ,                                                                                                                                                                                                                        - Caso  contrario,  consultar en este canal la duda acompañada con algo  código, *`Buen código`*```js

// A - Nivel 1

// 1 - Desarrollar una función que reciba 2 numeros y retorne la suma de ambos




// function dosNumeros (a, b){
//     return a + b
// }
// console.log(dosNumeros(5,7))

// let dosNumeros = (a, b) => (a + b);
// console.log(dosNumeros(7,8))






// 2 - Desarrollar una función que reciba 2 numeros y 
//      retorne la suma de ambos, si el primer parametro es mayor, 
//      caso contrario retornar la resta.






// function sumaOResta (a, b){
//     if (a > b){
//         return a + b
//     }
//     else {
//         return a - b
//     }
// }
// console.log(sumaOResta(5,7))


// let sumaOresta = (a, b) => (a > b) ? a + b : a - b;
// console.log(sumaOresta(7,5))







// 3 - Desarrollar una función que reciba 4 numeros y calcular la suma de total
//      si el el resultado es mayor o igual a 7, retornar 'Aprobado', 
//      caso contrario retornar 'otra chance '.





// function cuatroNumeros (a, b, c, d){
//     let suma = (a + b + c + d) /4
//     console.log('Su resultado es ' + suma)
//     if (suma >= 7){
//         return 'Aprobado :D'
//     }
//     else {
//         return 'otra chance :('
//     }
// }
// console.log(cuatroNumeros(7,7,7,7))





// 4 - Desarrollar una función que reciba 4 numeros y calcular la suma de total
//      si el el resultado es par, retornar la mitad del total,  
//      caso contrario retornar el doble del total.


// function mitadODoble (a, b, c, d){
//     let suma = (a + b + c + d)
//     if (suma % 2 === 0){
//         return suma / 2
//     }
//     else {
//         return suma * 2
//     }
// }
// console.log(mitadODoble(2,2,2,2))
// console.log(mitadODoble(7,7,7,6))