// Los operadores son elementos de lenguaje que nos permiten realizar cálculos y comparaciones en JavaScript.
// En JS de usa la misma lista que en cualquier otro lenguaje
// Por lo que solo usaremos los especiales de JS

// Operadores aritméticos
// +, -, /, *, %
console.log(5 + 2) // Suma
console.log(5 - 2) // Resta
console.log(5 * 2) // Multiplicación
console.log(5 / 2) // División
console.log(5 % 2) // Módulo
console.log(5 ** 10) // Exponenciación

let a = 5
let b = 10
a++ // Incremento
console.log(a)
b-- // Decremento
console.log(b)

// Operadores de asignación
// =, +=, -=, /=, *=
let myVariable = 2
myVariable += 2 // Suma con asignación
myVariable -= 2 // Resta con asignación
myVariable *= 2 // Multiplicación con asignación
myVariable /= 2 // División con asignación
myVariable = 11
myVariable %= 3 // Módulo con asignación
myVariable **= 3 // Exponente con asignación
console.log(myVariable)

//Operadores de comparación
// <, >, <=, >=, ==, ===, !=, !==
console.log(a > b) // Mayor que
console.log(a < b) // Menor que
console.log(a >= b) // Mayor o igual que
console.log(a <= b) // Menor o igual que
console.log(a == b) // Igualdad por valor
console.log(a == 6) // == Es una comparacion de valor
console.log(a == "6")
console.log(a == a)
console.log(a === a) // Igualdad por identidad (por tipo y valor) o igualdad estricta
console.log(a === 6)
console.log(a === "6") // === Compara el valor y el tipo de dato
console.log(a != 6) // Desigualdad por valor
console.log(a !== "6") // Desigualdad por identidad (por tipo y valor) o desigualdad estricta
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)

// Operadores lógicos

// Nos permiten realizar operaciones lógicas, es decir, comparaciones y evaluaciones.
// AND (&&)
console.log("AND")
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// OR (||)
console.log("OR")
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)
console.log(5 > 10 && 15 > 20 || 30 < 40)

/*
Truthy values (valores verdaderos)

- Todos los numeros positivos y negativos menos el cero
- Todas las cadenas de texto menos las vacías
- El boolean true
*/

/*
Falsy values (valores falsos)

- 0
-  0n
- null
- undefined
- NaN (Not a Number)
- El boolean false
- Cadenas de texto vacías 
*/

// NOT (!)
console.log("NOT")
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores ternarios
console.log("Operadores Ternarios")
const isRaining = false
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")