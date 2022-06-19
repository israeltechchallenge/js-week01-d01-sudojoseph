function moduloEx5(num1, num2) {
  let consoleText = '';

  if(num1 > num2 && (num1 % num2 !== 0)) {
    consoleText += `The number ${num1} is bigger than ${num2}. But the modulo of ${num1} % ${num2} is ${num1 % num2}`;
  } else if(num1 > num2) {
    consoleText += `The number ${num1} is bigger than ${num2}`;
  } else if(num1 === num2) {
    consoleText += `The number ${num1} is equal to ${num2}`;
  } else {
    consoleText += `The number ${num1} is less than ${num2}`;
  }

  console.log(consoleText);
}

// Do not remove or change this line, or the tests won't work
export { moduloEx5 };
