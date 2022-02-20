const hello = require('../hello');

test('returns hello test', () => {
    expect(hello()).toBe("Hello Test");
}
    
);