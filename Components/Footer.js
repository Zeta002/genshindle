import React, {useState} from 'react';
import {View} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

function Footer() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Amber', value: 'Amber Test'},
    {label: 'Albedo', value: 'Albedo Test'},
    {label: 'Zhongli', value: 'Zhongli Test'},
    {label: 'Hu-tao', value: 'Hu-tao Test'},
  ]);

  function openDropDownPicker() {
    if(!open) setOpen(true);
  }

  return (

    <View style={{
      width: '100%',
      height: 80,
      backgroundColor: 'darkgray',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
    }}>

      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        containerStyle={{
          height: 50,
          width: '80%',
        }}
        style={{
          backgroundColor: '#fafafa'
        }}
        placeholder={'Select a character'}
      />

    </View>
  );
}

export default Footer;