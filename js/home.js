import '../css/home.css';
import '../utils/fontawesome';

const app = document.querySelector('#app');

const appHTML = `        
<div class="content">
<h1>PHASE CLIENT</h1>
<p>Minecraft 1.8.9 PvP Client, <br>with FPS boost and a lot of features!</p>
<div>
    <button type="button" onclick="window.open('https://www.dropbox.com/s/yl9jctru3kxu7qa/phase-launcher-0.1.1.exe?dl=1')"><i class="fa-brands fa-windows"></i> Download Latest</button>
</div>
</div>`

app.insertAdjacentHTML('beforeend', appHTML)