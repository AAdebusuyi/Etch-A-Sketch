// color picker functionality
const colorPicker = document.getElementById("color-picker");
const canvas = document.getElementById("canvas");

colorPicker.addEventListener("input", () => {
  const colorChosen = colorPicker.value;
  canvas.style.backgroundColor = colorChosen;
});

// color functionality
const colorBtn = document.getElementById("color-btn");
colorBtn.onclick = (e) => {
  console.log(e.target);
};

//rainbow functionality
const rainbowBtn = document.getElementById("rainbow-btn");
rainbowBtn.onclick = (e) => {
  console.log(e.target);
};

//eraser functionality
const eraserBtn = document.getElementById("eraser-btn");
eraserBtn.onclick = (e) => {
  console.log(e.target);
};

// clear functionality
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", () => {
  location.reload();
});

// slider functionality
const sizeValue = document.getElementById("size-value");
const sizeSlider = document.getElementById("size-slider");

sizeSlider.addEventListener("input", () => {
  sizeValue.innerHTML = `${sizeSlider.value} x ${sizeSlider.value}`;
});
