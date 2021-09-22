/* ======================================================
Primera forma 
==========================================================*/

/* const primerNumInput = prompt("Ingresa el primer numero");
const segundoNumInput = prompt("Ingresa el segundo numero");

const primerNum = parseInt(primerNumInput);
const segundoNum = parseInt(segundoNumInput);
const arrayNum = [];

if(primerNum >= segundoNum){
    for(i = segundoNum; i <= primerNum; i++){
        if(!(i % 2 == 0)) { 
            arrayNum.push(i) 
        };
    }
} else{
    for(i = primerNum; i <= segundoNum; i++){
        if(!(i % 2 == 0)) { 
            arrayNum.push(i) 
        };
    }
}

document.write(`Los numeros inpares son ${arrayNum} .`);
 */

/*============================================================
segunda forma
============================================================= */

/* function revisarNumero() {
    //Traigo los Inputs de HTML
    const numeroInput1 = document.getElementById('numero1');
    const numeroInput2 = document.getElementById('numero2');
    const parrafoResultado = document.getElementById('resultado');

    //parseo los numeros
    const primerNum = parseInt(numeroInput1.value);
    const segundoNum = parseInt(numeroInput2.value);

    //creo la variable donde guardare los numeros
    const arrayNum = [];

    if (primerNum >= segundoNum) {
        for (i = segundoNum; i <= primerNum; i++) {
            if (!(i % 2 == 0)) { 
                arrayNum.push(i) 
            };
        }
    } else {
        for (i = primerNum; i <= segundoNum; i++) {
            if (!(i % 2 == 0)) { 
                arrayNum.push(i) 
            };
        }
    }

    var arrayFiltro = articulos.filter(function(articulo){
        return arrayNum % 2 == 1 ;
    });
    
    parrafoResultado.innerHTML = `Los numeros inpares son ${arrayNum} .`;
} */

/* =============================================================================
Tercera forma
========================================================================= */
function revisarNumero() {
    //Traigo los Inputs de HTML
    const numeroInput1 = document.getElementById('numero1');
    const numeroInput2 = document.getElementById('numero2');
    const parrafoResultado = document.getElementById('resultado');

    //parseo los numeros
    const primerNum = parseInt(numeroInput1.value);
    const segundoNum = parseInt(numeroInput2.value);

    //creo la variable donde guardare los numeros
    if (segundoNum >= primerNum) {
        alert("El primer numero debe ser mayor")
    }
    {
        const arrayNum = [];
        for (i = segundoNum; i <= primerNum; i++) {
            if (i % 2 != 0) {
                arrayNum.push(i)
            }
        }
        parrafoResultado.innerHTML = `Los numeros inpares son ${arrayNum} .`;
    }
}