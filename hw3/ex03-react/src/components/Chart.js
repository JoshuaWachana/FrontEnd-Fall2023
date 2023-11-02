import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import backgroundColors from '../chartColors';
import { Doughnut } from 'react-chartjs-2';

export default function Chart(props) {
  const namesAndHouses = props.charactersData.map((character) => {
    return { name: character.name, house: character.house };
  });
  const houseCountObj = namesAndHouses.reduce((total, character) => {
    if (total.hasOwnProperty(character.house)) {
      total[character.house] += 1;
    } else {
      total[character.house] = 1;
    }

    return total;
  }, {});

  let houseLabels = [];

  for (const house in houseCountObj) {
    houseLabels.push(house);
  }

  const countPerLabel = Object.values(houseCountObj);

  const data = {
    labels: houseLabels,
    datasets: [
      {
        data: countPerLabel,
        backgroundColor: ['red', 'green', 'blue'],
        borderColor: ['black'],
        borderWidth: 1,
      },
    ],
  };

  //   const options = {
  //     legend: {
  //       display: false,
  //     },
  //     title: {
  //       display: true,
  //       text: 'Members Per House',
  //       fontSize: 20,
  //     },
  //     responsive: true,
  //     maintainAspectRatio: false,
  //   };

  return (
    <>
      <h1>Welcome to the Chart Page</h1>;
      <main className='chart-container'>
        <Doughnut data={data} />
      </main>
    </>
  );
}
