import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Footer from "./components/Footer";
import Header from "./components/Header";

import store from './store/store';
import {Provider} from "react-redux";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Header />
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