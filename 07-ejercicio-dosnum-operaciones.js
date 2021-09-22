/* lea dos numero */
const num1 = prompt("Ingresa el primero numero");
const num2 = prompt("Ingresa el segundo numero");

/* Parsear numeros */
const valorNum1 = parseInt(num1);
const valorNum2 = parseInt(num2);



if (valorNum1 == valorNum2) {
    document.write(`Todos los resultados son 0`);

} else if (valorNum1 > valorNum2) { /* Si el primero es mayor */
    
    /* Suma y diferencia */
    const suma = valorNum1 + valorNum2;
    const resta = valorNum1 - valorNum2;

    document.write(`Los numero son: ${valorNum1} y ${valorNum2}, 
    su suma es ${suma} y la resta ${resta}`);

} else { /* En caso contrario */

    /* producto y division del primero al segundo */
    const producto = valorNum1 * valorNum2;
    const division = valorNum1 / valorNum2;

    document.write(`Los numero son: ${valorNum1} y ${valorNum2}, 
    su producto es ${producto} y la division ${division}`);
}





