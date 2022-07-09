import Game from "./Game.js"
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView(document.getElementById("app"));


// definging GameView functions

gameView.onTileClick = function(i){
    game.makeMove(i);
    gameView.update(game)
    
};
gameView.onRestartClick = function(){
    //restart game
    game = new Game();
    gameView.update(game)
};

