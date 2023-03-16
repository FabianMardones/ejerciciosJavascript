// A partir de el siguiente array de edades nos solicitan realizar lo siguiente:


const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];


// Obtener en un nuevo array las edades menores a 18.

function menores18(arrayEdades){
    let edadMenor = []
    for (let i = 0; i < arrayEdades.length; i++) {
        if(arrayEdades[i] < 18){
            edadMenor.push(arrayEdades[i])
        }
    }
    return edadMenor
}
console.log(menores18(edades))

// Obtener en un nuevo array las edades mayor o igual a 18.

function mayorOIgual(arrayEdades){
    let edadMayorOIgual = []
    for (let i = 0; i < arrayEdades.length; i++) {
        if(arrayEdades[i] >= 18){
            edadMayorOIgual.push(arrayEdades[i])
        }
    }
    return edadMayorOIgual
}
console.log(mayorOIgual(edades))

// Obtener en un nuevo array las edades igual a 18.

function mayorOIgual(arrayEdades){
    let Igual = []
    for (let i = 0; i < arrayEdades.length; i++) {
        if(arrayEdades[i] == 18){
            Igual.push(arrayEdades[i])
        }
    }
    return Igual
}
console.log(mayorOIgual(edades))

// Obtener el menor.

function elMenor(arrayEdades){
    let numeroMenor = arrayEdades[0]
    for (let i = 0; i < arrayEdades.length; i++) {
        let edad = arrayEdades[i]
        if(edad < numeroMenor){
            numeroMenor = edad
        }
    }
    return numeroMenor
}
console.log(elMenor(edades))


// Obtener el mayor. 

function elMayor(arrayEdades){
    let numeroMayor = arrayEdades[0]
    for (let i = 0; i < arrayEdades.length; i++) {
        let edad = arrayEdades[i]
        if(edad > numeroMayor){
            numeroMayor = edad
        }
    }
    return numeroMayor
}
console.log(elMayor(edades))

// Obtener el promedio de edades.

function promedio(arrayEdades){
    let sumar = 0
    for (let i = 0; i < arrayEdades.length; i++) {
        sumar = sumar + arrayEdades[i]
    }
    return sumar / arrayEdades.length
}
console.log(promedio(edades))


// Incrementar en 1 todas las edades.


function incrementar(arrayEdades){
    for (let i = 0; i < arrayEdades.length; i++) {
        arrayEdades[i] = arrayEdades[i] + 1
    }
}
incrementar(edades)
console.log(edades)
