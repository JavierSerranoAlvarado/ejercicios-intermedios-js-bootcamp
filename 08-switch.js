/* Switch
    Estructura de control de flujo, nos ayuda a tomar decisiones
    mendiante la evaluacion de una condicion.
    (Tipo if)
*/

/* const edad = parseInt(prompt("Ingresa tu edad"));
let mensaje = "";

switch(edad){
    case 18:
        mensaje = "Acabas de cumplir la mayoridad de edad";
        break;
    case 25:
        mensaje = "Ya eres un adulto";
        break;
    case 70:
        mensaje = "Ya eres de la tercera edad";
        break;
    default:
        mensaje = "Fuera de rango de edad";
        break;
}

document.write(`<p>${mensaje}</p>`); */

let mensaje = "";

const nombre = prompt("Ingresa tu nombre");

switch(nombre) {
    case 'carlos':
        mensaje = 'eres administrador';
        break;
    case 'juan':
        mensaje = 'Eres usuario';
        break;
    default:
        mensaje = ' no tienes permiso para usar el sistema';
        break;
}

document.write(`<p>${mensaje}</p>`);