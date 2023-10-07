const elem = document.querySelector('input');

const display = function displayText(bool, message) {
  const outputDiv = document.getElementById('output');
  if (bool) {
    outputDiv.classList.remove('text-danger');
    outputDiv.classList.add('text-success');
  } else {
    outputDiv.classList.remove('text-success');
    outputDiv.classList.add('text-danger');
  }
  outputDiv.innerHTML = message;
};

const handleInput = function handleInputValues() {
  const enteredValue = document.getElementById('input').value;

  if (Number.isNaN(enteredValue)) {
    display(false, 'Error! Non-numeric character(s) entered!');
  } else if (enteredValue < 0) {
    display(false, 'Error! Negative number entered!');
  } else if (enteredValue === '') {
    display(false, '');
  } else {
    const enteredStringArray = enteredValue.split('');
    const reversedStringArray = enteredStringArray.reverse();
    const reversedString = reversedStringArray.join('');

    if (enteredValue === reversedString) {
      display(true, 'Yes! This is a palindrome!');
    } else {
      display(false, 'No. Try again.');
    }
  }
};

elem.addEventListener('input', handleInput);
