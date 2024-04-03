import React, {useState} from 'react';
import {Dimensions, View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

function Footer() {
  const screenHeight = Dimensions.get('window').height; // Récupère la hauteur de l'écran
  let [open, setOpen] = useState(false); // Création d'un état local pour contrôler l'ouverture du DropDownPicker
  const [selectedValue, setSelectedValue] = useState("Default"); // Ajout de l'état pour la valeur sélectionnée

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
        searchPlaceholder={"Cherche un personnage"} // Placeholder de la recherche
        open={open} // Propriété open
        setOpen={setOpen} // Propriété setOpen
        setValue={setSelectedValue} // Propriété setValue
        value={selectedValue} // Propriété value
      />

    </View>
  );
}

export default Footer;