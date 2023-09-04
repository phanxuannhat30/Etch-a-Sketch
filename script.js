const ctn = document.querySelector("#container");
const btn = document.querySelector(".newGrid");

function createGrid(x) {
    ctn.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    ctn.style.gridTemplateRows = `repeat(${x}, 1fr)`;
    const grid = ctn.querySelectorAll("div")
    grid.forEach((div) => div.remove());
    for (let i = 0; i < x*x; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "grid");
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    })
    ctn.append(square);
    }
};

function newGrid() {
    const z = prompt("Number of squares per side?", "");
    if (z >= 2 && z <= 100) {
        createGrid(z);
    } else {
        alert("ERROR 404");
    }
};

btn.addEventListener("click", newGrid);





