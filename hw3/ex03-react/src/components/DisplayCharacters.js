import React from 'react';

export default function DisplayCharacters(props) {
  const possibleMatches = props.charactersData.filter((character) => {
    return character.name
      .toLowerCase()
      .includes(props.searchedCharacter.toLowerCase());
  });

  const possibleMatchElements = possibleMatches.map((character) => {
    return (
      <figure key={character.id} className='figure'>
        <img
          src={character.imageUrl}
          alt={character.extendedName}
          className='characterIMG'
        />
        <figcaption className='figcaption'>
          <h1 className='name'>Name: {character.name}</h1>
          <p className='title'>Title: {character.title}</p>
        </figcaption>
      </figure>
    );
  });

  return (
    <>
      <h1>Searching for any matches to: {props.searchedCharacter}</h1>
      <h2>Results Below:</h2>

      {possibleMatches.length > 0 ? (
        <main id='display-section' className='main-section'>
          {possibleMatchElements}
        </main>
      ) : (
        <h1>Sorry, no matches were found.</h1>
      )}
    </>
  );
}
