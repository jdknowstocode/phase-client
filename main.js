import './style.css';
import logoSrc from './img/logo.svg';
import 'https://kit.fontawesome.com/1b793eedb9.js';
import data from './data/data.json';
// import { allcconsole } from 'https://violaterz.github.io/allcconsole/main.js'

const app = document.querySelector('.app');

const header_HTML = `
<div class="img-container">
    <img src="${logoSrc}" alt="" class="logo">
    <span class="span-version">${data[0].published ? data[0].name : data[1].name} ${data[0].published ? data[0].version : data[1].version}</span>
</div>
`;

app.insertAdjacentHTML('afterbegin', header_HTML);

data.forEach((client) => {
    const version = client.version.toLowerCase().split(' ').join('-')
    const button_HTML = `
    <button class="button-download" data-version="${version}" ${!client.published ? 'title="Not released yet!"' : ''} ${!client.published ? 'disabled' : ''}>
        <i class="fa-solid ${version.includes('beta') ? 'fa-file-zipper' : 'fa-download'}"></i> Download ${client.version}
    </button>
    `

    app.querySelector('.download-container').insertAdjacentHTML('beforeend', button_HTML);

    app.querySelector(`.button-download[data-version="${version}"]`).addEventListener('click', () => {
        window.open(client.downloadLink);
    })
});
