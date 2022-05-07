import './style.css';
import logoSrc from './img/logo.svg';
import 'https://kit.fontawesome.com/1b793eedb9.js';
import data from './data/data.json';

// import { allcconsole } from 'https://violaterz.github.io/allcconsole/main.js'

const app = document.querySelector('.app');

const header_HTML = `
<div class="img-container">
    <img src="${logoSrc}" alt="" class="logo">
    <span class="span-version">${data[0].published ? data[0].name : data.filter(e => e.published === true)[0].name} ${data[0].published ? data[0].version : data.filter(e => e.published === true)[0].version}</span>
</div>
`;

const meta_HTML = `
<meta property="og:title" content="Download PhaseClient" />
<meta property="og:description" content="The all new Phase Client is now available to download!" />
<meta property="og:image" content="${logoSrc}" />
<meta content="#1879c9" data-react-helmet="true" name="theme-color" />
`

document.head.insertAdjacentHTML('afterbegin', meta_HTML);
app.insertAdjacentHTML('afterbegin', header_HTML);

data.forEach((client) => {
    const version = client.version.toLowerCase().split(' ').join('-');
    const formatDate = function (date, locale) {
        const calcDaysPassed = (date1, date2) =>
        Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
      
        const daysPassed = calcDaysPassed(new Date(), date);
        console.log(daysPassed);
      
        if (daysPassed === 0) return 'Today';
        if (daysPassed === 1) return 'Yesterday';
        if (daysPassed <= 7) return `${daysPassed} days ago`;
      
        // const day = `${date.getDate()}`.padStart(2, 0);
        // const month = `${date.getMonth() + 1}`.padStart(2, 0);
        // const year = date.getFullYear();
        // return `${day}/${month}/${year}`;
        
        return new Intl.DateTimeFormat(locale).format(date);
    };

    const list_HTML = `
    <div class="download-item">
        <i class="fa-solid fa-file-zipper file-icon"></i>
        <span class="span-version">${client.name} ${client.version}</span>
        <span class="span-updated">Last Updated ${formatDate(new Date(client.lastUpdated), 'en-UK')}</span>
        <span class="span-size">${client.fileSize}</span>
        <button class="button-download" data-version="${version}" ${!client.published ? 'disabled' : ''} ${!client.published ? 'title="Not yet released!"' : ''}>
            <i class="fa-solid fa-cloud-arrow-down"></i> Download
        </button>
    </div>
    `

    app.querySelector('.download-container').insertAdjacentHTML('beforeend', list_HTML);
    
    app.querySelector(`.button-download[data-version="${version}"]`).addEventListener('click', () => {
        window.open(client.downloadLink);
    })

});

app.querySelector('.download-container').insertAdjacentHTML('beforeend', `<span class="span-credit">Powered by <i class="fa-brands fa-dropbox"></i> Dropbox</span>`);

console.log(new Date().toISOString())