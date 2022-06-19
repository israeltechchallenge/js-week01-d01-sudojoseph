function getRandomInt(max) {
  return Math.round(Math.random() * max);
}

function moduloEx7() {
  const number = getRandomInt(100);
  const comparer = getRandomInt(100);
  let outputText = '';
  const outputElm = document.getElementById('output');

  if(number > comparer && (number % comparer !== 0)) {
    outputText += `The number ${number} is bigger than ${comparer}. But the modulo of ${number} % ${comparer} is ${number % comparer}`;
  } else if(number > comparer) {
    outputText += `The number ${number} is bigger than ${comparer}`;
  } else if(number === comparer) {
    outputText += `The number ${number} is equal to ${comparer}`;
  } else {
    outputText += `The number ${number} is less than ${comparer}`;
  }

  outputElm.innerText = outputText;
}

moduloEx7();
