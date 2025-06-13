import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useState } from "react";

import { PrimaryButton } from "../components/ui/PrimaryButton";
import { Colors } from "../../utils/colors";
import { Title } from "../components/ui/Title";
import { Card } from "../components/ui/Card";
import { InstructionText } from "../components/ui/InstructionText";

export const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
      Alert.alert("Error", "Number has to be between 1 an 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  };

  const marginTopDistance = height < 400 ? 30 : 100;

  return (
    <>
      <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
          <View
            style={[styles.rootContainer, { marginTop: marginTopDistance }]}
          >
            <Title>Guess My Number</Title>
            <Card>
              <InstructionText>Enter a number</InstructionText>
              <TextInput
                style={styles.TextInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={numberInputHandler}
              />
              <View style={styles.buttonsContainer}>
                <View style={styles.singleButtonContainer}>
                  <PrimaryButton onPress={resetInputHandler}>
                    Reset
                  </PrimaryButton>
                </View>
                <View style={styles.singleButtonContainer}>
                  <PrimaryButton onPress={confirmInputHandler}>
                    Confirm
                  </PrimaryButton>
                </View>
              </View>
            </Card>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    elevation: 12,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  TextInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.text500,
    borderBottomWidth: 2,
    color: Colors.text500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  singleButtonContainer: {
    flex: 1,
  },
});
