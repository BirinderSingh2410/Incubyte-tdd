import { stringCalculator } from "./main";

test('1.returns 0 if there is an empty string', () => {
    expect(stringCalculator('')).toBe(0);
});

test('2.returns number if only number is passed', () => {
    expect(stringCalculator('5')).toBe(5);
});

test('3.returns sum of the string', () => {
    expect(stringCalculator('1,2')).toBe(3);
    expect(stringCalculator('6,7')).toBe(13);
    expect(stringCalculator('1,1,2,2,4')).toBe(10);
    expect(stringCalculator('50,50,100,80')).toBe(280);
    expect(stringCalculator('1.5,1.5,2,2.5')).toBe(7.5);
});

test('4.returns sum of the string with new line character', () => {
    expect(stringCalculator('1\n,2,\n3')).toBe(6);
    expect(stringCalculator('1.5\n,2.2')).toBe(3.7);
});

test('5.returns sum if there are different delimiters', () => {
    expect(stringCalculator('//;\n1;2')).toBe(3);
});

test('6.returns error string if there negative numbers', () => {
    expect(()=>stringCalculator('-1,1,2')).toThrow('negative numbers not allowed -1');
    expect(()=>stringCalculator('-1,-2,5')).toThrow('negative numbers not allowed -1,-2');
});

test('7.Number bigger than 1000 to be ignored', () => {
    expect(stringCalculator('1001,2')).toBe(2);
    expect(stringCalculator('1000,1001,990,10')).toBe(2000);
});

test('8.returns sum wuth Delimiters can be of any length with the following format: “//[delimiter]\n”', () => {
    expect(stringCalculator('//[***]\n1***2***3')).toBe(6);
    expect(stringCalculator('//[+]\n10+10+4')).toBe(24);
});

test('9.returns sum that Allow multiple delimiters and with longer length of delimters', () => {
    expect(stringCalculator('//[*][%]\n1*2%3')).toBe(6);
    expect(stringCalculator('//[***][%]\n1***2%5')).toBe(8);
});
