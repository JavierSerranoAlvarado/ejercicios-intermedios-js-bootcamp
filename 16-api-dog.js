const $btnDog = document.querySelector('#btnDog');
const $imgDog = document.querySelector('#imgDog');
$imgDog.width = '300';

$btnDog.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breed/pug/images/random')
        .then(data => data.json())
        .then(data => {
            $imgDog.src = data.message;
        });
});


/* const API = 'https://rickandmortyapi.com/api/character/'
const rickAndMorty = async (url_api) =>{
    try{
    const resp1 = await fetch(url_api);
    const dato1 = await resp1.json();
    const resp2 = await fetch(`${url_api}${dato1.results[0].id}`)
    const dato2 = await resp2.json();
    const resp3 = await fetch(`${dato2.origin.url}`)
    const dato3 = await resp3.json();

    console.log(`Caracteres disponibles: ${dato1.info.count}`);
    console.log(`Caracter seleccionado: ${dato2.name}`);
    console.log(`Es de la dimension: ${dato3.dimension}`);
    $imgDog.src = dato2.image;
    } catch (error){
        console.error(`El error es: ${error}`);
    }
} 

rickAndMorty(API); */