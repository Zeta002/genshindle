import React, {useEffect} from 'react';
import { Modal, View, Text, Button } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {clearPropositions, selectRandomCharacter} from '../actions/characterAction';
import { setTries } from '../actions/scoresActions';
import {openModal} from "../actions/gameActions";

const EndGameModal = ({ isVisible, onClose }) => {
  const dispatch = useDispatch();
  const maxTries = useSelector(state => state.tries.maxTries);
  const selectedCharacter = useSelector(state => state.char.selectedCharacter.name);
  const gameWon = useSelector(state => state.game.gameWon);

  const restartGame = () => {
    dispatch(setTries(maxTries)); // Remettre les essais à 3
    dispatch(selectRandomCharacter());
    dispatch(clearPropositions())// Choisir un nouveau personnage aléatoire
    onClose(); // Fermer la modal
  };

  if (gameWon) {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={isVisible}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Gagné ! C'était bien {selectedCharacter}</Text>
          <Button title="Recommencer une partie" onPress={restartGame} />
        </View>
      </Modal>
    );
  }
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Perdu : c'était {selectedCharacter}</Text>
        <Button title="Recommencer une partie" onPress={restartGame} />
      </View>
    </Modal>
  );
};

export default EndGameModal;