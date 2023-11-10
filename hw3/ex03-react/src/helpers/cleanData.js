const cleanData = (data) => {
  const housesCleaned = data.map((character) => {
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

    return {
      id: character.id,
      name: character.fullName,
      house: houseNameEdited,
      title: character.title,
      imageUrl: character.imageUrl,
      extendedName: `${character.title} ${character.fullName} of House ${character.family}`,
    };
  });

  return housesCleaned;
};

export default cleanData;
