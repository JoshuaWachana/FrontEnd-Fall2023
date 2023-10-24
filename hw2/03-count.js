// Add your code here

const input = document.querySelector('#input-word');

const paragraph = document.querySelector('#paragraph');
const paragraphText = paragraph.innerText;
const wordsArray = paragraphText
  .replaceAll(',', ' ,')
  .replaceAll('—', ' — ')
  .replaceAll('.', ' .')
  .split(' ');

const handleKeyUp = () => {
  let inputWord = input.value;
  const matchesInWordsArray = wordsArray.map((word) => {
    if (word.toLowerCase() === inputWord.toLowerCase()) {
      return `<span class="match">${word}</span>`;
    } else return word;
  });
  rebuiltParagrapgh = matchesInWordsArray
    .join(' ')
    .replaceAll(' ,', ',')
    .replaceAll(' — ', '—')
    .replaceAll(' .', '.');
  paragraph.innerHTML = rebuiltParagrapgh;
};

input.addEventListener('keyup', handleKeyUp);
