/* Switch
    Estructura de control de flujo, nos ayuda a tomar decisiones
    mendiante la evaluacion de una condicion.
    (Tipo if)
*/

const edad = parseInt(prompt("Ingresa tu edad"));
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
}

