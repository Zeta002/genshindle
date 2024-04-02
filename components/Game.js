import {StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";

export default function Game() {

  const [isLoading, setIsLoading] = useState(true);
  let [characters, setCharacters] = useState([]);

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
    '2024-01-31': '4.4'
  }

  async function getAllCharactersFromAPI() {
    try {
      let response = await fetch('https://genshin.jmp.blue/characters');
      const characters = await response.json();

      // Create an array of promises to get the type of each character
      const typePromises = characters.map(async character => {
        const response = await fetch(`https://genshin.jmp.blue/characters/${character}`);

        // Return a new object that includes the character and its type
        return await response.json();
      });

      // Wait for all promises to resolve
      const charactersWithType = await Promise.all(typePromises);

      setCharacters(charactersWithType);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  function getRandomCharacter(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  }

  function removeTraveler() {
    return characters.filter(character => character.name !== "Traveler");
  }

  useEffect(() => {
    getAllCharactersFromAPI().then(() => console.log("Characters loaded"));
  }, []);

  characters = removeTraveler();

  function getCharacterVersion(character, versions) {
    // Convertir les dates en timestamps pour faciliter la comparaison
    const characterTimestamp = new Date(character.release).getTime();
    const versionTimestamps = Object.keys(versions).map(version => new Date(version).getTime());

    // Trier les timestamps
    versionTimestamps.sort((a, b) => a - b);

    // Trouver la version correcte
    for (let i = 0; i < versionTimestamps.length - 1; i++) {
      if (characterTimestamp >= versionTimestamps[i] && characterTimestamp < versionTimestamps[i + 1]) {
        return versions[Object.keys(versions)[i-1]];
      }
    }

    // Si la version du personnage n'est pas comprise entre deux versions, retourner la version la plus récente
    return versions[Object.keys(versions)[versionTimestamps.length - 1]];
  }

// Utilisation de la fonction
  const simplifiedCharacters = characters.map(character => {
    return {
      name: character.name,
      vision: character.vision,
      weapon: character.weapon,
      nation: character.nation,
      version: getCharacterVersion(character, versions)
    };
  });

  console.log(simplifiedCharacters);

  let randomCharacter = getRandomCharacter(simplifiedCharacters)

  return (
    <View style={styles.characters}>
      <Text>Guess:</Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <Text>{randomCharacter.name} is a {randomCharacter.version} character</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  characters: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
