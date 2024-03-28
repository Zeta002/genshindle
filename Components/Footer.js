import {TextInput, View} from "react-native";

function Footer() {
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
        </View>
    );
}

export default Footer;