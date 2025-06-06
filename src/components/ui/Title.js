import { Text, StyleSheet } from "react-native"
import { Colors } from "../../../utils/colors"

export const Title = ({children}) => {
    return (
        <>
        <Text style={styles.title}>{children}</Text>
        </>
    )
}

const styles = StyleSheet.create({
      title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    borderRadius: 8,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    backgroundColor: Colors.primary500 + "BF"

  }
})