import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {Text, View, Button} from "react-native";
import PropTable from "./PropTable";

function Propositions() {
  const propositions = useSelector(state => state.char.propositions);
  const selectedCharacter = useSelector(state => state.char.selectedCharacter);


  // Inverser l'ordre des propositions avant de les passer à PropTable
  const reversedPropositions = [...propositions].reverse();


  return (
    <View>
      <PropTable data={reversedPropositions} selectedCharacter={selectedCharacter} />
    </View>
  );
}

export default Propositions;