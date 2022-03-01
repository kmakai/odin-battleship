const Gameboard = require("../gameBoard");

const testBoard = new Gameboard();

test("test gameboard default", () => {
    expect(testBoard).toEqual(new Gameboard)
})