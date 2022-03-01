const Ship = require('../ship');



test('test ship object', () => {
    expect(new Ship(3,[])).toEqual(
        {   location: [],
            length: 3,
            hits: 0
        }
    )
    const ts = new Ship(3,[]);
    ts.hit();
    expect(ts).toEqual(
        {   location: [],
            length: 3,
            hits: 1
        }
    )
})
