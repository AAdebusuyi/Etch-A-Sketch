// default values of the application
const DEFAULT_COLOR = "#cccccc";
const DEFAULT_MODE = "color";
const DEFAULT_SIZE = 16;

// variables that store the current state of the application.
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = 16;

//functions that update the app's current state based on 'new' arguments
function setCurrentColor(newColor) {
  currentColor = newColor;
}

function setCurrentMode(newMode) {
  activateButton(newMode);
  currentMode = newMode;
}

function setCurrentSize(newSize) {
  currentSize = newSize;
}

//my own activateButton
function activateButton(newMode) {
  // Remove the "active" class from buttons that are not in the current mode
  if (currentMode !== "rainbow") {
    rainbowBtn.classList.remove("active");
  }
  if (currentMode !== "color") {
    colorBtn.classList.remove("active");
  }
  if (currentMode !== "eraser") {
    eraserBtn.classList.remove("active");
  }

  // Add the "active" class to the button corresponding to the new mode
  if (newMode === "rainbow") {
    rainbowBtn.classList.add("active");
  } else if (newMode === "color") {
    colorBtn.classList.add("active");
  } else if (newMode === "eraser") {
    eraserBtn.classList.add("active");
  }
}

function reloadCanvas() {
  clearCanvas();
  setUpCanvas(currentSize);
}

function clearCanvas() {
  canvas.innerHTML = "";
}

function setUpCanvas(size) {
  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("canvas-cell");
    div.addEventListener("mousedown", changeColor);
    div.addEventListener("mouseover", changeColor);
    canvas.appendChild(div);
  }
}

function changeColor(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  if (currentMode === "rainbow") {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (currentMode === "color") {
    e.target.style.backgroundColor = currentColor;
  } else if (currentMode === "eraser") {
    e.target.style.backgroundColor = "#fefefe";
  }
}
//dom selectors
const colorPicker = document.getElementById("color-picker");
const colorBtn = document.getElementById("color-btn");
const rainbowBtn = document.getElementById("rainbow-btn");
const eraserBtn = document.getElementById("eraser-btn");
const clearBtn = document.getElementById("clear-btn");
const sizeValue = document.getElementById("size-value");
const slider = document.getElementById("slider");
const canvas = document.getElementById("canvas");

colorPicker.oninput = (e) => setCurrentColor(e.target.value);
colorBtn.onclick = () => setCurrentMode("color");
rainbowBtn.onclick = () => setCurrentMode("rainbow");
eraserBtn.onclick = () => setCurrentMode("eraser");
clearBtn.onclick = () => reloadCanvas();
slider.onmousemove = (e) => updateSizeValue(e.target.value);
slider.onchange = (e) => changeSize(e.target.value);

// checks globally if the mouse is actually being held down
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeSize(value) {
  updateSizeValue(value);
  reloadCanvas();
}

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`;
}
