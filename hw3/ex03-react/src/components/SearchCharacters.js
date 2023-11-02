import React, { useState } from 'react';
import DisplayCharacters from './DisplayCharacters';

export default function SearchCharacters(props) {
  const [searchedCharacter, setSearchedCharacter] = useState('');

  const handleInput = (e) => {
    if (e.target.value.replaceAll(' ', '').length === 0) {
      setSearchedCharacter('');
      return;
    }
    const characterToSearch = e.target.value;
    setSearchedCharacter(characterToSearch.trim());
  };

  return (
    <div>
      <div>
        <form className='search-form'>
          <label htmlFor='search-box'>Search For a character: </label>
          <input
            type='text'
            className='search-box'
            name='enteredCharacter'
            onChange={handleInput}
          />
        </form>
      </div>
      {searchedCharacter ? (
        <DisplayCharacters
          searchedCharacter={searchedCharacter}
          charactersData={props.charactersData}
        />
      ) : (
        <h1> Please Search for someone </h1>
      )}
    </div>
  );
}
