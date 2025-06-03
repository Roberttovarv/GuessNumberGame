import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import { StartGameScreen } from "./src/screens/StartGameScreen";
import { GameOverScreen } from "./src/screens/GameOverScreen.js";
import { GameScreen } from "./src/screens/GameScreen.js";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const pickednNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false)
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  let screen = (
    <StartGameScreen
      onPickNumber={pickednNumberHandler}
      onGameOver={gameOverHandler}
    />
  );

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      colors={["#f75cab", "#f5e4a9"]}
      style={styles.rootContainer}
    >
      <StatusBar style="light" />
      <ImageBackground
        source={require("./assets/images/dices.png")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
