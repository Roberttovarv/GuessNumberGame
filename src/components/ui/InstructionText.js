import { Text, StyleSheet } from "react-native";
import { Colors } from "../../../utils/colors";

export const InstructionText = ({children}) =>{
    return (
        <Text style={styles.text}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: Colors.text300,
        fontSize: 24
    }
})