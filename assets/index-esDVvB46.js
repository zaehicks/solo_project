(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const r=[{uuid:"5affd4e4-418d-4b62-beeb-1c0f7aaff753",title:"Marcy *Defaults*",color1:"#c92929",color2:"#2f5a8b",color3:"#327a5f",temperature:"neutral"},{uuid:"32521ef4-d64c-4906-b06d-f3d0d6b16e0f",title:"Sleek and Modern *Defaults*",color1:"#3A5199",color2:"#2F2E33",color3:"#D5D6D2",temperature:"cool"},{uuid:"8b144d62-faa7-4226-87e1-096d7c1bedc7",title:"Winter Reds *Defaults*",color1:"#A10115",color2:"#C0B2B5",color3:"#600A0A",temperature:"warm"}];let s;const p=new Uint8Array(16);function m(){if(!s&&(s=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!s))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(p)}const c=[];for(let t=0;t<256;++t)c.push((t+256).toString(16).slice(1));function v(t,e=0){return c[t[e+0]]+c[t[e+1]]+c[t[e+2]]+c[t[e+3]]+"-"+c[t[e+4]]+c[t[e+5]]+"-"+c[t[e+6]]+c[t[e+7]]+"-"+c[t[e+8]]+c[t[e+9]]+"-"+c[t[e+10]]+c[t[e+11]]+c[t[e+12]]+c[t[e+13]]+c[t[e+14]]+c[t[e+15]]}const b=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),d={randomUUID:b};function y(t,e,o){if(d.randomUUID&&!e&&!t)return d.randomUUID();t=t||{};const l=t.random||(t.rng||m)();if(l[6]=l[6]&15|64,l[8]=l[8]&63|128,e){o=o||0;for(let n=0;n<16;++n)e[o+n]=l[n];return e}return v(l)}const g=t=>{t.preventDefault();const e=new FormData(u),o=Object.fromEntries(e),l=y();o.uniqueId=l,console.log(o),localStorage.setItem(l,JSON.stringify(o));const n=document.createElement("div");n.className="divContainer",n.dataset.uniqueKey=l,n.innerHTML=`<div class="palette">
    <h3 class="custom_palette">${o.title}</h3>
    <div class = "paletteColor">
      <div class= "colorpal">
      <div class= "colorpalBack">
        <p class="text-examples" style="background-color: ${o.color1}"> Text &nbsp;<span>Example 1</span></p>
      </div>
        <button class="copy-button">Copy ${o.color1}</button>
    </div>
      <div class = "colorpal">
        <div class= "colorpalBack">
          <p class= "text-examples" style="background-color: ${o.color2}"> Text &nbsp;<span>Example 2</span></p>
        </div>
        <button class="copy-button">Copy ${o.color2}</button>
      </div>
      <div class = "colorpal">
        <div class= "colorpalBack">
        <p class= "text-examples" style="background-color: ${o.color3}"> Text &nbsp;<span>Example 3</span></p>
        </div>
        <button class="copy-button">Copy ${o.color3}</button>
      </div>
    <div>
    <button class="delete-button">Delete Palette</button>
    <div class="temperature-banner neutral">${o.temperature}</div>
    </div>
    </div>
</div>
`,document.getElementById("paletteContainer").prepend(n)},f=t=>{if(t.preventDefault(),t.target.className==="delete-button"){const e=t.target.closest(".divContainer");if(e){const o=e.dataset.uniqueKey;e.classList.add("pop-out"),setTimeout(()=>{const l=r.findIndex(n=>n.uniqueKey===o);l!==-1&&r.splice(l,1),localStorage.removeItem(o),e.remove()},500)}}},x=()=>{for(let t=0;t<localStorage.length;t++){const e=localStorage.key(t),o=JSON.parse(localStorage.getItem(e));r.unshift(o)}},u=document.querySelector("form");u.addEventListener("submit",g);const h=()=>{const t=document.getElementById("paletteContainer");r.forEach(e=>{const o=document.createElement("div"),l=e.uniqueId;o.dataset.uniqueKey=l,o.className="divContainer",o.innerHTML=`<div class="palette">
    <h3 class="custom_palette">${e.title}</h3>
    <div class = "paletteColor">
      <div class= "colorpal">
      <div class= "colorpalBack">
        <p class="text-examples" style="background-color: ${e.color1}"> Text &nbsp;<span>Example 1</span></p>
      </div>
        <button class="copy-button">Copy ${e.color1}</button>
    </div>
      <div class = "colorpal">
        <div class= "colorpalBack">
          <p class= "text-examples" style="background-color: ${e.color2}"> Text &nbsp;<span>Example 2</span></p>
        </div>
        <button class="copy-button">Copy ${e.color2}</button>
      </div>
      <div class = "colorpal">
        <div class= "colorpalBack">
        <p class= "text-examples" style="background-color: ${e.color3}"> Text &nbsp;<span>Example 3</span></p>
        </div>
        <button class="copy-button">Copy ${e.color3}</button>
      </div>
    <div>
    <button class="delete-button">Delete Palette</button>
    <div class="temperature-banner neutral">${e.temperature}</div>
    </div>
    </div>
</div>
`,t.appendChild(o)})},C=()=>{x(),h(),document.getElementById("paletteContainer").addEventListener("click",f)};C();
