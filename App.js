import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store';
import Try from './components/Try'; // Assurez-vous d'importer votre composant

const App = () => {


  return (
    <Provider store={store}>
      <Try />
    </Provider>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

