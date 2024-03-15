const configBtn = document.querySelector("button");
const gridContainer = document.querySelector(".grid-container");

function createGrid(col=16,row=16){
    for(let i = 1; i <= col; i++ ){
        const gridCol = document.createElement("div");
        gridCol.classList.add("grid-col");
        gridContainer.appendChild(gridCol);

        for(let j = 1; j <= row; j++) {
            const gridRow = document.createElement("div");
            gridRow.classList.add("grid-row");
            gridCol.appendChild(gridRow);
        }
    }
}

createGrid();

const gridCellList = gridContainer.querySelectorAll(".grid-row");
gridCellList.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "red";
    });
});

configBtn.addEventListener('click', () => {
    let userCol = prompt("Enter column: \nlimit 100");
    if(userCol > 100 ) {
        userCol = prompt("Plese enter only integer Numbers range 1-100!!");
        console.log(userCol);
    }
    let userRow = prompt("Enter row: \n limit 100");
    if(userRow > 100 ) {
        userRow = prompt("Plese enter only integer Numbers range 1-100!!");
        console.log(userRow);
    }

})

