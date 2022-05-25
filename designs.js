// Select color input
// Select size input

//Declaring variables
let pixelCanvas = document.getElementById("pixelCanvas");
let gridHeight = document.getElementById("inputHeight");
let gridWidth = document.getElementById("inputWidth");
let sizePicker = document.getElementById("sizePicker");
let colorPicker = document.getElementById("colorPicker");

// When size is submitted by the user, call makeGrid()
//Event handler when submit is clicked
sizePicker.onsubmit = function(event) {
    event.preventDefault();
    clearGrid();
    makeGrid();
};

//Function that creates the grids on the canvas
function makeGrid() {
	//Your code goes here! 
	//For loops to create cells for the canvas
    for (let i = 0; i < gridHeight.value; i++){
        const row = pixelCanvas.insertRow(i);
        for (let j = 0; j < gridWidth.value; j++){
            const cell = row.insertCell(j);

            //Event listener to fill cell with color when cell is clicked
            cell.addEventListener("click", function () {
            	cell.style.backgroundColor = colorPicker.value;
            });
        }
    }
}


//Function that clears the grid 
function clearGrid() {
    while (pixelCanvas.firstChild){
         pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
}
