export const stringCalculator = (numbers: string): number => {
  if (numbers === "") {
    console.log("This is empty string");
    return 0;
  } else {
    const numberArray = numbers.split(",").map((num) => parseFloat(num));
    console.log("this is number array:", numberArray)
    const sum = addNumbers(numberArray);
    console.log("This is sum:", sum)
    return sum;
  }
};

const addNumbers = (numberArray: number[]) => {
  let sum = 0;
  if (numberArray.length > 0) {
    numberArray.map((num) => {
      sum = sum + num;
    });
    return sum
  }else{
    return numberArray[0]
  }
};
