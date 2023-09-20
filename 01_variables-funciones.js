// Declaración
var edad
let hora_

// Inicialización
edad = 30
hora_ = 12

// Declaración & inicialización
const nombre = "Alvaro"
var edad = 20
let hora = 12
console.log(nombre)

/*
 * DIFERENCIAS ENTRE VAR Y LET EN JAVASCRIPT:
 * 
 * 1. Ámbito (Scope):
 *    - var: Tiene ámbito de función. Si es declarada dentro de una función, solo es visible allí; si está fuera, es global.
 *    - let: Posee ámbito de bloque. Su visibilidad está limitada al bloque o estructura de control donde se declare (como bucles o condicionales).
 * 
 * 2. Redefinición:
 *    - var: Permite redeclarar la misma variable múltiples veces en el mismo ámbito sin errores.
 *    - let: No permite redeclaraciones en el mismo ámbito. Hacerlo resultaría en un error.
 * 
 * 3. Inicialización:
 *    - var: Si no se inicializa explícitamente, automáticamente se le asigna el valor `undefined`.
 *    - let: Debe ser inicializada antes de su uso. Si intentas usarla sin haberla inicializado, obtendrás un error.
 * 
 * 4. Variables Globales:
 *    - var: Cuando se declara en el ámbito global, se convierte en una propiedad del objeto global (por ejemplo, `window` en navegadores).
 *    - let: No se añade como propiedad del objeto global, aunque se declare en el ámbito global.
 * 
 */

// Funciones


// Función Declaración: Se declaran con la palabra clave 'function'.
// Son elevadas (hoisted), lo que significa que pueden ser llamadas antes de que sean definidas.
let resultado = Sumar(5, 5);
console.log(resultado);

function Sumar(parametro1, parametro2) {
	// Código de la función
	return parametro1 + parametro2;
}

// Función expresión: una función que se define como una expresión y puede ser asignada a una variable.
// Esta función también puede ser llamada y reutilizada.
// No son elevadas, deben ser definidas antes de ser llamadas.
// Se usan a menudo como argumentos de otras funciones, especialmente en callbacks.
let saluda = function () {
	console.log("Hola-1");
};
saluda();

// IIFE (Immediately Invoked Function Expression): una función que se autoejecuta inmediatamente después de ser definida.
// Esta función es anónima y no se puede reutilizar.
(function() {
    console.log("¡Esta es una función IIFE!");
})();

// Arrow function: una función que se define utilizando la sintaxis () =>.
// Esta función es una forma más concisa de escribir funciones y es útil para funciones de una sola línea.
// No pueden ser usadas como constructores (no puedes usar 'new' con ellas).
let saluda2 = () => console.log("Hola 2");
saluda2();