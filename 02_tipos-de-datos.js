// Numbers

// Representan valores númericos
//  En JavaScript, no existe un tipo de dato específico para representar números enteros o números con decimales.
// Todos los números son tratados de la misma manera.

let edad = 30;
let salario = 1500.50;
const PI = 3.14;

const numeroGrande = 1e6; // 1 millón
const numeroPequeño = 1e-6; // 0.000001

// Strings

// Representa una secuencia de caracteres
// Se pueden concatenar
// Puedes crear templates literales
// Se pueden manipular mediante algunos metodos

const nombre = "Alvaro";
const apellido = 'Enrique';
let concatenando = "Hola, " + nombre + " " + apellido + " concatenado!";
let template = `Hola, ${nombre} ${apellido} desde un template!`

console.log(concatenando); // Hola, Alvaro Enrique concatenado!
console.log(template); // Hola, Alvaro Enrique desde un template!
console.log(nombre.length) // 6
console.log(nombre.toUpperCase()) // ALVARO
console.log(nombre.toLowerCase()) // alvaro
console.log(nombre.substring(0, 5)) // Alvar

// Objects

// Son estructuras de datos que nos permiten almacenar un conjunto de pares clave-valor.
// Estos pares son conocidos como propiedades del objeto.

const persona = {
    nombre: "Fulanita",
    platziRank: 9567,
    cursoFavorito: {
        nombre: "Básico de JavaScript",
        clases: 30,
        duración: "2 horas"
    }
};

// Para acceder a las propiedades de un objeto, podemos utilizar el operador . o la notación de corchetes [].

console.log(persona.nombre); // "Fulanita"
console.log(persona.cursoFavorito.nombre); // "Básico de JavaScript"
console.log(persona["platziRank"]); // 9567

// Booleanos

// Representan un valor verdadero o falso.

let cursoCompletado = true;
let lecturaCompletada = false;

// SI NO RECUERDAS EL TIPO DE DATO CON EL QUE ESTAS TRABAJANDO, PUEDES USAR LA INSTRUCCION typeof

console.log(typeof "#js") // "string"
console.log(typeof 30) // number
console.log(typeof true) // boolean
console.log(typeof {}) // "object"

// 👀 con los arrays nos devuelve que son un objeto
// Más adelante descubriremos la razón
console.log(typeof []) // "object"

// Null

// Representa un valor vacío o nulo
// Representa un valor que aún no ha sido inicializado o un valor que no tiene sentido en el contexto actual.

const varNullExample = null;
console.log(varNullExample); // imprime "null"

// Undefined

// Es un tipo de dato que representa un valor que aún no ha sido asignado o que no tiene un valor válido.
// 

let varUndefinedExample;
console.log(varUndefinedExample); // imprime "undefined"

/*
 * Diferencias entre Null y Undefined
 * Es importante tener en cuenta que null y undefined son valores diferentes en JavaScript.
 * null representa un valor intencionalmente vacío.
 * null debe ser esignado explicitamente, nunca se asgirnara automaticamente.
 * undefined representa un valor que AÚN no ha sido asignado o que no tiene un valor válido.
 * undefined también es el valor que se devuelve cuando intentas acceder a una propiedad de un objeto que no existe.
*/

// Symbol

// Se utiliza para crear identificadores únicos.
// Cada vez que se crea un símbolo, se genera un nuevo identificador único
// lo que lo hace ideal para usar como claves de objetos o para identificar elementos de manera única en una aplicación.

const simbolo = Symbol();
const simbolo1 = Symbol("Descripcion del identificador único");


let perrito = {
  nombre: "Firulais",
  edad: 3,
  [simbolo]: "Identificador único 1",
  [simbolo1]: "Identificador único 2"
};


console.log(perrito[simbolo]); // "Identificador único 1"
console.log(perrito[simbolo1]); // "Identificador único 2"

// BigInt

// Se usa para representar números enteros de un tamaño mayor al que puede manejar JavaScript de manera nativa.
// Se escriben con el sufijo n.

const numeroGrandeBigInt = 12345678901234567890n;

console.log(numeroGrandeBigInt + 1n); // 12345678901234567891n
console.log(numeroGrandeBigInt * 2n); // 2469135780246913578n
console.log(numeroGrandeBigInt / 3n); // 411218936707805260n

