const configBtn = document.querySelector("button");
const gridContainer = document.querySelector(".grid-container");

function createGrid(grid=16) {
    for (let i = 1; i <= grid; i++) {
        const gridCol = document.createElement("div");
        gridCol.classList.add("grid-col");
        gridContainer.appendChild(gridCol);

        for (let j = 1; j <= grid; j++) {
            const gridRow = document.createElement("div");
            gridRow.classList.add("grid-row");
            gridCol.appendChild(gridRow);
        }
    }
    const gridCellList = gridContainer.querySelectorAll(".grid-row");
    gridCellList.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "aqua";
        });
    });
}

function removeGrid() {
    let gridCols = gridContainer.querySelectorAll("div");
    gridCols.forEach((div) => div.remove());
}

function userGrid(){
    const gridSize = parseInt(prompt("Enter your desired GRID SIZE\nrange 1-10"));
    if(gridSize < 1 || gridSize > 100){
        alert("Please enter integer number 1-100 only")
    } else {
        removeGrid();
        createGrid(gridSize)
    };
}

createGrid();

configBtn.addEventListener('click', userGrid);


