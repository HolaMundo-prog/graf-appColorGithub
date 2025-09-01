const redRange = document.getElementById("redRange");
const greenRange = document.getElementById("greenRange");
const blueRange = document.getElementById("blueRange");

const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

const colorBox = document.getElementById("colorBox");
const hexCode = document.getElementById("hexCode");
const colorPicker = document.getElementById("colorPicker");

function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map(x => {
    const hex = parseInt(x).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }).join("");
}

function updateColor() {
  const r = parseInt(redRange.value);
  const g = parseInt(greenRange.value);
  const b = parseInt(blueRange.value);

  redInput.value = r;
  greenInput.value = g;
  blueInput.value = b;

  const hex = rgbToHex(r, g, b);
  colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  hexCode.textContent = hex;
  colorPicker.value = hex;
}

function updateFromInputs() {
  redRange.value = redInput.value;
  greenRange.value = greenInput.value;
  blueRange.value = blueInput.value;
  updateColor();
}

function updateFromPicker() {
  const hex = colorPicker.value;
  const r = parseInt(hex.substr(1, 2), 16);
  const g = parseInt(hex.substr(3, 2), 16);
  const b = parseInt(hex.substr(5, 2), 16);

  redRange.value = r; redInput.value = r;
  greenRange.value = g; greenInput.value = g;
  blueRange.value = b; blueInput.value = b;

  colorBox.style.backgroundColor = hex;
  hexCode.textContent = hex;
}

[redRange, greenRange, blueRange].forEach(el => el.addEventListener("input", updateColor));
[redInput, greenInput, blueInput].forEach(el => el.addEventListener("input", updateFromInputs));
colorPicker.addEventListener("input", updateFromPicker);

updateColor();
