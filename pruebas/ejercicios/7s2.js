// let edad = 18   //(el número es a modo de ejemplo, podés cambiarlo o crear otras para tener varias pruebas)
// if((edad%2) !=0){
//     console.log("¿Sabías que tu edad es impar?")
// }

// if(edad >= 0 && edad < 18) {
// console.log("No puede pasar al bar.")
// } 
// else if (edad >= 18 && edad < 21){
// console.log("Puede pasar al bar, pero no puede tomar alcohol.")
// } 
// else if(edad === 21){
//     console.log("Puede pasar al bar y tomar alcohol. felidades por haber llegado a la mayoría de edad.")
// }
// else if(edad < 0){
//     console.log("Error, edad inválida. Por favor ingrese un número válido.")
// }
// else {
// console.log("Puede pasar al bar y tomar alcohol.")
// }
// Sin repetirte, modificá tu código de forma tal que cumpla con estas consignas:

// ● Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad inválida. Por favor ingrese un número válido."

// Importante: no se deberá mostrar ningún otro mensaje.

// ● Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a la mayoría de edad.

// ● Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu edad es impar?".


// totalAPagar()
// Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y litrosConsumidos.

// A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en cuenta las siguientes consideraciones:

    // ● Si el vehículo es “coche”, el precio por litro es de $86.
    // ● Si es “moto”, ha de ser $70.
    // ● Si es “autobús”, ha de ser $55.
    // ● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
    // ● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.

// let vehiculo = "moto"
// let litrosConsumidos = 10
// let precioLitro = 0

// function totalAPagar(vehiculo, litrosConsumidos){
//     if(vehiculo == "auto"){
//         precioLitro = 70
//     }
//     else if(vehiculo == "moto"){
//         precioLitro = 55
//     }
//     else if(vehiculo == "autobús"){
//         precioLitro = 55
//     }
// let adicional = 0
//     if (litrosConsumidos <= 25){
//         adicional += 50
//     }
//     else if (litrosConsumidos >25){
//         adicional += 25
//     }
// let aPagar = precioLitro * litrosConsumidos
// return aPagar + adicional
// }

// console.log (totalAPagar(vehiculo,litrosConsumidos))


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

// Luego, el sistema pregunta al cliente qué tipo de pan quiere. Tienen para elegir entre
// otras tres opciones, por lo que recibiremos también otro string con el tipo de pan
// deseado:

// ● Blanco c/orégano y parmesano = $50 (“blanco”)
// ● Negro c/avena = $60 (“negro”)
// ● Sin gluten = $75 (“s/gluten”)

// Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes
// adicionales:

// ● Queso = $20
// ● Tomate = $15
// ● Lechuga = $10
// ● Cebolla = $15
// ● Mayonesa = $5
// ● Mostaza = $5

// Cada uno de estos adicionales están representados por booleanos —es decir, true o
// false—, dependiendo de si aceptan o no cada uno de los adicionales —nos llegan un
// total de seis valores booleanos, uno por cada adicional—.
// Nuestro trabajo es crear una función que reciba estos ocho parámetros —un string
// para el sándwich base, uno para el pan y los seis booleanos de los adicionales—. La
// función deberá consultar primero qué tipo de sándwich base se seleccionó, luego el
// tipo de pan, y por último deberá verificar qué adicionales se seleccionaron.
// Finalmente, deberá retornar el valor numérico del total a pagar del cliente.


// function pedido(tipoSandwich, tipoPan, ing1, ing2 , ing3, ing4, ing5, ing6) {
//     let totalAPagar = 0;
//     tipoSandwich == "pollo" ? totalAPagar += 150: "";
//     tipoSandwich == "carne" ? totalAPagar += 200: "";
//     tipoSandwich == "veggie" ? totalAPagar += 100: "";
//     tipoPan == "blanco" ? totalAPagar += 50: "";
//     tipoPan == "negro" ? totalAPagar += 60: "";
//     tipoPan == "sGluten" ? totalAPagar += 75: "";
//     ing1 == "queso" ? totalAPagar += 20 :"";
//     ing2 == "tomate" ? totalAPagar += 15 :"";
//     ing3 == "lechuga" ? totalAPagar += 10 :"";
//     ing4 == "cebolla" ? totalAPagar += 15 :"";
//     ing5 == "mayonesa" ? totalAPagar += 5 :"";
//     ing6 == "mostaza" ? totalAPagar += 5 :"";
//     return totalAPagar;
// }
// console.log(pedido("pollo","negro","queso","tomate","","","",""))

// function numeroSecreto (num) {

// Math.floor(Math.random(5)* 10)
//     if(num == numeroSecreto) {
//         return "Felicidades,haz adivinado el numero secreto"
//     }
//     else{
//         return "animo, intenalo nuevamente"
//     }
// }
// console.log(numeroSecreto(5))

// function numeroSecreto(num) {
//      Math.floor(Math.random() * 10)
//         if (num == numeroSecreto){
//             return "Felicidades"
//         }
//         else{
//             return "sigue intentando"
//         }

// }
// console.log(numeroSecreto())

// function getRandomArbitrary(min, max) {
//     Math.random() * (max - min) + min;
//     if ()
//   }


// abrirParacaidas()
// Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y altura. 
// La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta l siguiente:

// ● La velocidad debe ser menor a 1000 km/h.
// ● La altura debe ser mayor o igual a 2000 m y menor a 3000 m.


// let velocidad = 800
// let altura = 2500

// function abrirParacaidas (velocidad, altura){
//     if (velocidad < 1000){
//         if (altura >= 2000 && altura < 3000 ){
//             return 'abrir paracaídas'
//         }
//     }
//     else{
//         return 'no abrir paracaídas'
//     }
// }
// console.log(abrirParacaidas(velocidad, altura))

// Traductor condicional

// Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
// "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma inglés.

// En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le informe que la palabra ingresada es incorrecta.

// let palabra = "árbol"

// switch(palabra){
//     case "casa":
//         console.log('House');
//         break;
//     case "perro":
//         console.log('Dog');
//         break;
//     case "casa":
//         console.log('House');
//         break;
//     case "árbol":
//         console.log('Tree');
//         break;
//     case "genio":
//         console.log('Genius');
//         break;
//     default:
//         ('palabra inválida')
// }


// Valoración de películas
// Usando la estructura switch, pedirle al usuario que valore la película que acaba de ver según la siguiente escala:

// ● Muy mala.
// ● Mala.
// ● Mediocre.
// ● Buena.
// ● Muy buena.

// Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás
// por su valoración.
// Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos mucho.".

// let valoracion = 'mala'


// switch(valoracion){
//     case 'muy mala':
//         console.log('Calificaste la película como Muy Mala :( . Lo lamentamos mucho. Muchas gracias por tu visita');
//         break;
//     case 'mala':
//         console.log('Calificaste la película como Mala :(. Lo lamentamos mucho. Muchas gracias por tu visita');
//         break;
//     case 'mediocre':
//         console.log('Calificaste la película como Mediocre :| . ¿En qué podemos mejorar?. Muchas gracias por tu visita');
//         break;
//     case 'buena':
//         console.log('Calificaste la película como Buena :). Nos alegramos que te haya gustado. Muchas gracias por tu visita');
//         break;
//     case 'muy buena':
//         console.log('Calificaste la película como Muy Buena :D. ¡Estamos muy felices de que te haya gustado la película!. Muchas gracias por tu visita');
//         break;
//     default:
//         console.log('ingresaste un valor inválido')
// }