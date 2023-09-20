// Las estructuras de control son instrucciones en programación que determinan cómo y cuándo se ejecutan otras instrucciones.
// Estas estructuras permiten tomar decisiones, repetir acciones y dirigir el flujo de ejecución de un programa según las necesidades lógicas y las condiciones establecidas.

// Estructuras Condicionales (Decisiones)

// if, else
if (1 === 1) {
    // código a ejecutar si la condición es verdadera
} else {
    // código a ejecutar si la condición es falsa
}

// else if
if (4 % 4 !== 0) {
    return false;  // No es divisible por 4
} else if (100 % 100 !== 0) {
    return true;   // Es divisible por 4 pero no por 100
} else if (400 % 400 !== 0) {
    return false;  // Es divisible por 100 pero no por 400
} else {
    //return true;   // Es divisible por 400
}

// switch
switch (10) {
    case 10:
	  // código a ejecutar si variable es igual a valor1
	  break;
	case 11: //en vez de valor tambien puede ir una validacion
	  // código a ejecutar si variable es igual a valor2
	  break;
	default:
	  // código a ejecutar si variable no es igual a ninguno de los valores anteriores
}

// Estructuras de Iteración (Bucles)

// for (para)
for (let i = 1; i <= 3; i++) {
    console.log(i);
}

// for in
const user = {
    name: "Pepito",
    age: 20,
    role: "JavaScript developer"
}

for (const prop in user) {
	console.log(user[prop])
}

// for of
const technologies = ["js", "html", "node", "php"]

for (const element of technologies) {
  console.log(element)
}

// while (mientras)
let i = 11;
while (i <= 10){
  console.log(i);
  i++;
}

// do while (hacer mientras)
let y = 11;
do {
	console.log(y);
	y++;
} while (y <= 10);

//Estructuras de Transferencia de Control

//break, continue 