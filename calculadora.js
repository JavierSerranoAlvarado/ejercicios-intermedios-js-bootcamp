
function revisarEdad(){
    const edadInput = document.getElementById('edad');
    const edadValor = parseInt(edadInput.value);

    const parrafoEdad = document.getElementById('tuEdad');

    const edadActual = 2021 - edadValor ;

    parrafoEdad.innerHTML = `Tu edad es de ${edadActual} años`;
}


/*     const edadInput = prompt("¿Que año naciste?");
    const edadValor = parseInt(edadInput);

    const edad = 2021 - edadValor ;

    document.write(`<h2>Tu edad es de ${edad}</h2>`);

 */