function modulo(num1, num2) {
  if(num1 > num2 && (num1 % num2 !== 0)) {
    console.log(`The number ${num1} is bigger than ${num2}`);
    console.log(`The modulo of ${num1} % ${num2} is ${num1 % num2}`);
  } else if (num1 > num2) {
    console.log(`The number ${num1} is bigger than ${num2}`);
  } else if(num1 === num2) {
    console.log(`The number ${num1} is equal to ${num2}`);
  } else {
    console.log(`The number ${num1} is less than ${num2}`);
  }
}

// Do not remove or change this line, or the tests won't work
export { modulo };
