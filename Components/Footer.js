import React, { useState } from 'react';
import {TextInput, View} from "react-native";
import {Picker} from "@react-native-picker/picker";

function Footer() {
    const [selectedValue, setSelectedValue] = useState(null);

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
            <TextInput style={{
                height: 25,
                width: '80%',
                borderColor: 'black',
                backgroundColor: 'white',
                borderWidth: 1,
                padding: 5,
                borderRadius: 5,
            }}
                       placeholder={"Find a character.."}/>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Amber" value="Amber Test" />
                <Picker.Item label="Albedo" value="Albedo Test" />
                <Picker.Item label="Zhongli" value="Zhongli Test" />
                <Picker.Item label="Hu-tao" value="Hu-tao Test" />
            </Picker>
        </View>
    );
}

export default Footer;