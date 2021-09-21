function revisarNumero(){
    const numeroInput = document.getElementById('numero');
    const numeroValor = parseInt(numeroInput.value);

    const parrafoResultado = document.getElementById('resultado');

    if(numeroValor % 2 == 0){
        parrafoResultado.innerHTML = ` ${numeroValor} es par`;
    } else {
        parrafoResultado.innerHTML = ` ${numeroValor} no es par`;

    }

} 

/* const numeroInput = prompt('Escribe algun numero');
const numeroValor = parseInt(numeroInput);

if(numeroValor % 2 == 0){
    document.write(` ${numeroValor} es par`);
} else {
    document.write(` ${numeroValor} no es par`);

} */