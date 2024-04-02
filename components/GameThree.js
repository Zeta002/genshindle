import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import axios from 'axios';
import {Table, Row, Rows} from 'react-native-table-component';

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
  '2024-01-31': '4.4'
};

const App = () => {
  const [characters, setCharacters] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setSearch] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const [selectedCharacter, setSelectedCharacter] = useState([]);
  const [proposal, setProposal] = useState([]);
  const [feedback, setFeedback] = useState('');

  const [guesses, setGuesses] = useState([{
    name: 'Aucune supposition',
    vision: '',
    weapon: '',
    nation: '',
    version: ''
  }]);

  const fetchCharacters = async () => {
    setIsLoaded(false); // Définir l'état de chargement sur false pendant la récupération des données
    try {
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
      const charactersData = await Promise.all(characterPromises);
      setCharacters(charactersData);
      setIsLoaded(true);
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des personnages:', error);
    }
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

  const startNewGame = () => {
    setSelectedCharacter(characters[Math.floor(Math.random() * characters.length)]);
    setProposal([]);
    setGuesses([]);
    setFeedback('');
    setGameOver(false);
  };

  const handleGuess = () => {
    if (!proposal || proposal.length === 0) {
      setFeedback('Veuillez entrer un personnage.');
    } else {
      const updatedGuesses = [...guesses, proposal]; // Ajouter la supposition actuelle au tableau des suppositions
      setGuesses(updatedGuesses);
      if (proposal.name.toLowerCase() === selectedCharacter.name.toLowerCase()) {
        setFeedback('Félicitations! Vous avez trouvé le personnage!');
        setGameOver(true);
      } else {
        setFeedback('Incorrect! Veuillez essayer à nouveau.');
      }
    }
  };

  const findCharacter = (search) => {
    if (characters) {
      const found = characters.find(character => character.name.toLowerCase() === search.toLowerCase());
      if (found) {
        setProposal(found);
      } else {
        handleGuess();
      }
    }
  }

  useEffect(() => {
    fetchCharacters().then();
  }, []);

  useEffect(() => {
    if (characters) {
      startNewGame();
    }
  }, [characters]);

  useEffect(() => {
    if (proposal.length !== 0) {
      handleGuess();
    }
  }, [proposal]);

  useEffect(() => {
    if (guesses) {
      setProposal([]);
    }
  }, [guesses]);

  if (isLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Devinez le personnage de Genshin Impact</Text>
        <View style={styles.characterInfo}>
          <Text style={styles.selectedCharacter}>Personnage sélectionné : {selectedCharacter.name}</Text>
        </View>
        <Text>Propositions :</Text>
        <View style={styles.tabContainer}>
          <Table borderStyle={{borderWidth: 1, borderColor: '#c8e1ff'}} style={styles.tab}>
            <Row data={['Name', 'Vision', 'Weapon', 'Nation', 'Version']} style={styles.head} textStyle={styles.text}/>
            <Rows data={guesses.map(guess =>
              console.log(guess) ||
              [guess.name, guess.vision, guess.weapon, guess.nation, guess.version])}
                  textStyle={styles.text}
                  style={styles.rows}/>
          </Table>
        </View>
        {!gameOver ? (
          <View>
            <TextInput
              style={styles.input}
              onChangeText={setSearch}
              value={search}
              placeholder="Entrez un personnage"
            />
            <Button title="Devinez" onPress={() => findCharacter(search)}/>
          </View>
        ) : (
          <Button title="Nouvelle partie" onPress={startNewGame}/>
        )}
        <Text style={styles.feedback}>{feedback}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>Chargement...</Text>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  characterList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  characterButton: {
    margin: 5,
    padding: 10,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  selectedCharacter: {
    fontSize: 18,
    marginBottom: 20,
  },
  characterInfo: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  feedback: {
    marginTop: 20,
  },
  tabContainer: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
  },
  tab: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff'
  },
  rows: {
    height: 30,
    width: '100%'
  },
  text: {
    margin: 6,
    // textAlign: 'center'
  }
});

export default App;
