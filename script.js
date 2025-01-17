function createGrid(size) {
    const container = document.querySelector(".container");
    removeGrid(container);
    const sideSize = 960 / size;
    for (let i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.classList.toggle("box");
            div.style.width = sideSize + "px";
            div.style.height = sideSize + "px";
            container.append(div);
        }
    }
}

function removeGrid(container) {
    while(container.firstChild) {
        container.lastChild.remove();
    }
}

createGrid(16);

const boxList = document.querySelectorAll(".box");
boxList.forEach((box) => {
    box.addEventListener("mouseenter", (e) => {
        e.target.classList.toggle("hover");
    });
    box.addEventListener("mouseleave", (e) => {
        e.target.classList.toggle("hover");
    });
});

function setGridSize() {
    const size = prompt("How many boxes per side?", 16);
    createGrid(size);
}

document.querySelector(".grid-button").addEventListener("click", setGridSize);