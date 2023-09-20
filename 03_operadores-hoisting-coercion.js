// Los operadores son elementos de lenguaje que nos permiten realizar cálculos y comparaciones en JavaScript.
// En JS de usa la misma lista que en cualquier otro lenguaje
// Por lo que solo usaremos los especiales de JS

// Operadores aritméticos
// +, -, /, *, %

// Operadores de asignación
// =, +=, -=, /=, *=

//Operadores de comparación
// <, >, <=, >=

console.log(1 !== 2); // true
console.log(1 !== 1); // false
// == Es una comparacion de valor
console.log(1 == "1") // true
// === Compara el valor y el tipo de dato
console.log(1 === "1") // false

// Operadores lógicos

// Nos permiten realizar operaciones lógicas, es decir, comparaciones y evaluaciones.
// AND (&&)
// OR (||)
// NOT (!)

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

// DEBES TENER EN CUENTA QUE LAS ASIGNACIONES NO SON MOVIDAS AL COMIENZO DEL AMBITO, SOLO LAS DECLARACIONES

// Coercion

// Es el proceso en el cual JS intenta convertir automáticamente un valor de un tipo a otro para que puedan ser comparados o operados.
// Esto puede dar lugar a algunos resultados inesperados si no se tiene en cuenta.

console.log(true == 1) // true
// Aquí, el valor booleano true es convertido en el número 1 antes de compararlos, dando como resultado true.
