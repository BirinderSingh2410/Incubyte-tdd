export const stringCalculator = (numbers: string): number | Error => {
  if (numbers === "") {
    return 0;
  } else {

    //Find delimiter symbol
    const delimiter = findDelimitter(numbers);

    //If there is delimiter then we need to make the string clear with intial characters.
    if (numbers.includes('//')) {
      const newLineIndex = numbers.indexOf("\n");
      numbers = numbers.slice(newLineIndex + 1, numbers.length);
    }

    //Eliminating all the delimiters from the string
    for (let i = 0; i < delimiter.length; i++) {
      if (numbers.includes(delimiter[i])) {
        numbers = numbers.split(delimiter[i]).join(",");
      }
    }

    //Fetching number array from the string of numbers.
    const numberArray = numbers
      .replace("\n", "")
      .split(",")
      .map((num) => {
        const parsedNum = parseFloat(num);
        if (parsedNum <= 1000) return parsedNum;
        else return 0;
      });

    const sum = addNumbers(numberArray);
    
    return sum;
  }
};

//Find Delimiter Logic
const findDelimitter = (number: string) => {
  if (number.includes("//")) {
    if (number.includes("[")) {
      let delimiterArray: string[] = [];
      const delimiterEndIndex = number.lastIndexOf("]") + 1;
      let delimterNumber = number.slice(number.indexOf("["), delimiterEndIndex);
      while (delimterNumber != "") {
        const endIndex = delimterNumber.indexOf("]");
        const startIndex = delimterNumber.indexOf("[");
        const result = delimterNumber.slice(startIndex + 1, endIndex);
        delimiterArray.push(result);
        delimterNumber = delimterNumber.slice(
          endIndex + 1,
          delimiterEndIndex + 1
        );
      }
      return delimiterArray;
    }
    return [number[2]];
  }
  return [","];
};

//Sum Logic
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
