export const stringCalculator = (numbers: string): number | Error => {
  if (numbers === "") {
    console.log("This is empty string");
    return 0;
  } else {
    const delimiter = findDelimitter(numbers);
    if (delimiter != ",") {
      numbers = numbers.substring(4);
    }
    const numberArray = numbers
      .replace("\n", "")
      .split(delimiter)
      .map((num) => {
        const parsedNum = parseFloat(num);
        if (parsedNum <= 1000) return parsedNum;
        else return 0;
      });
    console.log("this is number array:", numberArray);
    const sum = addNumbers(numberArray);
    console.log("This is sum:", sum);
    return sum;
  }
};

const findDelimitter = (delimiter: string) => {
  if (delimiter.includes("//")) return delimiter[2];
  return ",";
};

const addNumbers = (numberArray: number[]) => {
  let sum = 0;
  let negativeIntegersArray: number[] = [];
  if (numberArray.length > 0) {
    numberArray.map((num) => {
      if (num < 0) negativeIntegersArray.push(num);
      sum = sum + num;
    });
    if (negativeIntegersArray.length > 0) {
      throw new Error(
        "negative numbers not allowed " + negativeIntegersArray.join(",")
      );
    }
    return sum;
  } else {
    return numberArray[0];
  }
};
