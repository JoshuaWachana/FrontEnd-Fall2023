const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(78, 52, 199, 0.8)',
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
];

const borderColors = [...backgroundColors];

// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

const renderChart = (houseData) => {
  const donutChart = document.querySelector('.donut-chart');
  const chartLegend = document.querySelector('.chart-legend');

  // const donutChart = document.getElementById('chart-1').getContext('2d');

  console.log(houseData);

  let listOfHouses = [];
  let numberOfMembersList = [];

  let indexColor = 0;

  for (house in houseData) {
    listOfHouses.push(house);
    const key = document.createElement('div');
    key.innerHTML = `<div class="key-container"><div class="key-color-box" style="background-color: ${backgroundColors[indexColor]}"></div><div class="key">${house}</div></div>`;
    chartLegend.append(key);
    numberOfMembersList.push(houseData[house]);
    indexColor += 1;
  }

  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: [...listOfHouses],
      datasets: [
        {
          label: 'Members per House',
          data: [...numberOfMembersList],
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Members Per House',
        fontSize: 20,
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  });
};

const calculateHouseMembers = (characters) => {
  const namesAndHousesCleaned = characters.map((character) => {
    const originalHouseName = character.family;
    let houseNameEdited = originalHouseName.replaceAll('House ', '');
    if (houseNameEdited.includes('Targa')) {
      houseNameEdited = 'Targaryen';
    }
    if (houseNameEdited.includes('Lan')) {
      houseNameEdited = 'Lannister';
    }
    if (houseNameEdited.includes('Lora')) {
      houseNameEdited = 'Lorathi';
    }

    if (
      houseNameEdited === 'Unknown' ||
      houseNameEdited === 'Unkown' ||
      houseNameEdited === '' ||
      houseNameEdited === 'None'
    ) {
      houseNameEdited = 'Other';
    }
    return { name: `${character.fullName}`, house: `${houseNameEdited}` };
  });

  const membersPerHouseObj = namesAndHousesCleaned.reduce(
    (total, character) => {
      if (total.hasOwnProperty(character.house)) {
        total[character.house] += 1;
      } else {
        total[character.house] = 1;
      }
      return total;
    },
    {}
  );

  renderChart(membersPerHouseObj);
};

const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    calculateHouseMembers(data);
  } catch (error) {
    const errorElement = document.createElement('p');
    errorElement.textContent = `Sorry an error occurred: ${error}`;
    errorElement.style.backgroundColor = 'white';
    const chartContainer = document.querySelector('.chart-container');
    chartContainer.append(errorElement);
  }
};

getData(url);
