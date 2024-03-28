import react, {_Image, Image, Text, View} from "react-native";

function Header () {
 const uri ="https://static.wikia.nocookie.net/gensin-impact/images/4/4e/A_Thousand_Questions_With_Paimon_2021-06-25_Thinking.gif/revision/latest?cb=20210628233812"
    return (
        <View>
            <Text>Genshindle</Text>
            <Image source={
                {uri}} width={120} height={80}></Image>
        </View>

    );
}

export default Header;