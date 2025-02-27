const CheckIfEqual=(board)=>{
    let newBoard = [
        [board[0][0], board[0][0]+board[0][2], board[0][2]],
        [board[0][0]+board[2][0], board[0][0]+board[2][0]+board[0][2]+board[2][2], board[0][2]+board[2][2]],
        [board[2][0], board[2][0]+board[2][2], board[2][2]]
    ];
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            if(board[i][j] != newBoard[i][j]){
                return [-1];
            }
        }
    }
    return [board[0][0], board[0][2], board[2][0], board[2][2]]
}


console.log(CheckIfEqual([
    [1,2,1],
    [2,4,2],
    [1,2,1]
]));

console.log(CheckIfEqual([
    [3,7,4],
    [5,16,11],
    [2,9,7]
]));

console.log(CheckIfEqual([
    [3,7,4],
    [5,17,11],
    [2,9,7]
]));