import react, {Image, Text, View} from "react-native";

function Header () {
  const notFoundGifURI ="https://static.wikia.nocookie.net/gensin-impact/images/4/4e/A_Thousand_Questions_With_Paimon_2021-06-25_Thinking.gif/revision/latest?cb=20210628233812"
  const [currentImage, setCurrentImage] = useState(bookIcon);

  const handlePress = () => {
    setCurrentImage(currentImage === bookIcon ? controllerIcon : bookIcon);
    // TODO: Change page to history
  };

  return (
    <View style={{
      position: "absolute",
      top: 0,
      alignItems: "center",
      borderBottomWidth: 1,
      width: "100%",
      paddingBottom: 10,
      backgroundColor: "#f0f0f0",
    }}>
      <Text style={{
        fontSize: 30,
        fontWeight: "bold",
      }}>Genshindle</Text>
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%",
      }}>
        <Image source={
          {uri: notFoundGifURI}} width={120} height={80}></Image>
        <View>
          {/* TODO: Insert dynamic value by API */}
          <Text>try 5/5</Text>
          <Text>Winstreak : 0</Text>
          <Text>Best Winstreak : 0</Text>
        </View>
      </View>

      <TouchableOpacity onPress={handlePress} style={{
        position: "absolute",
        right: 20,
        top: 5,
      }}>
        <Image
          source={currentImage}
          style={{ width: 30, height: 30 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>

  );
}

export default Header;