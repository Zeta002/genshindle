import React from 'react';
import {Dimensions, View} from "react-native";
import RNPickerSelect from 'react-native-picker-select';

function Footer() {
  const screenHeight = Dimensions.get('window').height;
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
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: screenHeight * 0.14,
      backgroundColor: 'darkgray',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopWidth: 1,
      paddingTop: 12,
      paddingBottom: 12,
    }}>

      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={items}
        style={{
          inputIOS: {
            height: 50,
            width: '80%',
            backgroundColor: '#fafafa',
            textAlign: 'center',
          },
          inputAndroid: {
            height: 50,
            width: '80%',
            backgroundColor: '#fafafa',
            textAlign: 'center',
          },
        }}
      />

    </View>
  );
} // Cette accolade fermante était manquante.

export default Footer;