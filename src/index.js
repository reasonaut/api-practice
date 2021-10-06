import './style.css';

// load random cat result
const img = document.querySelector('#cat-result');
async function getCatGiphy() {
    const response = await fetch(
        'https://api.giphy.com/v1/gifs/translate?api_key=q1sHVzaFV2CrC3UdjbeLcwNsYtGCBwGO&s=cats',
        { mode: 'cors' }
    );

    const data = await response.json();

    img.src = data.data.images.original.url;
}
getCatGiphy();

const searchResultImg = document.querySelector('#search-result');
const searchInput = document.querySelector('#translate-input');
searchInput.value = '';
const submitBtn = document.querySelector('#translate-submit');

async function queryApi() {
    try {
        const response = await fetch(
            `https://api.giphy.com/v1/gifs/translate?api_key=q1sHVzaFV2CrC3UdjbeLcwNsYtGCBwGO&s=${searchInput.value}`,
            { mode: 'cors' }
        );

        const data = await response.json();
        searchResultImg.style.display = 'block';
        searchResultImg.src = data.data.images.downsized_large.url;
    } catch (error) {
        console.error('Error', error);
    }
}
submitBtn.addEventListener('click', queryApi);