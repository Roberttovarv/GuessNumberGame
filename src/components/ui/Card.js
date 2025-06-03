import { View, StyleSheet } from "react-native"
import { Colors } from "../../../utils/colors"

export const Card = ({children}) => {
    return (
        <>
        <View style={styles.card}>
{children}
        </View>
        </>
    )
}

const styles = StyleSheet.create({

  card: {
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
  }
})