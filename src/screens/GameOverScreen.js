import { Text, Image, View, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import { Title } from "../components/ui/Title";
import { Colors } from "../../utils/colors";
import { PrimaryButton } from "../components/ui/PrimaryButton";


export const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  const {width, height} = useWindowDimensions();

  let imageSize = 300;

  if (width < 400) { 
    imageSize = 150
  }

  if (height < 400) {
    imageSize = 100
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  }

  return (
    <ScrollView style={{flex: 1}}>
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image
          source={require("../../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
          guess the number <Text style={styles.highlight}>{userNumber}</Text>{" "}
        </Text>
      </View>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: Colors.primary500,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500
  },
});
