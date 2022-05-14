let gameBoard = [
    A1, A2, A3, A4, A5,
    B1, B2, B3, B4, B5,
]
/* game board objective: I need to create some sort of table, and the computer pulls random cells and gives them
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