import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../../utils/colors";

export const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem} >
      <Text style={styles.textItem}>#{roundNumber}</Text>
      <Text style={styles.textItem}>Oponent Guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary500,
    borderWidth: 2,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.text300,
    flexDirection: "row",
    justifyContent: "space-between",
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 3
  },
  textItem: {
    fontFamily: 'open-sans'
  }
});
