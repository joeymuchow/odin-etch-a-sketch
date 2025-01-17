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
            e.target.classList.toggle("hover");
        });
        box.addEventListener("mouseleave", (e) => {
            e.target.classList.toggle("hover");
        });
    });
}

function removeGrid(container) {
    while(container.firstChild) {
        container.lastChild.remove();
    }
}

createGrid(16);

function setGridSize() {
    const size = prompt("How many boxes per side?", 16) || currentSize;
    currentSize = size;
    createGrid(size);
}

document.querySelector(".grid-button").addEventListener("click", setGridSize);