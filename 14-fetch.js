/* Fetch nos permite hacer peticiones http desde javascript */
/* Accedemos a un recurdso de un servidor */

/* JSON = Javascript Object Notation */
const peticion = fetch('https://jsonplaceholder.typicode.com/users/1') //No es instantaneo, se debe esperar
    .then(respuesta =>  respuesta.json() ) //Cuando se realize devolvera una respuesta en formato JSON
    .then(datos => console.log(datos)) //Esta promesa ya tiene los datos y los mostrara
    .catch(err => console.log(err)); //muentra erroe en caso de que exista
console.log(peticion);