//Mostrar todos los numero divisores de un número introducido.
const numeroIntroducido = parseInt(prompt("ingresa un numero"));

for(i = 0; i <= numeroIntroducido; i++){
    if(numeroIntroducido % i == 0){
        document.write(`<p>${i} es divisor</p>`);
    }
}