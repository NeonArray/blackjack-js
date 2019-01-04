const test = require('tape');
const Card = require('./card.js');

test('Card', assert => {
    const actual = new Card('Hearts', 'Three');
    const expected = {
        suit: 'Hearts',
        rank: 'Three',
    };

    assert.same(actual, expected, msg);
    assert.end();
});
