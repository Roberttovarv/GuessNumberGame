import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import { StartGameScreen } from "./src/screens/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  
  const pickednNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
  } 

  return (
    <LinearGradient
      colors={["#f75cab", "#f5e4a9"]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("./assets/images/dices.png")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={{opacity:0.15}}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
