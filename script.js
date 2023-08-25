// color picker functionality
const colorPicker = document.getElementById("color-picker");
let currentColor = colorPicker.value;
const canvas = document.getElementById("canvas");

colorPicker.addEventListener("input", () => {
  currentColor = colorPicker.value;
});

// color functionality
const colorBtn = document.getElementById("color-btn");
colorBtn.onclick = (e) => {
  colorBtn.style.backgroundColor = currentColor;
};

//rainbow functionality

const rainbowBtn = document.getElementById("rainbow-btn");
let isRainbowMode = false;
rainbowBtn.addEventListener("click", () => {
  isRainbowMode = !isRainbowMode;
  if (isRainbowMode) {
    rainbowBtn.style.backgroundColor = "#6544A2";
  } else {
    rainbowBtn.style.backgroundColor = "";
  }
});

gridCells.forEach((cell) => {
  cell.addEventListener("mouseover", () => {
    if (isRainbowMode) {
      rainbowBtn.style.backgroundColor = "#6544A2";
      cell.style.backgroundColor = randomRGB();
    } else {
      rainbowBtn.style.backgroundColor = "";
      cell.style.backgroundColor = "";
    }
  });
});

function randomRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
}

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
//select all elements with class of grid-cell
const gridCells = document.querySelectorAll(".grid-cell");

sizeSlider.addEventListener("input", () => {
  const cellSizeValue = sizeSlider.value;
  const cellSize = 500 / cellSizeValue; // to get appropriate cell sizes since width and height are defined as 500px

  //dynamically updates slider value
  sizeValue.innerHTML = `${cellSizeValue} x ${cellSizeValue}`;
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

  // loop to create cells in the grid
  for (i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-cell");
    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = currentColor;
    });
    canvas.appendChild(div);
  }

  document.documentElement.style.setProperty("--grid-columns", size);
  document.documentElement.style.setProperty("--grid-rows", size);
}
