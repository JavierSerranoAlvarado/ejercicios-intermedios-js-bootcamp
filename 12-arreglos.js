/* arreglos */

let lenguajes = [
    "JS", "Java", "Go", "Ruby", "Cobol",
    "C++", "C#", "R","Scala", "Swift"
  ];
  // forEach  Sirve para reccorrer cada elemento de un arreglo.

  document.write("<ul>")
  lenguajes.forEach( function(lenguaje, index){  //Funciones anónimas, ejecutan al momento
    document.write(`<li>${index} - ${lenguaje} </li>`)
  });
  document.write("</ul>`");
  
  // Map Crea un nurvo arreglo con los resultados.

  let numeros = [2, 3, 4, 27, 19, 12];
  let numeros2 = numeros.map(function(numero){
    return numero * 2;
  });
  console.log(numeros);
  console.log(numeros2);
  
  // includes identifica si un elemento está presente en un arreglo y devuelve un booleano
  
  
  console.log(lenguajes.includes("PHP"));
  console.log(!lenguajes.includes("Python"));
  
  // filter crea un nuevo arreglo con los elementos que cumplan con la condición determinada
 
  let filtrados = numeros.filter(function(numero){
    if(numero > 10){
      return numero
    }
  });
  console.log(filtrados);
