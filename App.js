import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export default function App() {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://genshin.jmp.blue/characters');
                const data = await response.json();

                await new Promise(resolve => setTimeout(resolve, 5000));

                const randomIndex = Math.floor(Math.random() * data.length);
                const randomCharacter = data[randomIndex];
                setCharacter(randomCharacter);
                setLoading(false);
            } catch (error) {
                console.error('Erreur:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {loading ? (
            <Text>Chargement...</Text>
          ) : (
            character ? <Text>{`Nom: ${character.name}`}</Text> : <Text>Non défini</Text>
          )}
      </View>
    );
}