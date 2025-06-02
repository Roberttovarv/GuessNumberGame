import { useState } from "react";
import { Text, StyleSheet, View, Alert } from "react-native";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { Title } from "../components/ui/Title";
import { NumberContainer } from "../components/game/NumberContainer";

const generateRandomNumber = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  }
  return randomNumber;
};
let minNum = 1;
let maxNum = 100;

export const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomNumber(minNum, maxNum, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert(
        "Error",
        "You put a paramete that doesnt match with your number",
        [{ text: "Sorry!", style: "cancel" }]
      );
      return;
    }

    if (direction === "lower") {
      maxNum = currentGuess;
    } else if (direction === "higher") {
      minNum = currentGuess + 1;
    }
    const newRandomNumber = generateRandomNumber(minNum, maxNum, currentGuess);
    setCurrentGuess(newRandomNumber);
  };

  return (
    <>
      <View style={styles.container}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={{ justifyContent: "center" }}>
          <Text>Higher or lower?</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.singleButtonContainer}>
            <PrimaryButton onPress={() =>nextGuessHandler("lower")}>
              -
            </PrimaryButton>
          </View>
          <View style={styles.singleButtonContainer}>
            <PrimaryButton onPress={() =>nextGuessHandler("higher")}>
              +
            </PrimaryButton>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  singleButtonContainer: {
    flex: 1,
  },
});
