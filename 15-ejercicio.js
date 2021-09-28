const $btnCat = document.querySelector('#btnCat');
const $imgCats = document.querySelector('#imgCats');

$btnCat.addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp => resp.json() )
    .then(data => {
        console.log(data);
        const img = document.createElement('img'); 
        img.src = data[0].url;
        img.width = '300';
        document.querySelector('body').appendChild(img);
        
    })
})

/*  Desestructuracion 
    Se usa para extrar elementos de un arreglo u objeto
        const [cat] = data;
        const {url} = cat;
        console.log(cat)
        $imgCats.src = url; */