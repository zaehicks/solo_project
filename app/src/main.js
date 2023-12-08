import "./style.css";

import palettesData from "../palette.json";

import { v4 as uuidv4 } from "uuid";

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);
  const uniqueId = uuidv4();
  formObj.uniqueId = uniqueId;
  console.log(formObj);
  localStorage.setItem(uniqueId, JSON.stringify(formObj));
  const div = document.createElement("div");
  div.className = "divContainer";
  div.dataset.uniqueKey = uniqueId;
  div.innerHTML = `<div class="palette">
    <h3 class="custom_palette">${formObj.title}</h3>
    <div class = "paletteColor">
      <div class= "colorpal">
      <div class= "colorpalBack">
        <p class="text-examples" style="background-color: ${formObj.color1}"> Text &nbsp;<span>Example 1</span></p>
      </div>
        <button class="copy-button" data-color='${formObj.color1}'>Copy ${formObj.color1}</button>
    </div>
      <div class = "colorpal">
        <div class= "colorpalBack">
          <p class= "text-examples" style="background-color: ${formObj.color2}"> Text &nbsp;<span>Example 2</span></p>
        </div>
        <button class="copy-button" data-color='${formObj.color2}'>Copy ${formObj.color2}</button>
      </div>
      <div class = "colorpal">
        <div class= "colorpalBack">
        <p class= "text-examples" style="background-color: ${formObj.color3}"> Text &nbsp;<span>Example 3</span></p>
        </div>
        <button class="copy-button" data-color='${formObj.color3}'>Copy ${formObj.color3}</button>
      </div>
    <div>
    <button class="delete-button">Delete Palette</button>
    <div class="temperature-banner neutral">${formObj.temperature}</div>
    </div>
    </div>
</div>
`;
  const paletteContainer = document.getElementById("paletteContainer");
  paletteContainer.prepend(div);

  addCopyButtonListeners();
};

const handleRemoveSubmit = (e) => {
  e.preventDefault();
  if (e.target.className === "delete-button") {
    const paletteContainer = e.target.closest(".divContainer");

    if (paletteContainer) {
      const uniqueKey = paletteContainer.dataset.uniqueKey;

      paletteContainer.classList.add("pop-out");

      setTimeout(() => {
        const indexToRemove = palettesData.findIndex(
          (palette) => palette.uniqueKey === uniqueKey
        );
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
    palettesData.unshift(storedData);
  }
};




const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

const copyToClipboard = (text) => {
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = text;
  document.getElementById('paletteContainer').appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.getElementById('paletteContainer').removeChild(tempTextArea);
};

const getPalettes = () => {
  const paletteContainer = document.getElementById("paletteContainer");
  palettesData.forEach((palette) => {
    const div = document.createElement("div");
    const uniqueId = palette.uniqueId;
    div.dataset.uniqueKey = uniqueId;
    div.className = "divContainer";   
    div.innerHTML = `<div class="palette">
    <h3 class="custom_palette">${palette.title}</h3>
    <div class = "paletteColor">
      <div class= "colorpal">
      <div class= "colorpalBack">
        <p class="text-examples" style="background-color: ${palette.color1}"> Text &nbsp;<span>Example 1</span></p>
      </div>
        <button class="copy-button" data-color="${palette.color1}">Copy ${palette.color1}</button>
    </div>
      <div class = "colorpal">
        <div class= "colorpalBack">
          <p class= "text-examples" style="background-color: ${palette.color2}"> Text &nbsp;<span>Example 2</span></p>
        </div>
        <button class="copy-button" data-color="${palette.color2}">Copy ${palette.color2}</button>
      </div>
      <div class = "colorpal">
        <div class= "colorpalBack">
        <p class= "text-examples" style="background-color: ${palette.color3}"> Text &nbsp;<span>Example 3</span></p>
        </div>
        <button class="copy-button" data-color="${palette.color3}">Copy ${palette.color3}</button>
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

const addCopyButtonListeners = () => {
  const copyButtons = document.querySelectorAll(".copy-button");
  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const colorCode = button.dataset.color;
      copyToClipboard(colorCode);
      button.innerText = `Copied! :) ${colorCode}`;
    });
  });
};

const main = () => {
  addUserPalettes();
  getPalettes();
  document.getElementById("paletteContainer").addEventListener("click", handleRemoveSubmit);
  addCopyButtonListeners();

};

main();


