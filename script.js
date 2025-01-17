let currentSize = 16;

function createGrid(size) {
    const container = document.querySelector(".container");
    removeGrid(container);
    // Since I have borders on the boxes I am removing about that amount of 
    // pixels from the width of the container, so we will get {size} number of 
    // boxes on each side
    const sideSize = (960 - 2 * size) / size;
    for (let i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.classList.toggle("box");
            div.style.width = sideSize + "px";
            div.style.height = sideSize + "px";
            container.append(div);
        }
    }
    const boxList = document.querySelectorAll(".box");
    boxList.forEach((box) => {
        box.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = `rgb(${getRandomRGBNumber()}, ${getRandomRGBNumber()}, ${getRandomRGBNumber()})`;
            if (Number(e.target.style.opacity) < 1) {
                e.target.style.opacity = Number(e.target.style.opacity) + 0.1;
            }
        });
    });
}

function getRandomRGBNumber() {
    return Math.floor(Math.random() * 256);
  }

function removeGrid(container) {
    while(container.firstChild) {
        container.lastChild.remove();
    }
}

createGrid(16);

function setGridSize() {
    const size = Number(prompt("How many boxes per side? 100 is the max, 1 is the min.", 16) || currentSize);
    if (Number.isInteger(size) && size <= 100 && size > 0) {
        currentSize = size;
        createGrid(size);
    } else {
        setGridSize();
    }
    
}

document.querySelector(".grid-button").addEventListener("click", setGridSize);