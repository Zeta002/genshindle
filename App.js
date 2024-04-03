import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store';
import Try from './components/Try';
import {Text, View, StyleSheet} from "react-native"; // Assurez-vous d'importer votre composant

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Try />
      </View>
    </Provider>
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




