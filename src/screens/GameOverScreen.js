import { Text, Image } from "react-native";
import { Title } from "../components/ui/Title";

export const GameOverScreen = () => {
  return (
    <>
      <View>
        <Title>Game Over!</Title>
        <Image src={require('../assets/images/success.png')} />
      </View>
    </>
  );
};
