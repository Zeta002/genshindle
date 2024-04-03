import {StatusBar, StyleSheet, Text, View} from 'react-native';
import GameThree from "./components/Game";

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
