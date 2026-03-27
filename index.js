const gridContainer = document.getElementById("grid-container");

let gridWidth = 16;

function createGrid(newGridWidth) {
    for (let j = 0; j < newGridWidth; j++) {
        const newGridLine = document.createElement("div");
        newGridLine.style.display = "flex";
        newGridLine.style.flexDirection = "row";
        gridContainer.appendChild(newGridLine);
        for (let i = 0; i < newGridWidth; i++) {
            const newGridSquare = document.createElement("div");
            newGridSquare.setAttribute('id', "grid-square");
            newGridLine.appendChild(newGridSquare);
            newGridSquare.style.display = "flex";
            newGridSquare.style.padding = 250/newGridWidth + "px";
            newGridSquare.style.border = "solid, black"
        }
    }
}

createGrid(gridWidth);

const gridSquares = document.querySelectorAll("#grid-square");
//Add event listener for hover effect
gridSquares.forEach(gridSquares => {
    gridSquares.addEventListener('mouseover', function () {
        this.style.backgroundColor = "black";
    });
});
