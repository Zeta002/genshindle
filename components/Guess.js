import {Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {selectRandomCharacter} from "../actions/characterAction";
import {useEffect} from "react";

function Guess() {

  const dispatch = useDispatch();
  const selectedCharacter = useSelector(state => state.char.selectedCharacter);

  useEffect(() => {
    dispatch(selectRandomCharacter());
  }, [dispatch]);

  return (
    <View>
      <Text>Guess</Text>
      {selectedCharacter && <Text>{selectedCharacter.name}</Text>}
    </View>
  )
}

export default Guess;