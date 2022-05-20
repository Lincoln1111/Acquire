let gameBoard = [
    ["A1", "A2", "A3", "A4", "A5"],
    ["B1", "B2", "B3", "B4", "B5"]
]
/* game board objective: I need to create some sort of table, that the computer can pull random cells from and give
to each player. The player then places these "tiles" back on the board, when they're placed next to, above,
or below each other, magical things happen. 
*/
const player1 = {
    tiles: [],
    money: 100,
    stocks: {
        echo: 0,
        bolt: 0,
    }
}
const player2 = {
    tiles: [],
    money: 100,
    stocks: {
        echo: 0,
        bot: 0
    }
}
player1.tiles.push(gameBoard[Math.floor(Math.random() * gameBoard.length)][Math.floor(Math.random() * gameBoard.length)]);
// This gives a random tile to the player. But nothing is preventing the computer from distributing that tile again...

console.log(player1);
console.log(gameBoard);