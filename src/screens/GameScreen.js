import { useState, useEffect } from "react";
import { Text, StyleSheet, View, Alert, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GuessLogItem } from "../components/game/GuessLogItem";

import { PrimaryButton } from "../components/ui/PrimaryButton";
import { Title } from "../components/ui/Title";
import { NumberContainer } from "../components/game/NumberContainer";
import { Card } from "../components/ui/Card";
import { InstructionText } from "../components/ui/InstructionText";

const generateRandomNumber = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  }
  return randomNumber;
};
let minNum = 1;
let maxNum = 100;

export const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minNum = 1;
    maxNum = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert(
        "Error",
        "You put a parameter that doesnt match with your number",
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
    setGuessRounds((PrevGuessRounds) => [newRandomNumber, ...PrevGuessRounds]);
  };

  const guessRoundListLenght = guessRounds.length


  return (
    <>
      <View style={styles.container}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
          <InstructionText style>Higher or lower?</InstructionText>
          <View style={styles.buttonsContainer}>
            <View style={styles.singleButtonContainer}>
              <PrimaryButton onPress={() => nextGuessHandler("lower")}>
                <Ionicons name="remove" size={24} />
              </PrimaryButton>
            </View>
            <View style={styles.singleButtonContainer}>
              <PrimaryButton onPress={() => nextGuessHandler("higher")}>
                <Ionicons name="add" size={24} />
              </PrimaryButton>
            </View>
          </View>
        </Card>
        <View style={styles.listContainer}>
          <FlatList 
          data={guessRounds} 
          renderItem={(itemData) => (
                        <GuessLogItem 
                        roundNumber={guessRoundListLenght - itemData.index} 
                        guess={itemData.item} 
                        />
                      )}
          keyExtractor={(item) => item} 
          
          />
          {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
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
    marginTop: 20,
  },
  singleButtonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16
  }
});
