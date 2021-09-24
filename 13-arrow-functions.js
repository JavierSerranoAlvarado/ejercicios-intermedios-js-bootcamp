/* Funciones de flechas */

/* Otra manera de declarar funciones de ECMACSCRIPT 6 2015 */

function suma (num1,num2) {
    return num1+num2;
}

const suma1 = (num1,num2) => {
    return num1+num2
}


document.write(`<p> ${suma1(5,3)} </p>`);