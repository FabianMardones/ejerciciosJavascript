// 1. Crear una función que convierta pulgadas en centímetros.
// Recibe por parámetro pulgadas y retorna su equivalente en centímetros.

// let pulgadas = 2.54

// function pulgadasAcentimetros (pulgadas, centimetros){
//     return pulgadas * centimetros
// }

// console.log(pulgadasAcentimetros(pulgadas, 1))


// let pulgadasCentimetros = (a, b) => pulgadas * 1 ;

// console.log(pulgadasCentimetros(pulgadas, 1))


/*-------------------------------------------------------------------------------*/


// 2. Crear una función que recibe un string y lo convierte en una URL.
// Ej: “pepito” es devuelto como “http://www.pepito.com”


// function url (nombre){
//     return ("https://www." + nombre + ".com")
// }
// console.log(url("pepito"))

// let url2 = (nombre) => "https://www." + nombre + ".com"
// console.log(url2("pepito"))


/*-------------------------------------------------------------------------------*/


// 3. Crear una función que recibe un string y devuelve la misma frase pero con
// admiración.

// function fraseAdmiracion (frase){
//     return "eres lo " + frase + "!!!" + ", nunca lo olvides!!!!!!"
// }
// console.log(fraseAdmiracion("Máximo"))

// let fraseAdmiracion2 = (frase) => "eres lo " + frase + "!!!" + ", nunca lo olvides!!!!!!"
// console.log(fraseAdmiracion2("Maximo"))


/*-------------------------------------------------------------------------------*/


// 4. Crear una función que calcule la edad de los perros, considerando que 1 año
// para nosotros son 7 de ellos.

// function edadPerros (edad){
//     return edad * 7
// }
// console.log(edadPerros(17))

// let edadPerros2 = (edad) => edad * 7
// console.log(edadPerros2(17))


/*------------------------------------------------------------------------------*/


// 5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
// sueldo mensual como parámetro.
// PD: considerá que tu mes de trabajo tiene 40 horas.

// function valorHora (sueldoMensual) {
//     return ((sueldoMensual / 4) / 40)
// }
// console.log(valorHora(726000))

// let valorHora2 = (sueldoMensual) => ((sueldoMensual / 4) / 40)
// console.log(valorHora2(726000))


/*------------------------------------------------------------------------------*/


// 6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en
// kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
// probando diferentes valores.

// function calculadorIMC (peso, altura){
//     return peso/(altura*altura)
// }
// console.log(calculadorIMC(75, 1.66))

// let calculadorIMC2 = (peso, altura) => peso/(altura*altura)
// console.log(calculadorIMC2(75, 1.66))


/*-----------------------------------------------------------------------------*/


// 7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
// y lo retorne.

// function minusculaAMayuscula(nombre){
//     return nombre
// }
// console.log(minusculaAMayuscula("esto Es Una Prueba".toUpperCase()))


/*----------------------------------------------------------------------------*/


// 8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
// parámetro.

// let numero = 0

// console.log (typeof(numero))


/*----------------------------------------------------------------------------*/


// 9. Crear una función que le pasamos el radio de un círculo y nos devuelve la
// circunferencia.
// Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi.

// function calcularLaCircunferencia(radio){
//     return 2 * Math.PI * radio
// }
// console.log(calcularLaCircunferencia(5))


/*---------------------------------------------------------------------------*/


// 10. Crear una función sumar, esta deberá recibir dos parámetros y retornar la
// suma de los mismos.

// function sumar (a, b){
//     return a + b
// }
// function restar (a, b){
//     return a - b
// }
// function multiplicar (a, b){
//     return a * b
// }
// function dividir (a, b){
//     return a / b
// }
// console.log(sumar(2, 5))
// console.log(restar(3, 4))
// console.log(multiplicar(2, 3))
// console.log(dividir(100, 5))


/*---------------------------------------------------------------------------*/


// 11. Crear una función que se llame cuadradoDeUnNumero, la cual recibe un
// número como parámetro y deberá retornar ese número elevado al cuadrado.
// Importante: cuadradoDeUnNumero() deberá utilizar la función multiplicar() para
// calcular el cuadrado del parámetro ingresado a cuadradoDeUnNumero()

// function cuadradoDeUnNumero (numero){
//     return multiplicar(numero, numero)
// }
// // console.log(cuadradoDeUnNumero(10))


// let cuadradoDeUnNumero2 = (numero) => multiplicar(numero, numero)
// console.log(cuadradoDeUnNumero2(10))


/*--------------------------------------------------------------------------*/


// 12. Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio
// de 3 números, que serán ingresados por parámetro.
// Importante: promedioDeTresNumeros() deberá utilizar algunas funciones
// previamente creadas de nuestra calculadora.

// function promedioDeTresNumeros (a, b, c){
//     return (dividir(sumar(sumar(a, b), c),3))
// }
// console.log(promedioDeTresNumeros(7,7,7))

// let promedioDeTresNumeros2 = (a, b, c) => dividir(sumar(sumar(a, b), c), 3)
// console.log(promedioDeTresNumeros2(10, 9.5, 10))


/*--------------------------------------------------------------------------*/


// 13. Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número
// total y el porcentaje que se le quiere calcular. Deberá retornar el x% del total.
// Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300.
// Importante: calcularPorcentaje() deberá utilizar algunas funciones previamente
// creadas de nuestra calculadora.

// function calcularPorcentaje (a, b){
//     return dividir(multiplicar(a, b), 100)
// }
// console.log(calcularPorcentaje(300, 15))

// let calcularPorcentaje2 = (a, b) => dividir(multiplicar(a, b), 100)
// console.log(calcularPorcentaje2(300, 15))


/*--------------------------------------------------------------------------*/


// 14. Crear una función GeneradorDePorcentaje que recibe dos parámetros y deberá
// retornar el porcentaje del primero con respecto al segundo.
// Importante: GeneradorDePorcentaje() deberá utilizar algunas funciones
// previamente creadas de nuestra calculadora.
// Ejemplo: GeneradorDePorcentaje(2, 200) deberá retornar 1, ya que 2 es el 1% de
// 200.

// function GeneradorDePorcentaje (a, b){
//     return multiplicar(dividir(a, b), 100)
// }
// console.log(GeneradorDePorcentaje(2, 200))

// let GeneradorDePorcentaje2 = (a, b) => multiplicar(dividir(a, b), 100)
// console.log(GeneradorDePorcentaje2(2, 200))


/*-------------------------------------------------------------------------*/

// 15 .Agregá caminos
// Revisá el siguiente código y asegurate de entenderlo para poder avanzar con el
// ejercicio.

// let edad = 18 //(el número es a modo de ejemplo, podés cambiarlo o 
// //crear otras para tener varias pruebas)
// if(edad % 2 !== 0){
//     console.log ("¿sabías que tu edad es impar?")
// }


// if(edad >= 0 && edad < 18) {
// console.log("No puede pasar al bar.")
// } 
// else if (edad >= 18 && edad < 21){
// console.log("Puede pasar al bar, pero no puede tomar alcohol.")
// }
// else if (edad === 21){
// console.log("Felicidades por llegar a tu mayoría de edad!!!! Puede pasar al bar y tomar alcohol.")
// }
// else if (edad < 0){
// console.log("Error, edad inválida. Por favor ingrese un número válido.")
// }
// else {
// console.log("Puede pasar al bar y tomar alcohol.")
// }

// ● Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad
// inválida. Por favor ingrese un número válido."

// ● Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a
// la mayoría de edad.

// ● Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu
// edad es impar?".


/*--------------------------------------------------------------------------*/


// 16. totalAPagar()
// Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
// litrosConsumidos.

// A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
// cuenta las siguientes consideraciones:

// ● Si el vehículo es “coche”, el precio por litro es de $86.
// ● Si es “moto”, ha de ser $70.
// ● Si es “autobús”, ha de ser $55.
// ● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
// ● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.

// let vehiculo = "moto"
// let litrosConsumidos = 15
// let precioLitro = 0 

// function totalAPagar (vehiculo, litrosConsumidos){
//         if(vehiculo === "coche"){
//             precioLitro = 86
//         }
//         else if (vehiculo === "moto"){
//             precioLitro = 70
//         }
//         else if (vehiculo === "autobús"){
//         precioLitro = 55
//         }
//     let añadir = 0
//         if (litrosConsumidos <= 25){
//             console.log(añadir = 50)
//         }
//         else{
//             console.log(añadir = 25)
//         }
//     let subTotal = precioLitro * litrosConsumidos
// return subTotal + añadir
// }
// console.log(totalAPagar(vehiculo, litrosConsumidos))


/*--------------------------------------------------------------------------*/


// 17. Local de sándwiches
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


// let tipoSandwich = "carne"
// let tipoPan = "negro"
// let queso = false
// let tomate = true
// let lechuga = false
// let cebolla = false
// let mayonesa = false
// let mostaza = false


// let precioSandwich = 0
// let PrecioPan = 0


// function pedido (tipoSandwich, tipoPan, queso, tomate, lechuga, cebolla, mayonesa, mostaza){
//     if (tipoSandwich === "pollo"){
//         precioSandwich = 150
//     }
//     else if (tipoSandwich === "carne"){
//         precioSandwich = 200
//     }
//     else if (tipoSandwich === "veggie"){
//         precioSandwich = 100
//     }
//     if (tipoPan === "blanco"){
//         PrecioPan = 50 
//     }
//     else if (tipoPan === "negro"){
//         PrecioPan = 60 
//     }
//     else if (tipoPan === "s/gluten"){
//         PrecioPan = 75
//     }

// let precioIngrediente1 = 0
//     if (queso === true){
//         precioIngrediente1 = 20
//     }
//     else {
//         precioIngrediente1 = 0
//     }

// let precioIngrediente2 = 0
//     if (tomate === true){
//         precioIngrediente2 = 15
//     }
//     else{
//         precioIngrediente2 = 0
//     }

// let precioIngrediente3 = 0
//     if (lechuga === true){
//         precioIngrediente3 = 10
//     }
//     else {
//         precioIngrediente3 = 0
//     }

// let precioIngrediente4 = 0
//     if (cebolla === true){
//         precioIngrediente4 = 15
//     }
//     else{
//         precioIngrediente4 = 0
//     }

// let precioIngrediente5 = 0
//     if (mayonesa === true){
//         precioIngrediente5 = 5
//     }
//     else{
//         precioIngrediente5 = 0
//     }
// let precioIngrediente6 = 0
//     if (mostaza === true){
//         precioIngrediente6 = 5
//     }
//     else{
//         precioIngrediente6 = 0
//     }

// let subTotal = precioSandwich + PrecioPan 
// return subTotal + precioIngrediente1 + precioIngrediente2 + precioIngrediente3 + precioIngrediente4 + precioIngrediente5 + precioIngrediente6

// }
// console.log(pedido(tipoSandwich, tipoPan, queso, tomate, lechuga, cebolla, mayonesa, mostaza))


/*--------------------------------------------------------------------------*/


// 18. ¿Cuál es el número secreto?
// Creá una función que reciba un parámetro numérico y verifique si el mismo es el
// número secreto. El número secreto deberá ser seleccionado de manera random de
// entre 1 y 10 —investigá qué hace la función Math.random()—. En caso de ser correcto,
// retorna un mensaje felicitando al usuario y, en caso de que no acierte, retorna un
// mensaje de aliento junto con el número ingresado y el secreto.


// function numeroSecreto (numero){
//     Math.floor(Math.random(5)* 10)
//     if (numero === numeroSecreto){
//         return "felicidades! encontraste el número"
//     }
//     else{
//         return "sigue intentando"
//     }
// }
// console.log(numeroSecreto(0))


/*------------------------------------------------------------------------------*/


// 19. abrirParacaidas()
// Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y
// altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
// siguiente:
// ● La velocidad debe ser menor a 1000 km/h.
// ● La altura debe ser mayor o igual a 2000 m y menor a 3000 m.

// function abrirParacaidas (velocidad, altura){
//     if (velocidad < 1000 && altura >= 2000 && altura < 3000){
//         return "¡¡¡¡¡Abrir paracaídas!!!!!"
//     }
//     else{
//         return "la velocidad ó la altura no son suficientes"
//     }
// }
// console.log(abrirParacaidas(777, 2000))


/*------------------------------------------------------------------------------*/

// 20. Traductor condicional
// Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
// "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
// inglés.
// En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
// informe que la palabra ingresada es incorrecta.

// let palabra = "árbol"

// switch(palabra){
//     case "casa":
//         console.log("House");
//         break;
//     case "perro":
//         console.log("Dog");
//         break;
//     case "pelota":
//         console.log("Ball");
//         break;
//     case "árbol":
//         console.log("Tree");
//         break;
//     case "genio":
//         console.log("Genius");
//         break;
//     default:
//         console.log("La palabra ingresada es incorrecta")
// }


/*----------------------------------------------------------------------------*/

// 21. Valoración de películas
// Usando la estructura switch, pedirle al usuario que valore la película que acaba de ver
// según la siguiente escala:
// ● Muy mala.
// ● Mala.
// ● Mediocre.
// ● Buena.
// ● Muy buena.
// Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás
// por su valoración.
// Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos mucho.".
// En caso de que ingresara un valor distinto, mostrarle el mensaje: "Ingresaste un valor
// inválido".
// Cuando el usuario haya valorado la película, agradecerle su visita.


// let valoracion = "Mediocre"

// switch (valoracion){
//     case "Mala":
//         console.log("Calificaste la película como Muy Mala. Lo lamentamos mucho. " + "Muchas gracias por tu visita" );
//         break;
//     case "Mala":
//         console.log("Calificaste la película como Mala. Lo lamentamos mucho. " + "Muchas gracias por tu visita" );
//         break;
//     case "Mediocre":
//         console.log("Calificaste la película como Medicre. Esperamos la próxima vez superar tus expectativas. " + "Muchas gracias por tu visita")
//         break;
//     case "buena":
//         console.log("Calificaste la película como Buena. Nos alegramos que te haya gustado. " + "Muchas gracias por tu visita");
//         break;
//     case "Muy buena":
//         console.log("Calificaste la película como Muy Buena. ¡¡¡¡Nos da mucha felicidad que te haya encantado!!!!. " + "Muchas gracias por tu visita");
//         break;
//     default:
//         console.log("Ingresaste un valor inválido.")
// }


/*--------------------------------------------------------------------------*/


// Bucles y repeticiones

// 22.Crear una función que pida un valor por parámetro y muestre los 10
// números siguientes.

// function numeroSiguiente (numero){
//     for (let i = 0 ; i < 10 ; i ++){
//         console.log(numero + i)
//     }
// }
// numeroSiguiente(11)


/*--------------------------------------------------------------------------*/


// 23. Imprimir los números entre el 5 y el 20, saltando de tres en tres.

// function tresEnTres (){
//     for (let i = 5 ; i <= 20 ; i = i + 3){
//         console.log(i)
//     }
// }
// tresEnTres(5)


/*--------------------------------------------------------------------------*/


// 24. Escribir un programa que muestre la sumatoria de todos los números
// entre el 0 y el 100

// function sumatoria (){
//     let sumar = 0
//     for (let i = 0 ; i <= 100 ; i ++){
//         sumar = sumar + i
//     }
// return sumar
// }
// console.log(sumatoria())


/*--------------------------------------------------------------------------*/


// 25. Dado un número entero positivo, mostrar su factorial. El factorial de
// un número se obtiene multiplicando todos los números enteros
// positivos que hay entre el 1 y ese número.

// function factorialize(num) {
//     if (num < 0) 
//         return -1;
//     else if (num == 0) 
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
// }
// console.log(factorialize(5))

// function factorialize(num) {
//     var result = num;
//     if (num === 0 || num === 1) 
//       return 1; 
//     while (num > 1) { 
//       num--;
//       result *= num;
//     }
//     return result;
//   }
//   console.log(factorialize(5))


/*-----------------------------------------------------------------------------*/

// 26. Escribí un programa que le pida al usuario ingresar una frase y
// la imprima en la consola.
// Recordá que para pedirle al usuario que escriba una frase
// debés utilizar el método prompt() y para escribir en la consola
// debés utilizar el método console.log().

// let IngresaUnaFrase = "Hola qué tal?"

// function escribirUnaFrase(frase){
//     return "hola, escribe una frase: " + frase
// }
// console.log(escribirUnaFrase(IngresaUnaFrase))


/*----------------------------------------------------------------------------*/


// 27. Escribí un programa que le pregunte al usuario su nombre e
// imprima "Hola " seguido del nombre y un signo de
// exclamación.
// Por ejemplo, si el usuario ingresa "Pedro" el programa debe
// imprimir en la consola "Hola Pedro!".

// let nombre = "Fabian"

// function saludar(nombre){
//     return "Hola " + nombre + "!"
// }
// console.log(saludar(nombre))


/*---------------------------------------------------------------------------*/


// 28. Escribí un programa que le pida al usuario ingresar un número,
// luego le pida un segundo número, e imprima en la consola la
// suma de los dos números que ingresó el usuario.

// let ingresaUnNumero = 100
// let ingresaOtroNumero = 100

// function dosNumeros (a, b){
//     return a + b
// }
// console.log(dosNumeros(ingresaUnNumero,ingresaOtroNumero))


/*-------------------------------------------------------------------------*/


// 29. Escribí un programa que le pida al usuario su año de
// nacimiento e imprima su edad actual en la consola con la frase
// "Tienes X años" (siendo X la cantidad de años).
// Por ejemplo, asumiendo que el año actual es 2019 y el usuario

// ingresa 1999, el programa debe imprimir en la consola: “Tienes
// 20 años”.

// let AñoNacimiento = 1994

// function Tienes(){
//     let AñoActual = 2023
//     let edad = AñoActual - AñoNacimiento
//     return "Tienes " + edad + " años"
// }
// console.log(Tienes())


/*------------------------------------------------------------------------*/




