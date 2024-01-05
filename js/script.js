let gridItems = document.getElementsByClassName('square');
let gameIsFinished = false ;
let currentTurn = "X" ;
let boardArray = [
    "0","1","2",
    "3","4","5",
    "6","7","8"
] ;

for( const item of gridItems ){
    item.addEventListener('click',function(e){
        let id = e.target.id
        let squareContent = e.target ;

        if(gameIsFinished){
            return
        }

        if( boardArray[ id-1 ] != "X" && boardArray[ id-1 ] != "O" ){
            // filling the value visually
            squareContent.innerHTML = currentTurn ;
            // filling the value logically
            boardArray[id-1] = currentTurn ;
            evaluateBoard() ;
            if(gameIsFinished == false){
                checkEqual();
            }
            if(currentTurn == "X"){
                currentTurn = "O";
            }else{
                currentTurn = "X";
            }
        }

    });

    function evaluateBoard(){
        if(
            // rows
            (boardArray[0] == boardArray[1] && boardArray[1] == boardArray[2]) ||
            (boardArray[3] == boardArray[4] && boardArray[4] == boardArray[5]) ||
            (boardArray[6] == boardArray[7] && boardArray[7] == boardArray[8]) ||

            // columns
            (boardArray[0] == boardArray[3] && boardArray[3] == boardArray[6]) ||
            (boardArray[1] == boardArray[4] && boardArray[4] == boardArray[7]) ||
            (boardArray[2] == boardArray[5] && boardArray[5] == boardArray[8]) ||
            // Diagonal
            (boardArray[0] == boardArray[4] && boardArray[4] == boardArray[8]) ||
            (boardArray[2] == boardArray[4] && boardArray[4] == boardArray[6])

        ){
            let winner = currentTurn ;
            alert(`${winner} is won!`);
            gameIsFinished = true
        }
    }
    function checkEqual(){
        let flag = 0
        for( const ele of boardArray ){
            if( ele != "X" && ele != "O" ){
                flag = 1
            }
        }
        if( flag == 0 ){
            alert('error');
            gameIsFinished = true ;
        }
    }
}

document.getElementById('reset-btn').addEventListener('click',function(){
    window.onload;
})