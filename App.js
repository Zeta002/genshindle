import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Guess from "./components/Guess";

import store from './store/store';
import {Provider, useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {loadCharacters, selectRandomCharacter} from "./actions/characterAction";
import Propositions from "./components/Propositions";
import EndGameModal from "./components/EndGameModal";

function AppContent() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(loadCharacters())
      .then(() => {
        dispatch(selectRandomCharacter());
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(true);
      });
  }, [dispatch]);

  const isModalVisible = useSelector(state => state.game.isModalVisible);

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1"/>
      <Header style={styles.header}/>
      <Guess/>
      <Propositions/>
      <Footer/>
      <EndGameModal isVisible={isModalVisible} onClose={closeModal} />

    </View>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Prend tout l'espace disponible
    backgroundColor: '#fff', // Couleur de fond
    alignItems: 'center', // Aligne les éléments au centre
    justifyContent: 'center', // Aligne le contenu au centre
  },
  content: {
    flex: 1, // Prend tout l'espace disponible
    justifyContent: 'center', // Aligne le contenu au centre
    alignItems: 'center', // Aligne les éléments au centre
  },
  header: {
    flex: 1, // Prend tout l'espace disponible
  },
});