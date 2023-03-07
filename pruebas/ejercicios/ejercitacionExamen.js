// function noParesDeContarImparesHasta(numero){
//     let conteo = 0;
//     for (let i = 0; i <= numero; i++) {
//     if ((i % 2) !== 0) {
//         conteo = conteo + 1;
//     }
// }
// return conteo;
// }
// console.log(noParesDeContarImparesHasta(10));


// function noParesDeContarImparesHastaElPar(numero){
//     let contar = 0;
//     for (let i = 0 ; i <= numero; i++){
//         if((i % 2) == 0) {
//             contar = contar + 1
//         }
//     }
//     return contar
// }
// console.log(noParesDeContarImparesHastaElPar(10))

// function tablaDeMultiplicar(numero) {
//     let i = 1
//     while(i <= 10){
//        console.log(numero + ' * ' + i + ' = ' + numero * i)
//     i ++
// }
// }
// console.log(tablaDeMultiplicar(10))


// function noParesDeContarImparesHasta(numero){
//     let contar = 0
//     for (let i = 0 ; i <= numero ; i ++){
//         if (i % 2 !== 0){
//             contar = contar + 1
//         }
//     }
//     return contar
// }
// console.log(noParesDeContarImparesHasta(10))


// function noParesDeContarImparesHastaElPar(numero){
//     let cont = 0
//     for (let a = 0 ; a <= numero ; a ++){
//         if(a % 2 == 0){
//         cont = cont + 1
//         }
//     }
//     return cont
// }
// console.log(noParesDeContarImparesHastaElPar(10))

// B  Nivel 2
// - Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] , luego desarrollar las siguientes funciones:

// 1 - Funcion que reciba un array de edades y retorne el promedio 

let edades1 = [10, 9, 8, 22, 55, 80, 5, 63, 29, 9];

function PromedioEdades (edades1){
    let sumaEdades = edades1.reduce((primerValor, ultimoValor) => {
        return primerValor + ultimoValor;
    }, 0);
    return sumaEdades / 10
}
console.log(PromedioEdades(edades1))

// 2 - Funcion que reciba un array de edades y retorne el mayor elemento // 80

let max = edades1.reduce(function(a, b) {
    return Math.max(a, b);
}, -Infinity);
console.log(max)

// 3 - Funcion que reciba un array de edades y retorne el menor elemento // 5

let min = edades1.reduce(function(a, b) {
    return Math.min(a, b);
}, +Infinity);
console.log(min)

// 4 - Funcion que reciba un array de edades y retorne true si encuentra algun elemento repetido o false caso contrario



// 5 - Funcion que reciba un array de edades y una edada buscar, retorne el primer índice si encuentra coincidencia o null caso contrario
// 6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array
//    {
//       edadesMenor : "// edades menor a 18",  
//       edadesMayor : "// edades menor a 18"
//    }




// let arrayFrase = [
//     "No",
//     "he",
//     "fracasado,",
//     "simplemente",
//     "me",
//     "he",
//     "topado",
//     "con",
//     "diez",
//     "mil",
//     "soluciones",
//     "equivocadas"
//   ];
//   let fraseNueva = arrayFrase.join(" "," ",","," "," "," "," "," "," "," "," "," ")
  
//   console.log(fraseNueva)


// let estudiantes = [
//     {
//       nombre: 'Alvaro',
//       promedio : 9,
//       curso : 'Android',
//     },
//     {
//       nombre: 'Daniel',
//       promedio : 6,
//       curso : 'Full Stack',
//     },
//     {
//       nombre: 'Alexis',
//       promedio : 3,
//       curso : 'iOS',
//     },
//   ]
  
//   estudiantes.push({ nombre: 'Juan', promedio: 5, curso: 'iOS' })
//   estudiantes.push({ nombre: 'Miguel', promedio: 2, curso: 'Android' })

//   console.log(estudiantes)

  
// let estudiantes = [
//     {
//        nombre: 'Alvaro',
//        promedio : 9,
//        curso : 'Android',
//      },
//       {
//         nombre: 'Daniel',
//         promedio : 6,
//         curso : 'Full Stack',
//       },
//       {
//         nombre: 'Alexis',
//         promedio : 3,
//         curso : 'iOS',
//       },
//     ]
// let alumnoDeBaja = estudiantes.shift()
// console.log(estudiantes)

// let estudiantes = [
//     {
//       nombre: 'Alvaro',
//       promedio : 9,
//       curso : 'Android',
//     },
//     {
//       nombre: 'Daniel',
//       promedio : 6,
//       curso : 'Full Stack',
//     },
//     {
//       nombre: 'Alexis',
//       promedio : 3,
//       curso : 'iOS'
//     }
//   ]
  
//   estudiantes.unshift({ nombre: "Mariana", promedio: 9, curso: "Full Stack" })
//   estudiantes.unshift({ nombre: "Francisco", promedio: 2, curso: "Android" }) 
//   console.log(estudiantes)




// const array = [5, 10, 2];

// const suma1 = array.reduce((valorAnterior, valorActual) => {
//   return valorAnterior + valorActual;
// }, 0);
// console.log(suma1); 