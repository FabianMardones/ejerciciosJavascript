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

// 30. Escribí un programa que piense un número de forma aleatoria
// del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el
// número es correcto debe imprimir en la consola "Felicitaciones,
// ese era!", de lo contrario, debe imprimir "Lo siento, intenta
// nuevamente!"

// function numeroSectro1(numero){
//     Math.floor(Math.random()*1)
//     if (numeroSectro1 = numero){
//         return 'Felicitaciones, ese era!'
//     }
//     else{
//         return 'Lo siento, intenta nuevamente'
//     }
// }
// console.log(numeroSectro1(1))


/*------------------------------------------------------------------------*/


// 31) Escribí un programa que imprima los números pares del 0 al
// 100.

// function correlativos(n){
//     for (let i = 0 ; i <= 100 ; i = i + 2)
//     console.log(n + i)
// }
// correlativos(0)


/*------------------------------------------------------------------------*/


// 32. Construí un pseudocódigo que permita ingresar un número, si
// el número es mayor de 500, se debe calcular y mostrar en
// pantalla el 18% de este.

// function pseudoCodigo(numero){
//     if (numero > 500){
//         return ((numero * 18)/100)
//     }
//     else{
//         return numero*1
//     }
// }
// console.log(pseudoCodigo(501))


/*------------------------------------------------------------------------*/


// 33. Escribí un programa que itere sobre el arreglo nombres e
// imprima cada uno en la consola: const nombres = ["Pedro",
// "Pablo", "Maria", "Juan", "Diana"];

// 34. Escribí una función llamada elemento que recibe un arreglo
// como parámetro. La función debe devolver el valor que se
// encuentra en la tercera posición. Si el arreglo no tiene al menos
// 3 elementos deberá retornar -1.

// 35. Se ingresa por teclado un número natural de hasta 2 cifras, si
// tiene una cifra que muestre lo mínimo que le falta para ser un
// número de 2 cifras; de lo contrario, que muestre lo mínimo que
// le falta para ser un número de 3 cifras. Considerar que el
// usuario ingresa números de hasta dos cifras.



































// 1) Crear una función que pida un valor por parámetro y muestre los 10
// números siguientes.

// function numeroSiguiente(numero){
//     for (let i = 0 ; i < 10 ; i ++){
//         console.log(numero + i)
//     }
// }
// numeroSiguiente(1000)


// // 2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.

// function tresEnTres(numero){
//     for (let i = 0 ; i <= 15 ; i = i + 3){
//         console.log(numero + i)
//     }
// }
// tresEnTres(5)


// 3) Escribir un programa que muestre la sumatoria de todos los números
// entre el 0 y el 100

// function sumatoria(a, b){
//     let suma = 0
//     for (let i = a ; i <= b ; i ++){
//         suma = suma + i
//     }
// return suma
// }
// console.log(sumatoria(0,100))









// Desmenuzar Array


// let pelisFavoritas = ['Star Wars', 'Kill Bill', 'Alien', 'Avatar'];
// let pelisFavoritas2 = ['Star Wars', 'Kill Bill', 'Alien', 'Avatar', 'Iron Man'];


// // console.log(pelisFavoritas.length)

// // console.table(pelisFavoritas)

// function mostrarPelis(pelis){
//     for (let i = 0; i < pelis.length; i++) {
//         console.log(pelis[i])
        
//     }
//     console.log('Listando: ' + pelis.length + ' Pelis')
// }

// mostrarPelis(pelisFavoritas)
// console.log()

// mostrarPelis(pelisFavoritas2)


// Desmenuzar String

// let pelis = 'Avatar'
// // console.log(pelis[0])

// function deletrearPelis(pelis){
//     console.log('Deletreando ' + pelis.length + ' Caracteres')
//     for (let i = 0; i < pelis.length; i++) {
//         console.log(pelis[i])
//     }
// }
// deletrearPelis(pelis)


/*--------------------------------------------------------------------------*/


/*BONUS CLASE EN VIVO


// Desarrollar una función que realice la verificación de cada elemento del array 
// de correos pendientes. En caso de validar, agregar al arrayCorreosAdmitido.
// caso contrario, agregar al arrayCorreosDescartados.

            // console.log(correos[i])
            // miTexto.indexOf(textoABuscar):





// let arrayCorreosPendientes = [
//     'ironman@digitalhouse.com', 'loki%digitalhouse.com', 'loki@digitalhouse.com', 
//     'thanosdigitalhouse.com', 'thano@digitalhouse.com']

//     let arrayCorreosAdmitidos = [
//         'thor@digitalhouse.com',
//         'tucuMan@digitalhouse.com',
//         'wanda@digitalhouse.com'
//     ]

//     let arrayCorreosDescartados = []




//     function verificarCorreos(correos){
//         for (let i = 0; i < correos.length; i++) {
//             if (correos[i].indexOf('@') != -1) {
//                 arrayCorreosAdmitidos.push(correos[i])
//             }
//             else{
//                 arrayCorreosDescartados.push(correos[i])
//             }
//         }
//     }




// console.log(arrayCorreosAdmitidos)
// console.log('Verificando.....')
// console.log()
// verificarCorreos(arrayCorreosPendientes)


// console.log("---correos admitidos; " + "cantidad " + arrayCorreosAdmitidos.length)
// console.table(arrayCorreosAdmitidos)
// console.log("---correos; " + "cantidad " + arrayCorreosDescartados.length)
// console.table(arrayCorreosDescartados)



/*------------------------------------------------------------------------*/

/*Arrays y colecciones*/


// let numbers =[22, 33, 54, 66, 72]
// console.log(numbers[numbers.length])


// let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk",
// "Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
// console.log(grupoDeAmigos[5])


// let str = "un string cualquiera"
// let arrayAleatorio= ["Digital", "House", "true", "string", "123","false", "54", str ]
// console.log(arrayAleatorio[arrayAleatorio.length - 1])


/*------------------------------------------------------------------------*/

// Arrays y colecciones


// Colecciones de películas (y más...)

// El tech leader del equipo necesita conocer la estructura de datos del nuevo proyecto.
// Para esto, deberás:

// 1. Crear la estructura adecuada para guardar las siguientes películas:
// "star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
// Importante: verificá que todo funciona correctamente accediendo a alguna de
// las películas una vez creada la estructura correspondiente.


// let peliculas1 = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

// console.log(peliculas1[0])

// 2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas
// en mayúsculas. Para esto solicitan que crees una función que reciba por
// parámetro un array y convierta el contenido de cada elemento a mayúsculas.
// Pista: revisá qué hace el método de strings .toUpperCase().


// function mayusculas(array){
//     for (let i = 0; i < array.length; i++) {
//         array[i] = array[i].toUpperCase()
//     }
//     return array
// }
// console.table(mayusculas(peliculas1))


// 3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
// crear otra estructura similar a la primera, pero con las siguientes películas
// animadas:
// "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
// Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
// para poder agregar los elementos contenidos en el segundo array dentro del
// primero, y así retornar un solo array con todas las películas como sus elementos.
// Importante: las películas animadas también deberían convertirse a mayúsculas.


// let peliculas2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]


// let borrar = peliculas2.pop()


// function agregarPeliculas(arrayEntrada, arraySalida){
//     for (let i = 0; i < arrayEntrada.length; i++) {
//         arraySalida.push(arrayEntrada[i])
//     }
//     return arraySalida
// }
// console.table(agregarPeliculas(peliculas2, peliculas1))

// let peliculas = agregarPeliculas(peliculas2, peliculas1)
// console.table(mayusculas(peliculas))

// 4. Durante el proceso, uno de los desarrolladores advierte que el último elemento del
// array de películas animadas es un videojuego. Ahora tenés que editar el código y
// modificarlo de manera que puedas eliminar ese último elemento antes de migrar el
// contenido al array que contenga todas las películas.
// PD: por precaución, guardá el elemento que vas a eliminar en una variable.





// 5. Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
// del mundo sobre las películas con el siguiente formato:

// const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

// Te piden crear una función que compare las calificaciones e indique si son iguales
// o diferentes. Te confirman que están en el orden adecuado y que solo traen
// valores numéricos del 1 al 10.
// PD: los elementos de los scores tanto de Asia como de Europa corresponden en
// orden al del array resultante de combinar películas con películas animadas. Es
// decir, el primer elemento del array de películas general corresponde al primer
// elemento de asiaScores y al primer elemento de euroScores, y así sucesivamente.


// function calidifaciones(asiaScores, euroScores){
//     for (let i = 0; i < asiaScores.length; i++) {
//         if(asiaScores[i] == euroScores [i]){
//             console.log ("Son Iguales")
//         }
//         else{
//             console.log("Son diferentes")
//         }
//     }
// }
// calidifaciones(asiaScores, euroScores)



// Array inverso
// En este ejercicio deberás crear una función que devuelva un array con sus elementos
// invertidos, sin modificarlo. Luego, deberás hacer una función que lo modifique e invierta
// el orden de sus elementos.


// 1. Creá la función imprimirInverso que tome un array como argumento y que
// imprima en la consola cada elemento en orden inverso (no tenés que invertir el
// array).

// 2. Creá la función inversor que tome un array como argumento y devuelva uno
// nuevo invertido.



// A - Nivel 1

// 1 - Desarrollar una función que reciba 2 numeros y retorne la suma de ambos


// function suma(a, b){
//     return a + b
// }
// console.log(suma(5,7))


// 2 - Desarrollar una función que reciba 2 numeros y 
//      retorne la suma de ambos, si el primer parametro es mayor, 
//      caso contrario retornar la resta.


// let sumaCondicional = (a, b) => a > b ? a + b : a - b;
// console.log(sumaCondicional(10,15))


// 3 - Desarrollar una función que reciba 4 numeros y calcular la suma de total
//      si el el resultado es mayor o igual a 7, retornar 'Aprobado', 
//      caso contrario retornar 'otra chance '.


// function promedio(a, b, c, d){
//     let sumar = (a + b + c + d)/4
//     if(sumar >= 7){
//         return "APROBADO!!!!! :D"
//     }
//     else{
//         return "Otra Chance D:"
//     }
// }
// console.log(promedio(7,8,9,10))



// 4 - Desarrollar una función que reciba 4 numeros y calcular la suma de total
//      si el el resultado es par, retornar la mitad del total,  
//      caso contrario retornar el doble del total.

// function retornoCondicional(a, b, c, d){
//     let sumar4Numeros = a + b + c + d
//     if(sumar4Numeros % 2 === 0){
//         return sumar4Numeros/2
//     }
//     else{
//         return sumar4Numeros*2
//     }
// }
// console.log(retornoCondicional(1,2,3,5))

// B  Nivel 2
// - Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] , luego desarrollar las siguientes funciones:

// 1 - Funcion que reciba un array de edades y retorne el promedio


let age0 = [10, 9, 8, 22, 55, 80, 5, 130, 29, 9,100, 120, 63]
let age1 = [1, 19, 18, 42, 55, 80, 5, 63, 29, 9, 50, 70, 80]
let age2 = [14, 14, 3, 4, 5, 14, 7, 8, 9, 10, 11, 12, 14]


// function ageAverage(arrayAge){
//     let plus = 0
//     for (let i = 0; i < arrayAge.length; i++){
//         plus = plus + arrayAge[i]
//     }
//     return plus / arrayAge.length
// }

// console.log("PROCESSING RESULTS..........")
// console.log()
// console.log("THREE NEW ARRAYS FOUNDS")
// console.log()
// console.log("SHOWING RESULTS AS FOLOWWING =>")
// console.log()
// console.log("THE AGE0 AVERAGE IS:")
// console.log(ageAverage(age0))
// console.log()
// console.log("THE AGE1 AVERAGE IS:")
// console.log(ageAverage(age1))
// console.log()
// console.log("THE AGE2 AVERAGE IS:")
// console.log(ageAverage(age2))
// console.log()
// console.log("-----------------------------")

// 2 - Funcion que reciba un array de edades y retorne el mayor elemento // 80


// function majorAge(arrayAge){
//     let major = arrayAge[0]
//     for (let i = 0; i < arrayAge.length; i++) {
//         let age = arrayAge[i]
//         if (age > major)
//             major = age
//     }
//     return major
// }
// console.log()
// console.log("PROCESSING RESULTS..........")
// console.log()
// console.log("THREE NEW ARRAY FOUND")
// console.log()
// console.log("SHOWING RESULT AS FOLOWWING =>")
// console.log()
// console.log("THE MAJOR AGE0 IS:")
// console.log(majorAge(age0))
// console.log()
// console.log("THE MAJOR AGE1 IS:")
// console.log(majorAge(age1))
// console.log()
// console.log("THE MAJOR AGE2 IS:")
// console.log(majorAge(age2))



// 3 - Funcion que reciba un array de edades y retorne el menor elemento // 5


// function lowerAge(arrayAge){
//     let lower = arrayAge[0]
//     for (let i = 0; i < arrayAge.length; i++) { 
//         let age = arrayAge[i]
//         if (age < lower)
//             lower = age
//     }
//     return lower
// }
// console.log()
// console.log("PROCESSING RESULTS..........")
// console.log()
// console.log("THREE NEW ARRAY FOUND")
// console.log()
// console.log("SHOWING RESULT AS FOLOWWING =>")
// console.log()
// console.log("THE LOWER AGE0 IS:")
// console.log(lowerAge(age0))
// console.log()
// console.log("THE LOWER AGE1 IS:")
// console.log(lowerAge(age1))
// console.log()
// console.log("THE LOWER AGE2 IS:")
// console.log(lowerAge(age2))
// console.log()



// 4 - Funcion que reciba un array de edades y retorne true si encuentra algun elemento repetido o false caso contrario

// function numberRepeat(arrayAge){
//     let lookingFor = arrayAge[0]
//     for (let i = 0; i < arrayAge.length; i++) {
//         let age = arrayAge[i]
//         if(lookingFor !== age){
//             console.log(false)
//         }
//         else {
//             console.log(true)
//         }
//     }
// }
// numberRepeat(age2)


// 5 - Funcion que reciba un array de edades y una edada buscar, retorne el primer índice 
// si encuentra coincidencia o null caso contrario


// function coincidencia(arrayEdad, edadBuscar){
//     for (let i = 0; i < arrayEdad.length; i++) {
//         let rango = arrayEdad[i]
//         if(edadBuscar === rango){
//             return i
//         }
//         else{
//             return "null"
//         }
//     }
// }
// console.log(coincidencia(age2,14))


// 6 - Funcion que reciba un array de edades y retorne un objeto literal 
// con dos propiedades que contengan un array
//    {
//       edadesMenor : "// edades menor a 18",  
//       edadesMayor : "// edades menor a 18"
//    }


// function edadesMM(arrayEdades){
//     let edadesMenor = []
//     let edadesMayor = []
//     for (let i = 0; i < arrayEdades.length; i++) {
//         if(arrayEdades[i] < 18){
//             edadesMenor.push(arrayEdades[i])
//         }
//         else{
//             edadesMayor.push(arrayEdades[i])
//         }
//     }
//     return {edadesMenor, edadesMayor}
// }
// console.table(edadesMM(age0))


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
//     color  : 'Negro',
//     Chileno : true,
//     edad : 28,
//     comunasQueHaVivido : ['Quinta Normal', 'la Pintana', 'Puente Alto', 'San Bernardo'],
//     saludo: function(){
//         return 'wouf wouf wouf..'
//     } 
//     }
// //   - Luego desarrollar una funcion que liste individualmente los elementos de la propiedad del tipo Array 

// function listar (elementos){
//     for (let i = 0; i < misDatos.comunasQueHaVivido.length; i++) {
//         console.log(misDatos.comunasQueHaVivido[i])
//     }
// }
// listar(misDatos)

// 2 - Dado el Siguiente array de personas desarrollar funciones:
//   - Funcion que reciba el array de personas y liste el nombre de cada una. 
//   - Funcion que reciba el array de personas y retorne en un array los que son programadores.
//   - Funcion que reciba el array de personas y un id a buscar, 
//        retorne la persona en caso de encontrar, 
//        caso contrario retorne null
//   - Funcion que reciba el array de personas y un id a buscar, 
//        retorne la persona en caso de encontrar, 
//        caso contrario retorne null 



    // {
    //   "id": 0,
    //   "isProgrammer": true,
    //   "age": 28,
    //   "name": "Harrington Curry",
    //   "company": "TRANSLINK",
    //   "favoriteFruit": "strawberry"
    // },
    // {
    //   "id": 1,
    //   "isProgrammer": false,
    //   "age": 38,
    //   "name": "Greta Morton",
    //   "company": "PYRAMI",
    //   "favoriteFruit": "apple"
    // },
    // {
    //   "id": 2,
    //   "isProgrammer": false,
    //   "age": 32,
    //   "name": "Hester Bowen",
    //   "company": "TURNABOUT",
    //   "favoriteFruit": "apple"
    // },
    // {
    //   "id": 3,
    //   "isProgrammer": false,
    //   "age": 25,
    //   "name": "Melendez Mcfarland",
    //   "company": "XSPORTS",
    //   "favoriteFruit": "strawberry"
    // },


/*-------------------------------------------------------------------------------*/



// Objetos literales



// const jugador = {
//     nombre : 'Roger',
//     apellido : 'Federer',
//     edad : 38,
//     estaJugando : true,
//     saludar : function(tiempo){
//         return 'Hola soy ' + this.nombre + ' buenas ' + tiempo
//     }
// }
// console.log(jugador.saludar('noches'))


// let dominio = "digitalhouse.com.ar"

// function url (dominio){
//     return "https://www." + dominio
// }
// console.log(url(dominio))



//la lista de clientes.

// let arrayCuentas = [
//     {
//         nroCuenta: 5486273622,
//         tipoDeCuenta: "Cuenta Corriente",
//         saldoEnPesos: 27771,
//         titularCuenta: "Abigael Natte",
//     },
//     {
//         nroCuenta: 1183971869,
//         tipoDeCuenta: "Caja de Ahorro",
//         saldoEnPesos: 8675,
//         titularCuenta: "Ramon Connell",
//     },
//     {
//         nroCuenta: 9582019689,
//         tipoDeCuenta: "Caja de Ahorro",
//         saldoEnPesos: 27363,
//         titularCuenta: "Jarret Lafuente",
//     },
//     {
//         nroCuenta: 1761924656,
//         tipoDeCuenta: "Cuenta Corriente",
//         saldoEnPesos: 32415,
//         titularCuenta: "Ansel Ardley",
//     },
//     {
//         nroCuenta: 7401971607,
//         tipoDeCuenta: "Cuenta Unica",
//         saldoEnPesos: 18789,
//         titularCuenta: "Jacki Shurmer",
//     },
//     ];

    // function agregarID(array){
    //     for (let i = 0; i < array.length; i++) {
    //         array[i].RUT = "xx.xxx.xxx-x"
    //     }
    //     return array
    // }
    // console.table(agregarID(arrayCuentas))


// console.table(arrayCuentas)
// 
// podes continuar tu codigo a partir de aca!

// 2. Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una
// propiedad llamada “clientes” que estará compuesta de la lista de objetos
// obtenidos en el punto anterior.

// 3. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
// nombre (titular) por parámetro, deberá buscarlo en la lista de clientes y retornar el
// objeto cliente que corresponda con ese nombre ingresado.
// Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);

// 4. Crear otro método llamado depósito que recibirá dos parámetros: el titular de
// cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
// correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
// Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
// nuevo saldo es: XXXX”.

// 5. Crear un último método llamado extracción que recibirá también dos parámetros:
// el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
// correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
// menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
// De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
// saldo es: XXXX”.


// const banco = {
//     clientes : arrayCuentas,

//     consultarCliente : function(titular){
//         for (let i = 0; i < this.clientes.length; i++) {
//             if(this.clientes[i].titularCuenta === titular){
//                 return this.clientes[i]
//             }
//         }
//     },
//     deposito : function(titular,cantidadDeposito){
//         for (let i = 0; i < this.clientes.length; i++) {
//             let cuenta = this.clientes[i].nroCuenta
//             let monto = this.clientes[i].saldoEnPesos + cantidadDeposito
//             if(this.clientes[i].titularCuenta === titular){
//                 return "Depósito realizado a su cuenta N°" + cuenta + "su nuevo saldo es: " + monto
//             }
//             else{
//                 return "Cliente o monto no válido"
//             }
//         }
//     },
//     extraccion : function(titular, montoAExtraer){
//         for (let i = 0; i < this.clientes.length; i++) {
//             let monto = this.clientes[i].saldoEnPesos - montoAExtraer
//             if(this.clientes[i].titularCuenta === titular && this.clientes[i].saldoEnPesos > montoAExtraer){
//                 return "Extracción realizada correctamente, su nuevo saldo es: " + monto
//             }
//             else{
//                 return "Fondos insuficientes"
//             }
//         }   
//     },
// }

// console.log(banco.consultarCliente('Abigael Natte'))
// console.log(banco.extraccion('Abigael Natte', 25000))
// console.log(banco.deposito('Ramon Connell', 2000))
// console.log(banco.deposito('Jarret Lafuente', 2000))
// console.log(banco.deposito('Ansel Ardley', 2000))
// console.log(banco.deposito('Jacki Shurmer', 2000))




// Integración de contenido:
// 1) Crear un array llamado misMascotas

// 2) Dentro de este array crearemos un objeto literal para cada mascota. Cada objeto
// deberá tener:
// ● nombre
// ● raza
// ● edad
// ● sonido
// ● un método que nos retorne ese sonido 2 veces
// Cuando esté listo, verificar en consola



// const misMascotas = [
//     {
//         nombre: "Tom",
//         raza: "Dogo Argentino",
//         edad: 12,
//         sonido: "Roof Roof Roof"
//     },
//     {
//         nombre: "Kai",
//         raza: "Boxer",
//         edad: 6,
//         sonido: "es como una Tetera"
//     },
//     {
//         nombre: "chiquita",
//         raza: "Pincher",
//         edad: 5,
//         sonido: "rrr rrr rrr"
//     },
//     {
//         nombre: "chocolo",
//         raza: "kiltro",
//         edad: 9,
//         sonido: "wuau"
//     },
//     {
//         nombre: "Molly",
//         raza: "Quiltro",
//         edad: 2,
//         sonido: "Guau"
//     },
//     {
//         nombre: 'Rugui',
//         raza: 'Shar Pei',
//         edad: 5,
//         sonido: 'woof'
//     },
//     {   
//         nombre: "Ahsoka", 
//         raza: "gato", 
//         edad: 2, 
//         sonido: "Miau"
//     }
// ]
// console.table(misMascotas)

// 3) Deberemos crear una función que se llame aumentarEdad que aumente la edad de
// cada animal en 1.

// function aumentarEdad(arrayMascotas){
//     for (let i = 0; i < arrayMascotas.length; i++) {
//         arrayMascotas[i].edad = arrayMascotas[i].edad + 1
//     }
// }
// aumentarEdad(misMascotas)
// console.table(misMascotas)


// 4) Ahora debemos crear otra función, que se llame aumentarEdad2, que va a hacer un
// trabajo más fino:
// ● Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
// ● Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
// ● Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad


// function aumentarEdad2(arrayMascotas){
//     for (let i = 0; i < arrayMascotas.length; i++) {
//         if(arrayMascotas[i].edad < 6){
//             arrayMascotas[i].edad = arrayMascotas[i].edad + 1
//         }
//         else if (arrayMascotas[i].edad<= 10){
//             arrayMascotas[i].edad = arrayMascotas[i].edad + 2
//         }
//         else {
//             arrayMascotas[i].edad = arrayMascotas[i].edad * 1.5
//         }
//     }
// }
// aumentarEdad2(misMascotas)
// console.table(misMascotas)

// 5) Ahora crearemos una función que va a generar un identificador (ID) en cada objeto,
// que será secuencial y que empezará en 1.

// function generarIdentificador(array){
//     for (let i = 0; i < array.length; i++) {
//         array[i].Id = i + 1
//     }
//     return array
// }
// console.table(generarIdentificador(misMascotas))