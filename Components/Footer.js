import React from 'react';
import {Dimensions, View} from "react-native";
import RNPickerSelect from 'react-native-picker-select';

function Footer() {
  const screenHeight = Dimensions.get('window').height; // Récupère la hauteur de l'écran

  // TODO: Data hard coded, to be replaced by an API call stored in the Redux store later
  const items = [
    {label: 'Amber', value: 'Amber Test'},
    {label: 'Albedo', value: 'Albedo Test'},
    {label: 'Zhongli', value: 'Zhongli Test'},
    {label: 'Hu-tao', value: 'Hu-tao Test'},
    {label: 'Ganyu', value: 'Ganyu Test'},
    {label: 'Diluc', value: 'Diluc Test'},
    {label: 'Klee', value: 'Klee Test'},
    {label: 'Jean', value: 'Jean Test'},
    {label: 'Venti', value: 'Venti Test'},
    {label: 'Xiao', value: 'Xiao Test'},
    {label: 'Keqing', value: 'Keqing Test'},
    {label: 'Mona', value: 'Mona Test'},
    {label: 'Qiqi', value: 'Qiqi Test'},
    {label: 'Tartaglia', value: 'Tartaglia Test'},
    {label: 'Xingqiu', value: 'Xingqiu Test'},
    {label: 'Chongyun', value: 'Chongyun Test'},
    {label: 'Bennett', value: 'Bennett Test'},
    {label: 'Fischl', value: 'Fischl Test'},
    {label: 'Sucrose', value: 'Sucrose Test'},
    {label: 'Razor', value: 'Razor Test'},
    {label: 'Barbara', value: 'Barbara Test'},
    {label: 'Noelle', value: 'Noelle Test'},
    {label: 'Beidou', value: 'Beidou Test'},
    {label: 'Xinyan', value: 'Xinyan Test'},
    {label: 'Ningguang', value: 'Ningguang Test'},
    {label: 'Diona', value: 'Diona Test'},
    {label: 'Xiangling', value: 'Xiangling Test'},
    {label: 'Lisa', value: 'Lisa Test'},
    {label: 'Kaeya', value: 'Kaeya Test'}
  ];

  return (
    <View style={{
      position: 'absolute', // Positionnement absolu
      bottom: 0, // En bas de l'écran
      width: '100%', // Largeur de 100% de l'écran
      height: screenHeight * 0.1, // Hauteur de 10% de la hauteur de l'écran
      backgroundColor: 'darkgray', // Couleur de fond
      justifyContent: 'center', // Justification des éléments au centre
      alignItems: 'center', // Alignement des éléments au centre
      borderTopWidth: 1, // Ajout d'une bordure en haut
      paddingTop: 12, // Centrage du component
      paddingBottom: 12, // Centrage du component
    }}>

      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={items}
        style={{ // Simplement un style par appareils
          inputIOS: {
            height: 50, // Hauteur de l'élément
            width: '80%', // Largeur de l'élément
            backgroundColor: '#fafafa', // Couleur de fond
            textAlign: 'center', // Alignement du texte
            alignSelf: 'center', // Ajouté pour centrer le RNPickerSelect
          },
          inputAndroid: {
            height: 50, // Hauteur de l'élément
            width: '80%', // Largeur de l'élément
            backgroundColor: '#fafafa', // Couleur de fond
            textAlign: 'center', // Alignement du texte
            alignSelf: 'center', // Ajouté pour centrer le RNPickerSelect
          },
        }}
      />

    </View>
  );
}

export default Footer;