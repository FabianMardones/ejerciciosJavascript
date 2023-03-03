// let edad = 25

// //(el número es a modo de ejemplo, podés cambiarlo o
// // crear otras para tener varias pruebas)

// if(edad >= 0 && edad < 18) {
//     console.log("No puede pasar al bar.")
//         if ((edad%2) != 0){
//             console.log('¿sabías que tu edad es impar?')
//     }
// } 
// else if (edad >= 18 && edad < 21){
// console.log("Puede pasar al bar, pero no puede tomar alcohol.")
// } 
// else if (edad < 0){
//     console.log('Error, edad inválida')
// }
// else if (edad == 21){
// console.log("Puede pasar al bar y tomar alcohol, felicidades por tener tu mayoria de edad")
// }
// else {
// console.log("Puede pasar al bar y tomar alcohol.")
// }

// //Sin repetirte, modificá tu código de forma tal que cumpla con estas consignas:
// //● Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad
// //inválida. Por favor ingrese un número válido."


// //Importante: no se deberá mostrar ningún otro mensaje.
// //● Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a
// //la mayoría de edad.


// //● Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu
// //edad es impar?".


// //totalAPagar()
// //Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
// //litrosConsumidos.
// //A continuación, define y realiza los cálculos para obtener el total a pagar, teniendo en
// //cuenta las siguientes consideraciones:
// //● Si el vehículo es “coche”, el precio por litro es de $86.
// //● Si es “moto”, ha de ser $70.
// //● Si es “autobús”, ha de ser $55.
// //● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
// //● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.

// let vehiculo = 'coche'
// let litrosConsumidos = 0

// function totalAPagar(vehiculo, litrosConsumidos){
//     if (vehiculo == 'coche'){
//         return litrosConsumidos * 86
//     } 
//     else if (vehiculo == 'moto'){
//         return litrosConsumidos * 70
//     }
//     else if (vehiculo == 'autobús'){
//         return litrosConsumidos * 55
//     }
// }

// console.log(totalAPagar('coche', 700))
// console.log(totalAPagar('moto', 500))
// console.log(totalAPagar('autobús', 10))









// Local de sándwiches
// Necesitamos armar el sistema para un local de venta de sándwiches. Los clientes
// eligen el sándwich base que tiene un precio y, por cada selección siguiente, se le suma
// el valor de su selección al precio. Por ejemplo, partiendo de un sándwich base
// vegetariano con un precio x, después se selecciona pan negro con un precio y, por lo
// que el total a pagar sería x+y, y así sucesivamente con el resto de los ingredientes.
// Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz
// donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros
// recibiremos los datos de la siguiente manera.
// Nos llega un string indicando el tipo de sándwich base. Estos tienen un valor base
// diferente por cada selección:


// ● Pollo = $150 (“pollo”)
// ● Carne = $200 (“carne”)
// ● Vegetariano (verduras asadas) = $100 (“veggie”)


// let sandwich = ''
// let precio = 0

// if (sandwich = 'pollo'){
//     precio = 150
// }
// else if (sandwich = 'carne'){
//     precio = 200
// }
// else if (sandwich = 'veggie'){
//     precio = 100
// }



// Luego, el sistema pregunta al cliente qué tipo de pan quiere. Tienen para elegir entre
// otras tres opciones, por lo que recibiremos también otro string con el tipo de pan
// deseado:


// ● Blanco c/orégano y parmesano = $50 (“blanco”)
// ● Negro c/avena = $60 (“negro”)
// ● Sin gluten = $75 (“s/gluten”)

// let tipoPan = ''
// if (tipoPan = 'blanco'){
//     precio = precio + 50
// }
// else if (tipoPan = 'negro'){
//     precio = precio + 60
// }
// else if (tipoPan = 'sGluten'){
//     precio = precio + 75
// }

// Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes
// adicionales:


// ● Queso = $20
// ● Tomate = $15
// ● Lechuga = $10
// ● Cebolla = $15
// ● Mayonesa = $5
// ● Mostaza = $5

// let ingredientes = ''

// switch (ingredientes){
//     case 'queso':
//         precio = precio + 20;
//     case 'tomate':
//         precio = precio + 15;
//     case 'lechuga':
//         precio = precio + 10;
//     case 'cebolla':
//         precio = precio + 15;
//     case 'mayonesa':
//         precio = precio + 5;
//     case 'mostaza':
//         precio = precio + 5;
//     break;
//     default:
//         console.log('el ingrediente ingresado, no existe')
    
// }

// Cada uno de estos adicionales están representados por booleanos —es decir, true o
// false—, dependiendo de si aceptan o no cada uno de los adicionales —nos llegan un
// total de seis valores booleanos, uno por cada adicional—.
// Nuestro trabajo es crear una función que reciba estos ocho parámetros —un string
// para el sándwich base, uno para el pan y los seis booleanos de los adicionales—. La
// función deberá consultar primero qué tipo de sándwich base se seleccionó, luego el
// tipo de pan, y por último deberá verificar qué adicionales se seleccionaron.
// Finalmente, deberá retornar el valor numérico del total a pagar del cliente.

// let sandwich = ''
// let precio = 0
// let tipoPan = ''
// let ingredientes = ''

// function pedido (sandwich, tipoPan, ingredientes){

// if (sandwich = 'pollo'){
//     precio = 150
// }
// if (sandwich = 'carne'){
//     precio = 200
// }
// if (sandwich = 'veggie'){
//     precio = 100
// }
// if (tipoPan = 'blanco'){
//     precio = precio + 50
// }
// if (tipoPan = 'negro'){
//     precio = precio + 60
// }
// if (tipoPan = 'sGluten'){
//     precio = precio + 75
// }
// switch (ingredientes){
//     case 'queso':
//         precio = precio + 20;
//     case 'tomate':
//         precio = precio + 15;
//     case 'lechuga':
//         precio = precio + 10;
//     case 'cebolla':
//         precio = precio + 15;
//     case 'mayonesa':
//         precio = precio + 5;
//     case 'mostaza':
//         precio = precio + 5;
//     break;
//     default:
//         console.log('el ingrediente ingresado, no existe')
    
// }
// return precio
// }
// console.log(pedido('pollo', 'blanco', 'queso'))