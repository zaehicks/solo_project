import "./style.css";

import palettesData from "../palette.json";

import { v4 as uuidv4 } from "uuid";

// console.log(uuidv4());

const handleSubmit = (e) => {
  e.preventDefault()
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);
  const uniqueId = uuidv4()
  formObj.uniqueId = uniqueId;
  localStorage.setItem(uniqueId, JSON.stringify(formObj))
  console.log(formObj)
  const div = document.createElement("div");
    div.className = "divContainer"
    div.dataset.uniqueKey = uniqueId;
    div.innerHTML = `<div class="palette">
    <h3 class="custom_palette">${formObj.title}</h3>
    <div class = "paletteColor">
      <div class= "colorpal">
      <div class= "colorpalBack">
        <p class="text-examples" style="background-color: ${formObj.color1}"> Text Example 1</p>
      </div>
        <button class="copy-button">Copy ${formObj.color1}</button>
    </div>
      <div class = "colorpal">
        <div class= "colorpalBack">
          <p class= "text-examples" style="background-color: ${formObj.color2}"> Text Example 2</p>
        </div>
        <button class="copy-button">Copy ${formObj.color2}</button>
      </div>
      <div class = "colorpal">
        <div class= "colorpalBack">
        <p class= "text-examples" style="background-color: ${formObj.color3}"> Text Example 3</p>
        </div>
        <button class="copy-button">Copy ${formObj.color3}</button>
      </div>
    <div>
    <button class="delete-button">Delete Palette</button>
    <div class="temperature-banner neutral">${formObj.temperature}</div>
    </div>
    </div>
</div>
`
const paletteContainer = document.getElementById("paletteContainer");
paletteContainer.prepend(div);
};


const handleRemoveSubmit = (e) => {
  e.preventDefault()
  if (e.target.className === "delete-button") {
    const paletteContainer = e.target.closest('.divContainer');

    if (paletteContainer) {
      const uniqueKey = paletteContainer.dataset.uniqueKey;

      paletteContainer.classList.add('pop-out');

      setTimeout(() => {
        const indexToRemove = palettesData.findIndex(palette => palette.uniqueKey === uniqueKey);
        if (indexToRemove !== -1) {
          palettesData.splice(indexToRemove, 1);
        }

        localStorage.removeItem(uniqueKey);

        paletteContainer.remove();
      }, 500); // Animation time adjuster (for deleting palette)
    }
  }
  
};

const addUserPalettes = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const storedData = JSON.parse(localStorage.getItem(key));
    palettesData.unshift(storedData)
    console.log(storedData)
  }
  
}


const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);




const getPalettes = () => {
  const paletteContainer = document.getElementById("paletteContainer");
  palettesData.forEach((palette) => {
    const div = document.createElement("div");
    const uniqueId = palette.uniqueId
    div.dataset.uniqueKey = uniqueId;
    div.className = "divContainer"
    div.innerHTML = `<div class="palette">
    <h3 class="custom_palette">${palette.title}</h3>
    <div class = "paletteColor">
      <div class= "colorpal">
      <div class= "colorpalBack">
        <p class="text-examples" style="background-color: ${palette.color1}"> Text Example 1</p>
      </div>
        <button class="copy-button">Copy ${palette.color1}</button>
    </div>
      <div class = "colorpal">
        <div class= "colorpalBack">
          <p class= "text-examples" style="background-color: ${palette.color2}"> Text Example 2</p>
        </div>
        <button class="copy-button">Copy ${palette.color2}</button>
      </div>
      <div class = "colorpal">
        <div class= "colorpalBack">
        <p class= "text-examples" style="background-color: ${palette.color3}"> Text Example 3</p>
        </div>
        <button class="copy-button">Copy ${palette.color3}</button>
      </div>
    <div>
    <button class="delete-button">Delete Palette</button>
    <div class="temperature-banner neutral">${palette.temperature}</div>
    </div>
    </div>
</div>
`;
    paletteContainer.appendChild(div);
  });
};



const main = () => {
addUserPalettes()
getPalettes();
document.getElementById("paletteContainer").addEventListener('click', handleRemoveSubmit);
}

main()