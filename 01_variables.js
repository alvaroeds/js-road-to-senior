// Declaración
var edad
let hora
// Inicialización
edad = 30
hora = 12

// Declaración & inicialización
const nombre = "Alvaro" // Con const no puedes volver a declarar la misma variable.
var edad = 20 // Con var puedes volver a declarar la misma variable sin problemas.
let hora_ = 12 // Con let no puedes volver a declarar la misma variable.
console.log(nombre)
console.log(edad)
console.log(hora)
console.log(hora_)

/*
 * DIFERENCIAS ENTRE VAR Y LET EN JAVASCRIPT:
 * 
 * 1. Ámbito (Scope):
 *    - var: Tiene ámbito de función. Si se declara dentro de una función, solo es accesible dentro de ella; si se declara fuera, es global.
 *    - let: Posee ámbito de bloque. Su visibilidad está limitada al bloque donde se declare (como bucles, condicionales o cualquier `{}`).
 * 
 * 2. Redefinición:
 *    - var: Permite redeclarar la misma variable múltiples veces en el mismo ámbito sin causar errores.
 *    - let: No permite redeclaraciones en el mismo ámbito. Intentarlo resultará en un error.
 * 
 * 3. Inicialización:
 *    - var: Si no se inicializa explícitamente, se le asigna automáticamente el valor `undefined`.
 *    - let: Debe declararse antes de su uso. Intentar usarla sin haber sido inicializada producirá un error.
 * 
 * 4. Variables Globales:
 *    - var: Cuando se declara en el ámbito global, se convierte en una propiedad del objeto global (por ejemplo, `window` en navegadores). Esto significa que puede ser accedida tanto como `hello` como `window.hello`.
 *    - let: No se añade como propiedad del objeto global, incluso si se declara en el ámbito global. La variable será global, pero no accesible como `window.hello`, solo como `hello`.
 * 
 */

// Ejemplo de ámbito de var y let
console.log("\n\n- Ambitos:")

let nombre2 = 'Juan'; // scope global

function saludar() {
  var nombre3 = 'María'; // No es scope local
  console.log(`Hola ${nombre3}!`);
}

saludar(); // output: Hola María!
console.log(`El nombre es ${nombre2}`); // output: El nombre es Juan

console.log(mensaje); // output: undefined
var mensaje = 'Hola';	// Se eleva al inicio del ámbito