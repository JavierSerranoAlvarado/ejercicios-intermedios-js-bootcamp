const nombre = prompt('Ingresa tu nombre');

const edad = prompt("cual es tu edad?");

console.log("hola " + nombre + " saludos. Tu edad es "+ edad + " años");

const saludo = `<h1>Hola ${nombre} saludos. 
Tu edad es ${edad} años </h1>`;

document.write(saludo);