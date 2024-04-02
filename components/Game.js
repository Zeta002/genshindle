import {StyleSheet, View, Text} from "react-native";
import {useState} from "react";

const [characters, setCharacters] = useState([]);

async function getAllCharactersFromAPI() {
    try {
        let response = await fetch('https://genshin.jmp.blue/characters');
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}

async function getCharacterFromAPI() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}

export default function Game() {


    return (
        <View style={styles.container}>
            <Text>Game</Text>
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
