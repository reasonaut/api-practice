import './style.css';

// load random cat result
const img = document.querySelector('#cat-result');
fetch(
    'https://api.giphy.com/v1/gifs/translate?api_key=q1sHVzaFV2CrC3UdjbeLcwNsYtGCBwGO&s=cats',
    { mode: 'cors' }
)
    .then((response) => response.json())
    .then((response) => {
        img.src = response.data.images.original.url;
    });
// translator search
const searchResultImg = document.querySelector('#search-result');
const searchInput = document.querySelector('#translate-input');
searchInput.value = '';
const submitBtn = document.querySelector('#translate-submit');

function queryApi() {
    fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=q1sHVzaFV2CrC3UdjbeLcwNsYtGCBwGO&s=${searchInput.value}`,
        { mode: 'cors' }
    )
    .then(response => response.json())
    .then(response => {
        searchResultImg.style.display = 'block';
        console.log(response.data.images.downsized_large.url);
        searchResultImg.src = response.data.images.downsized_large.url;
    })
    .catch(error => {
        console.error('Error:', error);
    })
    
}
submitBtn.addEventListener('click', queryApi);
