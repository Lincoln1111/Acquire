let tilePile = [
    "A1", "A2", "A3", "A4", "A5",
    "B1", "B2", "B3", "B4", "B5",
]

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

function shuffle(tilePile) {
    return tilePile.sort(() => Math.random() - 0.5);
}

