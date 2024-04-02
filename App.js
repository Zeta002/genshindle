import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import Footer from "./Components/Footer";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Prend tout l'espace disponible
    backgroundColor: '#fff', // Couleur de fond
    alignItems: 'center', // Aligne les éléments au centre
    justifyContent: 'space-between', // Aligne le contenu au centre
  },
  content: {
    flex: 1, // Prend tout l'espace disponible
    justifyContent: 'center', // Aligne le contenu au centre
    alignItems: 'center', // Aligne les éléments au centre
  },
});