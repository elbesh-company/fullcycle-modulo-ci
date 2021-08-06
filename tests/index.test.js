const { sum } = require('../src/index');

test('1 should be 1', () => {
    const actual = sum(3, 3);
    const expected = 6;
    expect(actual).toBe(expected);
});