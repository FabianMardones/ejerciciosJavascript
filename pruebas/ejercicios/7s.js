let edad = 17

//(el número es a modo de ejemplo, podés cambiarlo o
// crear otras para tener varias pruebas)

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

//Sin repetirte, modificá tu código de forma tal que cumpla con estas consignas:
//● Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad
//inválida. Por favor ingrese un número válido."


//Importante: no se deberá mostrar ningún otro mensaje.
//● Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a
//la mayoría de edad.


//● Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu
//edad es impar?".


//totalAPagar()
//Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
//litrosConsumidos.
//A continuación, define y realiza los cálculos para obtener el total a pagar, teniendo en
//cuenta las siguientes consideraciones:
//● Si el vehículo es “coche”, el precio por litro es de $86.
//● Si es “moto”, ha de ser $70.
//● Si es “autobús”, ha de ser $55.
//● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
//● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.

let vehiculo = 'coche'
let litrosConsumidos = 0

function totalAPagar(vehiculo, litrosConsumidos){
    if (vehiculo == 'coche'){
        return litrosConsumidos * 86
    } 
    else if (vehiculo == 'moto'){
        return litrosConsumidos * 70
    }
    else if (vehiculo == 'autobús'){
        return litrosConsumidos * 55
    }
}

console.log(totalAPagar('coche', 700))
console.log(totalAPagar('moto', 500))
console.log(totalAPagar('autobús', 10))
