const colorBtn = document.getElementById("color-btn");
const rainbowBtn = document.getElementById("rainbow-btn");
const eraserBtn = document.getElementById("eraser-btn");
const clearBtn = document.getElementById("clear-btn");
const sizeValue = document.getElementById("size-value");
const sizeSlider = document.getElementById("size-slider");
const canvas = document.getElementById("canvas");
const canvasElement = document.createElement("div");

sizeSlider.addEventListener("input", function () {
  sizeValue.textContent = `${sizeSlider.value} x ${sizeSlider.value}`;
});
