/* Try nos permite ejecutar codigo propenso a fallar de una
manera segura */

const gravedad = 9.8;

console.log(gravedad);

/* Intentar ejecutar el codigo, si hay un error ejecuta el catch */
try {
    gravedad = 10.1;
} catch(e){
    /* El catch se ejecuta con un error y recibe como primer parametro el error */
    console.log(e);
} finally{
    /* El finally simpere se ejecuta */
    console.log('Soy innevitable')
}

console.log(gravedad);