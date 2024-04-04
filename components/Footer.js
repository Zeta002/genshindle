import React, {useEffect, useState} from 'react';
import {Dimensions, View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import {useDispatch, useSelector} from "react-redux";
import { addProposition } from '../actions/characterAction';
import {decrementTries, incrementWinStreak, setWinStreak} from "../actions/scoresActions";
import {loseGame, openModal, winGame} from "../actions/gameActions";


function Footer() {
  const screenHeight = Dimensions.get('window').height; // Récupère la hauteur de l'écran
  let [open, setOpen] = useState(false); // Création d'un état local pour contrôler l'ouverture du DropDownPicker
  const [selectedValue, setSelectedValue] = useState(null);

  const dispatch = useDispatch();

  const handleProposition = (proposition) => {
    const character = characters.find(character => character.name === proposition);
    if (character) {
      dispatch(addProposition(character));
    }
  };

  useEffect(() => {
    if (selectedValue) {
      handleProposition(selectedValue);
      dispatch(decrementTries());
    }
  }, [selectedValue]);

  const tries = useSelector(state => state.tries.tries);
  const isModalVisible = useSelector(state => state.game.isModalVisible);

  useEffect(() => {
    if (tries === 0) {
      setSelectedValue(null);
      dispatch(loseGame());
      dispatch(setWinStreak(0))
      dispatch(openModal());
    }
  }, [tries]);

  useEffect(() => {
    if (selectedCharacter.name === selectedValue) {
      setSelectedValue(null);
      dispatch(winGame());
      dispatch(incrementWinStreak())
      dispatch(openModal());
    }
  }, [tries]);

  const characters = useSelector(state => state.char.characters); // Récupère les personnages du store
  const selectedCharacter = useSelector(state => state.char.selectedCharacter); // Récupère le personnage sélectionné du store

  const items = characters ? characters.map((character) => {
    return {
      label: character.name,
      value: character.name,
    }
  }) : [];

  return (
    <View style={{
      position: 'absolute', // Positionnement absolu
      bottom: -110, // En bas de l'écran
      width: '100%', // Largeur de 100% de l'écran
      height: screenHeight * 0.4, // Hauteur de 10% de la hauteur de l'écran
      justifyContent: 'center', // Justification verticale des éléments au centre
      alignItems: 'center', // Alignement horizontal des éléments au centre
    }}>

      <DropDownPicker
        items={items} // Associe la liste des items
        defaultValue={items[0].value} // Valeur par défaut
        containerStyle={{height: 50, width: '80%'}} // Style du conteneur
        searchable={true} // Permet la recherche
        placeholder={"Select a character"} // Placeholder
        searchPlaceholder={"Search a character"} // Placeholder de la recherche
        open={open} // Propriété open
        setOpen={setOpen} // Propriété setOpen
        setValue={setSelectedValue} // Propriété setValue
        value={selectedValue} // Propriété value
      />

    </View>
  );
}

export default Footer;