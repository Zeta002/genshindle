import {StyleSheet, View, Text} from "react-native";
import {useEffect, useState} from "react";


// async function getAllCharactersFromAPI() {
//   try {
//     let response = await fetch('https://genshin.jmp.blue/characters');
//     const responseJson = await response.json();
//     setCharacters(responseJson);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     setIsLoading(false);
//   }
// }

export default function Game()  {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);


  const getAllCharactersFromAPI = async () => {
    try {
      let response = await fetch('https://genshin.jmp.blue/characters');
      const responseJson = await response.json();
      setCharacters(responseJson);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllCharactersFromAPI().then(() => console.log("Characters loaded"));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Characters:</Text>
      {isLoading ? <Text>Loading...</Text> : <Text>{JSON.stringify(characters)}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
