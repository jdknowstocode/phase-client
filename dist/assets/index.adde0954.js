import"https://kit.fontawesome.com/1b793eedb9.js";const c=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}};c();var i=[{name:"PhaseClient",version:"BETA 3",gameVersions:["1.8.9"],downloadLink:"https://www.dropbox.com/s/xll5crll0iis8aw/phaseclient-beta3.zip?dl=0"}];const l=document.querySelector(".app"),d=`
<div class="img-container">
    <img src="img/logo.svg" alt="" class="logo">
    <span class="span-version">${i[0].name} ${i[0].version}</span>
</div>
`;l.insertAdjacentHTML("afterbegin",d);i.forEach(n=>{const t=n.version.toLowerCase().split(" ").join("-"),r=`
    <button class="button-download ${t}">
        <i class="fa-solid fa-file-zipper"></i> Download ${n.version}
    </button>
    `;l.querySelector(".download-container").insertAdjacentHTML("beforeend",r),l.querySelector(`.${t}`).addEventListener("click",()=>{window.open(n.downloadLink)})});
