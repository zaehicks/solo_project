(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const s=[{uuid:"5affd4e4-418d-4b62-beeb-1c0f7aaff753",title:"Marcy *Defaults*",color1:"#c92929",color2:"#2f5a8b",color3:"#327a5f",temperature:"neutral"},{uuid:"32521ef4-d64c-4906-b06d-f3d0d6b16e0f",title:"Sleek and Modern *Defaults*",color1:"#3A5199",color2:"#2F2E33",color3:"#D5D6D2",temperature:"cool"},{uuid:"8b144d62-faa7-4226-87e1-096d7c1bedc7",title:"Winter Reds *Defaults*",color1:"#A10115",color2:"#C0B2B5",color3:"#600A0A",temperature:"warm"}];let r;const m=new Uint8Array(16);function y(){if(!r&&(r=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(m)}const l=[];for(let t=0;t<256;++t)l.push((t+256).toString(16).slice(1));function v(t,e=0){return l[t[e+0]]+l[t[e+1]]+l[t[e+2]]+l[t[e+3]]+"-"+l[t[e+4]]+l[t[e+5]]+"-"+l[t[e+6]]+l[t[e+7]]+"-"+l[t[e+8]]+l[t[e+9]]+"-"+l[t[e+10]]+l[t[e+11]]+l[t[e+12]]+l[t[e+13]]+l[t[e+14]]+l[t[e+15]]}const b=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),i={randomUUID:b};function g(t,e,o){if(i.randomUUID&&!e&&!t)return i.randomUUID();t=t||{};const c=t.random||(t.rng||y)();if(c[6]=c[6]&15|64,c[8]=c[8]&63|128,e){o=o||0;for(let n=0;n<16;++n)e[o+n]=c[n];return e}return v(c)}const x=t=>{t.preventDefault();const e=new FormData(u),o=Object.fromEntries(e),c=g();o.uniqueId=c,console.log(o),localStorage.setItem(c,JSON.stringify(o));const n=document.createElement("div");n.className="divContainer",n.dataset.uniqueKey=c,n.innerHTML=`<div class="palette">
    <h3 class="custom_palette">${o.title}</h3>
    <div class = "paletteColor">
      <div class= "colorpal">
      <div class= "colorpalBack">
        <p class="text-examples" style="background-color: ${o.color1}"> Text &nbsp;<span>Example 1</span></p>
      </div>
        <button class="copy-button" data-color='${o.color1}'>Copy ${o.color1}</button>
    </div>
      <div class = "colorpal">
        <div class= "colorpalBack">
          <p class= "text-examples" style="background-color: ${o.color2}"> Text &nbsp;<span>Example 2</span></p>
        </div>
        <button class="copy-button" data-color='${o.color2}'>Copy ${o.color2}</button>
      </div>
      <div class = "colorpal">
        <div class= "colorpalBack">
        <p class= "text-examples" style="background-color: ${o.color3}"> Text &nbsp;<span>Example 3</span></p>
        </div>
        <button class="copy-button" data-color='${o.color3}'>Copy ${o.color3}</button>
      </div>
    <div>
    <button class="delete-button">Delete Palette</button>
    <div class="temperature-banner neutral">${o.temperature}</div>
    </div>
    </div>
</div>
`,document.getElementById("paletteContainer").prepend(n),p()},f=t=>{if(t.preventDefault(),t.target.className==="delete-button"){const e=t.target.closest(".divContainer");if(e){const o=e.dataset.uniqueKey;e.classList.add("pop-out"),setTimeout(()=>{const c=s.findIndex(n=>n.uniqueKey===o);c!==-1&&s.splice(c,1),localStorage.removeItem(o),e.remove()},500)}}},C=()=>{for(let t=0;t<localStorage.length;t++){const e=localStorage.key(t),o=JSON.parse(localStorage.getItem(e));s.unshift(o)}},u=document.querySelector("form");u.addEventListener("submit",x);const h=t=>{const e=document.createElement("textarea");e.value=t,document.getElementById("paletteContainer").appendChild(e),e.select(),document.execCommand("copy"),document.getElementById("paletteContainer").removeChild(e)},E=()=>{const t=document.getElementById("paletteContainer");s.forEach(e=>{const o=document.createElement("div"),c=e.uniqueId;o.dataset.uniqueKey=c,o.className="divContainer",o.innerHTML=`<div class="palette">
    <h3 class="custom_palette">${e.title}</h3>
    <div class = "paletteColor">
      <div class= "colorpal">
      <div class= "colorpalBack">
        <p class="text-examples" style="background-color: ${e.color1}"> Text &nbsp;<span>Example 1</span></p>
      </div>
        <button class="copy-button" data-color="${e.color1}">Copy ${e.color1}</button>
    </div>
      <div class = "colorpal">
        <div class= "colorpalBack">
          <p class= "text-examples" style="background-color: ${e.color2}"> Text &nbsp;<span>Example 2</span></p>
        </div>
        <button class="copy-button" data-color="${e.color2}">Copy ${e.color2}</button>
      </div>
      <div class = "colorpal">
        <div class= "colorpalBack">
        <p class= "text-examples" style="background-color: ${e.color3}"> Text &nbsp;<span>Example 3</span></p>
        </div>
        <button class="copy-button" data-color="${e.color3}">Copy ${e.color3}</button>
      </div>
    <div>
    <button class="delete-button">Delete Palette</button>
    <div class="temperature-banner neutral">${e.temperature}</div>
    </div>
    </div>
</div>
`,t.appendChild(o)})},p=()=>{document.querySelectorAll(".copy-button").forEach(e=>{e.addEventListener("click",()=>{const o=e.dataset.color;h(o),e.innerText=`Copied! :) ${o}`})})},$=()=>{C(),E(),document.getElementById("paletteContainer").addEventListener("click",f),p()};$();
