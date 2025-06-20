import { Text, StyleSheet, Platform } from "react-native"
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
    borderWidth: Platform.select({ios: 0, android: 2}),
    borderColor: "white",
    padding: 12,
    backgroundColor: Colors.primary500 + "BF",
    maxWidth: "80%",
    minWidth: "60%"

  }
})