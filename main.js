import './style.css';
import 'https://kit.fontawesome.com/1b793eedb9.js';
import data from './data/data.json';
// import { allcconsole } from 'https://violaterz.github.io/allcconsole/main.js'

const app = document.querySelector('.app');

const header_HTML = `
<div class="img-container">
    <img src="img/logo.svg" alt="" class="logo">
    <span class="span-version">${data[0].name} ${data[0].version}</span>
</div>
`;

app.insertAdjacentHTML('afterbegin', header_HTML);

data.forEach((e) => {
    const version_class = e.version.toLowerCase().split(' ').join('-')
    const button_HTML = `
    <button class="button-download ${version_class}">
        <i class="fa-solid fa-file-zipper"></i> Download ${e.version}
    </button>
    `

    app.querySelector('.download-container').insertAdjacentHTML('beforeend', button_HTML);

    app.querySelector(`.${version_class}`).addEventListener('click', () => {
        window.open(e.downloadLink);
    })
});
