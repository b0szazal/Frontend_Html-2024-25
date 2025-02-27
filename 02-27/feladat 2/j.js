let boardHtml = [
    [document.getElementById("1"), document.getElementById("2"), document.getElementById("3")],
    [document.getElementById("4"), document.getElementById("5"), document.getElementById("6")],
    [document.getElementById("7"), document.getElementById("8"), document.getElementById("9")]
]
let board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

const Add = (corners)=>{
    board[corners[0]][corners[1]] ++
    board[Math.abs(corners[0]-1)][corners[1]] ++
    board[corners[0]][Math.abs(corners[1]-1)] ++
    board[Math.abs(corners[0]-1)][Math.abs(corners[1]-1)] ++
    UpdateBoard();
}

const Clear = ()=>{
    board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]
    UpdateBoard();
}

const UpdateBoard = ()=>{
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            boardHtml[i][j].innerText = board[i][j];
        }
    }
}