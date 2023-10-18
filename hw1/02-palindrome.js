const inputElement = document.querySelector('input');
resultElement = document.querySelector('#result');

const handleInput = () => {
  resultElement.innerHTML = '';
  inputNumber = inputElement.value;
  const isvalidNumber = checkValidityOfNumber(inputNumber);
  if (!isvalidNumber) {
    return;
  }
  checkIfPalindrome(inputNumber);
};

const checkValidityOfNumber = (num) => {
  if (num < 0) {
    let errMessage = document.createElement('p');
    errMessage.textContent = 'Invalid Number: It should be positive!';
    errMessage.classList.add('text-danger', 'bg-white');
    resultElement.append(errMessage);
    return false;
  } else if (num === '') {
    let errMessage = document.createElement('p');
    errMessage.textContent = 'Invalid Input!';
    errMessage.classList.add('text-danger', 'bg-white');
    resultElement.append(errMessage);
    return false;
  } else {
    return true;
  }
};

const checkIfPalindrome = (num) => {
  const numString = num.toString();
  const numStringReversed = num.toString().split('').reverse().join('');
  let result = document.createElement('p');

  if (numString === numStringReversed) {
    result.textContent = 'Yes, this is a Palindrome!';
    result.classList.add('text-success', 'bg-white');
  } else {
    result.textContent = 'No, this is not a Palindrome!';
    result.classList.add('text-danger', 'bg-white');
  }
  resultElement.append(result);
};

inputElement.addEventListener('input', handleInput);
