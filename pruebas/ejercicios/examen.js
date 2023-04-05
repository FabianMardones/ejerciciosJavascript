// // Ejercicio 1: 
// // Realizar una función que reciba por parámetro dos valores numéricos. 
// // Si ambos números recibidos son mayor que 7  deberá retornar true
// // Si ambos números recibidos son mayor a 0 y menor o igual a 7 deberá retornar false


// function numeroMayorA7(a, b){
//     if(a > 7 && b > 7) {
//         return true
//     }
//     else if(a > 0 && b <= 7){
//         return false
//     }
// }
// console.log(numeroMayorA7(7,6))



// // Ejercicio 2:
// // Desarrollar una función llamada filtrarNumeros que reciba dos parámetros, un array de numeros [2,3,4,5,6,7,1] por ejemplo y un string
// // si él string es ‘par’ indica que se debe retornar un array con los numeros pares
// // si él string es ‘impar’ indica que se debe retornar un array con los numeros impares
// // console.log(filtrarNumeros(arrayNumeros, 'par')) // [2, 4, 6]
// // console.log(filtrarNumeros(arrayNumeros, 'impar')) // [3, 5, 7, 1]


let numeros = [2,3,4,5,6,7,1]
numeros.filter( function(num) {
    return num % 2 == 0;
})

function filtrarNumeros(array, string){
    let par = []
    let impar = []
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0 && string == "par"){
            par.push(array[i])
        }
        else if(array[i] % 2 !== 0 && string == "impar"){
            impar.push(array[i])
        }
    }
    return par + impar
}
console.log(filtrarNumeros(numeros, "par"))





// const series = [
//     {
//         title: "Stranger Things",
//         genre: "Sci-Fi, Horror, Drama",
//         year: 2016,
//         rating: 8
//     },
//     {
//         title: "The Crown",
//         genre: "Drama, History",
//         year: 2016,
//         rating: 8
//     },
//     {
//         title: "Narcos",
//         genre: "Crime, Drama",
//         year: 2015,
//         rating: 9
//     },
//     {
//         title: "Breaking Bad",
//         genre: "Crime, Drama, Thriller",
//         year: 2008,
//         rating: 10
//     }
// ];


// // //  Realizar una función que reciba por parámetro el array de series, 
// // y  un valor numérico que represente él rating mínimo , deberá retornar
// // un nuevo array con las series que cumpla con la condición de que cada 
// // rating de la serie sea mayor o igual al recibido  parámetro
// // console.log(filtrarSeries(series, 8)) // 

// function filtrarSeries(arraySeries, numero){
//     let nuevoRating = []
//     for (let i = 0; i < arraySeries.length; i++) {
//         if(arraySeries[i].rating >= numero){
//             nuevoRating.push(arraySeries[i])
//         }
//     }
//     return nuevoRating
// }
// console.log(filtrarSeries(series, 8))


// var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

// function logDairy() {
//     for (var test of dairy) {
//         console.log(test)
//     }
// }
// logDairy()