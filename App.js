import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import { StartGameScreen } from "./src/screens/StartGameScreen";
import { GameOverScreen } from "./src/screens/GameOverScreen.js";
import { GameScreen } from "./src/screens/GameScreen.js";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const startNewGameHndler = () => {
    setUserNumber(null)
    setGuessRounds(0)
  }

  const pickednNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(numberOfRounds)
    setGameIsOver(true);
  };

  let screen = (
    <StartGameScreen
      onPickNumber={pickednNumberHandler}
      onGameOver={gameOverHandler}
    />
  );

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHndler} />;
  }

  return (
    <>
    <StatusBar barStyle="dark-content" showHiddenTransition={true}/>
    <LinearGradient
      colors={["#f75cab", "#f5e4a9"]}
      style={styles.rootContainer}
      >
      <StatusBar style="light" translucent={true} hidden={true}/>
      <ImageBackground
        source={require("./assets/images/dices.png")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={{ opacity: 0.10 }}
      >
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
        </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
