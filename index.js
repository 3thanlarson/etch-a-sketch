const gridContainer = document.getElementById("grid-container");

let gridWidth = 16;

for (let j = 0; j < gridWidth; j++) {
    const newGridLine = document.createElement("div");
    newGridLine.style.display = "flex";
    newGridLine.style.flexDirection = "row";
    gridContainer.appendChild(newGridLine);
    for (let i = 0; i < gridWidth; i++) {
        const newGridSquare = document.createElement("div");
        newGridLine.appendChild(newGridSquare);
        newGridSquare.style.display = "flex";
        newGridSquare.style.padding = 250/gridWidth + "px";
        newGridSquare.style.border = "solid, black"
    }
}