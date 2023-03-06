// 1) Crear una función que pida un valor por parámetro y muestre los 10
// números siguientes.


function elNumeroQueSigue (n){
    for (let i = 1 ; i <= 10 ; i++){
        console.log(n + i)
    }
}
elNumeroQueSigue(5)

// 2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.

function saltandoDeTres(){
    for (let i = 5 ; i <= 20; i = i + 3){
        console.log (i)
    }
}
saltandoDeTres(5)

// 3) Escribir un programa que muestre la sumatoria de todos los números
// entre el 0 y el 100

function sumatoria(){
        let pepito = 0
    for (let i = 0 ; i <= 100 ; i++){
        pepito = pepito + i
    }
    return pepito
}
console.log(sumatoria())