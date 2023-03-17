// // A partir de el siguiente array de edades nos solicitan realizar lo siguiente:


// const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];


// // Obtener en un nuevo array las edades menores a 18.

// function menores18(arrayEdades){
//     let edadMenor = []
//     for (let i = 0; i < arrayEdades.length; i++) {
//         if(arrayEdades[i] < 18){
//             edadMenor.push(arrayEdades[i])
//         }
//     }
//     return edadMenor
// }
// console.log(menores18(edades))

// // Obtener en un nuevo array las edades mayor o igual a 18.

// function mayorOIgual(arrayEdades){
//     let edadMayorOIgual = []
//     for (let i = 0; i < arrayEdades.length; i++) {
//         if(arrayEdades[i] >= 18){
//             edadMayorOIgual.push(arrayEdades[i])
//         }
//     }
//     return edadMayorOIgual
// }
// console.log(mayorOIgual(edades))

// // Obtener en un nuevo array las edades igual a 18.

// function mayorOIgual(arrayEdades){
//     let Igual = []
//     for (let i = 0; i < arrayEdades.length; i++) {
//         if(arrayEdades[i] == 18){
//             Igual.push(arrayEdades[i])
//         }
//     }
//     return Igual
// }
// console.log(mayorOIgual(edades))

// // Obtener el menor.

// function elMenor(arrayEdades){
//     let numeroMenor = arrayEdades[0]
//     for (let i = 0; i < arrayEdades.length; i++) {
//         let edad = arrayEdades[i]
//         if(edad < numeroMenor){
//             numeroMenor = edad
//         }
//     }
//     return numeroMenor
// }
// console.log(elMenor(edades))


// // Obtener el mayor. 

// function elMayor(arrayEdades){
//     let numeroMayor = arrayEdades[0]
//     for (let i = 0; i < arrayEdades.length; i++) {
//         let edad = arrayEdades[i]
//         if(edad > numeroMayor){
//             numeroMayor = edad
//         }
//     }
//     return numeroMayor
// }
// console.log(elMayor(edades))

// // Obtener el promedio de edades.

// function promedio(arrayEdades){
//     let sumar = 0
//     for (let i = 0; i < arrayEdades.length; i++) {
//         sumar = sumar + arrayEdades[i]
//     }
//     return sumar / arrayEdades.length
// }
// console.log(promedio(edades))


// // Incrementar en 1 todas las edades.


// function incrementar(arrayEdades){
//     for (let i = 0; i < arrayEdades.length; i++) {
//         arrayEdades[i] = arrayEdades[i] + 1
//     }
// }
// incrementar(edades)
// console.log(edades)




// for (let i = 10; i > 0; i = i - 2){
//     for(let j = 5; j > 3; j = j - 1){
//         console.log(i + " dividio por " + j + " es igual a " + i/j)
//     }
// }






const arrayCuentas =[
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
        estaHabilitada: true,
        saldo: 3627.12,
        edadTitular: 30,
        tipoCuenta: "sueldo"
    },
    {      titular: "Ethel Leon",
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

// Obtener un nuevo array de cuentas cuyas edades sean menores a 30.


function edadMenoresA(arrayCuentas){
    let menoresA30= []
    for (let i = 0; i < arrayCuentas.length; i++) {
        if(arrayCuentas[i].edadTitular < 30){
            menoresA30.push(arrayCuentas[i])
        }
    }
//     return menoresA30
}
console.table(edadMenoresA(arrayCuentas))

// Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.

function edadMOI(arrayCuentas){
    let edadmenorOIgual = []
    for (let i = 0; i < arrayCuentas.length; i++) {
        if(arrayCuentas[i].edadTitular >= 30){
            edadmenorOIgual.push(arrayCuentas[i])
        }
    }
//     return edadmenorOIgual
}
console.table(edadMOI(arrayCuentas))

// Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.

function edadmenorOIgual(arrayCuentas){
    let edad = []
    for (let i = 0; i < arrayCuentas.length; i++) {
        if(arrayCuentas[i].edadTitular <= 30){
            edad.push(arrayCuentas[i])
        }
    }
    return edad
}
console.table(edadmenorOIgual(arrayCuentas))

// Obtener la cuenta con el titular de la misma más joven.

function titularMasJoven(arrayCuentas){
    let inicio = arrayCuentas[0].edadTitular
    let clienteJoven = []
    for (let i = 0; i < arrayCuentas.length; i++) {
        if(inicio > arrayCuentas[i].edadTitular){
            clienteJoven = arrayCuentas[i]
        }
    }
    return clienteJoven
}
console.table(titularMasJoven(arrayCuentas))

// Obtener un array con las cuentas habilitadas.


function cuentasHabilitadas(arrayCuentas){
    let cuentasHab = []
    for (let i = 0; i < arrayCuentas.length; i++) {
        if(arrayCuentas[i].estaHabilitada !== false){
            cuentasHab.push(arrayCuentas[i])
        }
    }
    return cuentasHab
}
console.table(cuentasHabilitadas(arrayCuentas))


// Obtener un array con las cuentas deshabilitadas.

function cuentasDeshabilitadas(arrayCuentas){
    let cuentasDes = []
    for (let i = 0; i < arrayCuentas.length; i++) {
        if(arrayCuentas[i].estaHabilitada !== true){
            cuentasDes.push(arrayCuentas[i])
        }
    }
    return cuentasDes
}
console.table(cuentasDeshabilitadas(arrayCuentas))


// Obtener la cuenta con el menor saldo.

function menorSaldo(arrayCuentas){
    let inicio = arrayCuentas[0].saldo
    let menorSaldoDisponible = []
    for (let i = 0; i < arrayCuentas.length; i++) {
        if(inicio > arrayCuentas[i].saldo){
            inicio = arrayCuentas[i].saldo
            menorSaldoDisponible = arrayCuentas[i]
        }
    }
    return menorSaldoDisponible
}
console.table(menorSaldo(arrayCuentas))


// Obtener la cuenta con el mayor saldo.


function mayorSaldo(arrayCuentas){
    let inicio = arrayCuentas[0].saldo
    let mayorSaldoDisponible = []
    for (let i = 0; i < arrayCuentas.length; i++) {
        if(inicio < arrayCuentas[i].saldo){
            mayorSaldoDisponible = arrayCuentas[i]
        }
    }
    return mayorSaldoDisponible
}
console.table(mayorSaldo(arrayCuentas))

