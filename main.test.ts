import { stringCalculator } from "./main";

test('returns 0 if there is an empty string', () => {
    expect(stringCalculator('')).toBe(0);
});

