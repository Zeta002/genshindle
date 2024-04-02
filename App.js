import React, { useEffect, useState } from 'react';
import { Alert, Button, Text, View } from 'react-native';

export default function App() {
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch('https://genshin.jmp.blue/characters')
            .then(response => response.json())
            .then(data => {
                const randomIndex = Math.floor(Math.random() * data.length);
                const randomCharacter = data[randomIndex];
                console.log(randomCharacter);
                setCharacter(randomCharacter);
            })
            .catch((error) => {
                console.error('Erreur:', error);
            });
    }, []);

    const handlePress = () => {
        Alert.alert('Button pressed!', 'You pressed the Guess button.');
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {character ? (
                <>
                    <Text>{`Name: ${character.name ? character.name : 'Loading...'}`}</Text>
                    <Button title="Guess" onPress={handlePress} />
                </>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
}