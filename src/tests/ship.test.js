const Ship = require('../ship');



test('test ship object', () => {
    expect(new Ship(3)).toEqual(
        {
            length: 3,
            hitLocation: []
        }
    )
})

test('test if ship sank', () => {
    expect(new Ship([]).isSunk()).toEqual(true)
})

test('test if ship sank', () => {
    expect(new Ship(3).isSunk()).toEqual(false)
})

test('test ship hit', () => {
    const test = new Ship(3);
    test.hit(2);
    expect(test).toEqual({ length: 3, hitLocation: [2] }
    )
})