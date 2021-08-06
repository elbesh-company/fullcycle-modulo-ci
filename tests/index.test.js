const { sum } = require('../src/index');

test('When summing 3 and 3 result should be 6', () => {
    const actual = sum(3, 3);
    const expected = 6;
    expect(actual).toBe(expected);
});