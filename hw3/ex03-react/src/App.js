import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './styles.css';
import axios from 'axios';
import cleanData from './helpers/cleanData';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import SearchCharacters from './components/SearchCharacters';
import Chart from './components/Chart';

function App() {
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    const URL = 'https://thronesapi.com/api/v2/Characters';

    const getData = async (url) => {
      try {
        const response = await axios.get(url);
        const cleanedUpData = cleanData(response.data);
        setCharactersData(cleanedUpData);
      } catch (error) {
        /*

        Make sure to handle this error

        */
        console.log('API Error');
        console.log(error);
      }
    };
    getData(URL);
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/home' element={<Welcome />} />
        <Route
          path='/search'
          element={<SearchCharacters charactersData={charactersData} />}
        />
        <Route
          path='/houses'
          element={<Chart charactersData={charactersData} />}
        />
        <Route path='*' element={<h1>Error: Path does not exist</h1>} />
      </Routes>
    </>
  );
}

export default App;
