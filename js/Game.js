// will represent a sing game of tic tac toe
export default class Game{
    constructor(){
        this.turn = "X";
        this.board = new Array(9).fill(null);
    }

    // switches the turn of the players
    nextTurn(){
        this.turn = this.turn === "X" ? "O" : "X"
    }

    // method to place X or O at specific index
    makeMove(i){
        if(!this.isInProgress()){
            return;
        }
        // if positon already taken, do nothing
        if(this.board[i]){
            return;
        }
        // mark position
        this.board[i] = this.turn;

        // check winning for combonation
        if(!this.findWinningCombination()){
            // if no win next player turn
            this.nextTurn();
        }
        

    }

    // check for winning combonation
    findWinningCombination(){
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        // loop through each winning combo
        for (const combination of winningCombinations ){
            const [a,b,c] = combination;
            if (this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c])){
                return combination;
            }
        }

        // if no winning combo detected return null
        return null;
    }

    // check if game is over or not
    isInProgress(){
        return !this.findWinningCombination() && this.board.includes(null);
    }
}

