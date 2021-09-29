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
    const dato1 = await fetch(url_api).then(data => data.json());
    const dato2 = await fetch(`${url_api}${dato1.results[0].id}`).then(data => data.json());
    const dato3 = await fetch(`${dato2.origin.url}`).then(data => data.json());

    console.log(`Caracteres disponibles: ${dato1.info.count}`);
    console.log(`Caracter seleccionado: ${dato2.name}`);
    console.log(`Es de la dimension: ${dato3.dimension}`);
    $imgDog.src = dato2.image;
    } catch (error){
        console.error(`El error es: ${error}`);
    }
} 

rickAndMorty(API); */