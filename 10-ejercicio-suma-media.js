//Declarar variables
let numero = parseInt(prompt("Ingresa un numero"));
let arrayNum = [];
let suma = 0;
let promedio = 0;

//Pedir datos
while(numero >= 0){
    arrayNum.push(numero);
    numero = parseInt(prompt("Ingresa un numero"));
}

//Suma
for(i = 0; i < arrayNum.length; i++){
    suma += arrayNum[i];
}
//Media Aritmetica
promedio = suma / arrayNum.length;

//Escribir en HTML
document.write(`
<p>Los numeros ingresados son ${arrayNum}</p>
<p>La suma de tus numero son: ${suma}  y el promedio es: ${promedio}</p> `
);
