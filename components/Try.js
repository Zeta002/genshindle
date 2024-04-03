import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../store/store';
import {Button, View, Text} from "react-native";

const Try = () => {
  const dispatch = useDispatch();
  const nbTry = useSelector(state => state.nbTry); // Assurez-vous d'accéder à l'état correctement

  return (
    <View>
      <Text>Nombre d'essai : {nbTry}</Text>
      <Button onPress={() => dispatch(increment())} title={"Increment"} />
      <Button onPress={() => dispatch(decrement())} title={"Decrement"} />
    </View>
  );
};

export default Try;