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
const gridCells = document.querySelectorAll(".grid-cell");

sizeSlider.addEventListener("input", () => {
  const cellSizeValue = sizeSlider.value;
  const cellSize = 500 / cellSizeValue; // to get appropriate cell sizes since width and height are defined as 500px

  sizeValue.innerHTML = `${cellSizeValue} x ${cellSizeValue}`; //dynamically updates slider value
  createGrid(cellSizeValue);

  // set width and height of each cell according to cellSize and convert to px
  gridCells.forEach((cell) => {
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
  });
});

// grid generation
function createGrid(size) {
  canvas.innerHTML = "";

  // loop to create grid cells
  for (i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-cell");
    canvas.appendChild(div);
  }

  document.documentElement.style.setProperty("--grid-columns", size);
  document.documentElement.style.setProperty("--grid-rows", size);
}
