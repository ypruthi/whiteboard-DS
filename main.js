let color = "black";

function createBoard(size) {
    let board = document.querySelector(".board");
    let grid = board.querySelectorAll("div");
    grid.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let gridSize = size * size;

    for(let i = 0; i < gridSize; i++) {
    let square = document.createElement("div");
    square.addEventListener('mouseover', colorSquare);
    square.style.backgroundColor = 'white';
    board.insertAdjacentElement("beforeend", square);
    }
}

createBoard(16);

function changeSize(input) {
    if (input < 2 || input > 100) {
        console.log("please choose grid size between 2 - 100")
    }
    createBoard(input);
}

function colorSquare() {

    if (color === "rainbow") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }

    this.style.backgroundColor = color;
}

function colorSwitch(option) {
    color = option;
  }

  function clearBoard() {
    let board = document.querySelector(".board");
    let grid = board.querySelectorAll("div");
    grid.forEach((div) => div.style.backgroundColor = 'white');
  }