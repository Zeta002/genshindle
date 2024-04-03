import axios from "axios";

const API_URL = 'https://genshin.jmp.blue/characters';
// Définition des versions
const versions = {
  '2020-09-28': '1.0',
  '2020-11-11': '1.1',
  '2020-12-23': '1.2',
  '2021-02-03': '1.3',
  '2021-03-17': '1.4',
  '2021-04-28': '1.5',
  '2021-06-09': '1.6',
  '2021-07-21': '2.0',
  '2021-09-01': '2.1',
  '2021-10-13': '2.2',
  '2021-09-24': '2.3',
  '2022-01-05': '2.4',
  '2022-02-16': '2.5',
  '2022-03-30': '2.6',
  '2022-05-31': '2.7',
  '2022-07-13': '2.8',
  '2022-08-24': '3.0',
  '2022-09-28': '3.1',
  '2022-11-02': '3.2',
  '2022-12-07': '3.3',
  '2023-01-18': '3.4',
  '2023-03-01': '3.5',
  '2023-04-12': '3.6',
  '2023-05-24': '3.7',
  '2023-07-05': '3.8',
  '2023-08-16': '4.0',
  '2023-09-27': '4.1',
  '2023-11-08': '4.2',
  '2023-12-20': '4.3',
  '2024-01-31': '4.4',
  '2024-03-13': '4.5'
};

const getVersion = (releaseDate) => {
  const releaseDates = Object.keys(versions);
  for (let i = 1; i < releaseDates.length; i++) {
    const prevRelease = releaseDates[i - 1];
    const nextRelease = releaseDates[i];
    if (releaseDate >= prevRelease && releaseDate < nextRelease) {
      return versions[prevRelease];
    }
  }
  return 'Indisponible';
};

export const loadCharacters = () => {
  return async (dispatch) => {
      const response = await axios.get(API_URL);
      const filteredCharacters = response.data.filter(character => !character.includes('traveler'));
      const characterPromises = filteredCharacters.map(async character => {
        const characterInfoResponse = await axios.get(`${API_URL}/${character}`);
        const characterInfo = characterInfoResponse.data;
        return {
          name: characterInfo.name,
          vision: characterInfo.vision,
          weapon: characterInfo.weapon,
          nation: characterInfo.nation,
          version: getVersion(characterInfo.release)
        };
      });
      dispatch({
        type: 'LOAD_CHARACTERS',
        payload: await Promise.all(characterPromises)
      });
  };
}