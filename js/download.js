import '../css/download.css';
import '../utils/fontawesome';

import data from '../data/data.json';

const app = document.querySelector('#app');

data.forEach(data => {
    const html = `
    <div class="item">
        <i class="fa-solid fa-file"></i>
        <span class="name">${data.name} ${data.version}</span>
        <span class="size">${data.fileSize}</span>
        <button class="download" onclick="window.open('${data.downloadLink}')"><i class="fa-solid fa-cloud-download"></i> Download</button>
    </div>
    `

    app.querySelector('.container').insertAdjacentHTML('beforeend', html);
})


const appHTML = `
`

app.insertAdjacentHTML('beforeend', appHTML)