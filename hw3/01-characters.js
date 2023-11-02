// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';
const displaySection = document.getElementById('display-section');

const addToDOM = (character) => {
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  const figcaption = document.createElement('figcaption');
  const name = document.createElement('h2');
  const title = document.createElement('p');

  figure.classList.add('figure');
  img.classList.add('characterIMG');
  figcaption.classList.add('figcaption');
  name.classList.add('name');
  title.classList.add('title');

  img.setAttribute('src', `${character.imageUrl}`);
  img.setAttribute('alt', `${character.fullName} from Game of Thrones`);
  name.textContent = character.fullName;
  title.textContent = character.title;

  figcaption.append(name, title);
  figure.append(img, figcaption);
  displaySection.append(figure);
};

const getData = async (url) => {
  try {
    const reponse = await fetch(url);
    const data = await reponse.json();
    data.forEach((character) => addToDOM(character));
  } catch (error) {
    const errorElement = document.createElement('p');
    errorElement.textContent = `Sorry an error occurred: ${error}`;
    displaySection.append(errorElement);
  }
};

getData(url);
