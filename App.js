import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Game from "./components/GameTwo";
import GameTwo from "./components/GameTwo";
import GameThree from "./components/GameThree";

export default function App() {
  return (
    <View style={styles.container}>
      <GameThree />
      <StatusBar style="auto" />
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
