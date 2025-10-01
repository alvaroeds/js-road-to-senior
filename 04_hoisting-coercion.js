//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Hoisting

// Es un comportamiento de JS en el que las declaraciones de variables y funciones son movidas al comienzo del ámbito actual
// Antes de que cualquier otro código sea ejecutado

// Por ejemplo, si tenemos el siguiente código:
console.log(x); //undefined
var x = 5;
console.log(x); // 5

// JS interpreta este código como si estuviera escrito de la siguiente manera:
var y;
console.log(y); // undefined
y = 5;
console.log(y); // 5

// Hoisting con funciones
// La declaración de la función es movida al inicio
console.log(saludar("Juan")); // "Hola Juan"

function saludar(nombre) {
    return "Hola " + nombre;
}

// DEBES TENER EN CUENTA QUE LAS ASIGNACIONES NO SON MOVIDAS AL COMIENZO DEL AMBITO, SOLO LAS DECLARACIONES

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Coercion

// La coerción es el proceso en el cual JS convierte valores de un tipo a otro.
// Hay dos tipos de coerción:
// 1. Coerción implícita: JS convierte automáticamente los tipos sin que lo indiquemos
//    Ejemplo: "5" + 2 // "52" (convierte 2 a string)
console.log("5" + 2) // "52"
// 2. Coerción explícita: Nosotros forzamos la conversión usando funciones como String(), Number(), Boolean()
//    Ejemplo: Number("5") // 5 (convertimos explícitamente el string a número)
console.log(Number("5")) // 5
// Debemos tener cuidado con la coerción implícita ya que puede dar resultados inesperados

// Aquí, el valor booleano true es convertido en el número 1 antes de compararlos, dando como resultado true.
console.log(true == 1) // true

// Aquí, el valor booleano true es convertido en la cadena "1" antes de compararlos, dando como resultado true.
console.log(true == "1") // true

// Aquí, el valor 0 es convertido en el booleano false antes de compararlos, dando como resultado true.
console.log(0 == false) // true

// Aquí, el valor 0 es convertido en la cadena vacía "" antes de compararlos, dando como resultado true.
console.log(0 == "") // true

// Con el operador de igualdad estricta (===), no hay coerción de tipos
console.log(true === 1) // false - no hay coerción entre boolean y number
console.log(true === "1") // false - no hay coerción entre boolean y string  
console.log(0 === false) // false - no hay coerción entre number y boolean
console.log(0 === "") // false - no hay coerción entre number y string
