/* Una forma de estructurar informacion en pares */
const persona = {
    nombre: 'Julian',
    apellidos: 'Sanchez Perez',
    correo: 'julian@sancehz'

}

const persona2 = ['Julian', 'Sanchez', 'julian@sanchez']
console.log(persona[2]);

const articulos =[
    {
        id:1,
        nombre: 'Alimento para perros',
        precio: 30.50
    },
    {
        id:2,
        nombre: 'Alimento para gatos',
        precio: 60.25
    },
    {
        id:3,
        nombre: 'Alimento para Aves',
        precio:12.55
    }
]

document.write(persona.nombre);

function buscandoNombre () {
let nombreBuscado;

const siExiste = articulos.find((articulo)=>articulo.nombre = nombreBuscado );

if(siExiste){
    alert(`Si existe ${nombreBuscado}`);
} else{
    alert(`No existe ${nombreBuscado}`);
}

}