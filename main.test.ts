import { stringCalculator } from "./main";

test('returns 0 if there is an empty string', () => {
    expect(stringCalculator('')).toBe(0);
});

test('returns number if only number is passed', () => {
    expect(stringCalculator('5')).toBe(5);
});

test('returns sum of the string', () => {
    expect(stringCalculator('1,2')).toBe(3);
    expect(stringCalculator('6,7')).toBe(13);
    expect(stringCalculator('1,1,2,2,4')).toBe(10);
    expect(stringCalculator('50,50,100,80')).toBe(280);
    expect(stringCalculator('1.5,1.5,2,2.5')).toBe(7.5);
});

test('returns sum of the string with new line character', () => {
    expect(stringCalculator('1\n,2,\n3')).toBe(6);
    expect(stringCalculator('1.5\n,2.2')).toBe(3.7);
});

test('returns sum if there are different delimiters', () => {
    expect(stringCalculator('//;\n1;2')).toBe(3);
});
