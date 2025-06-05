import { Text, StyleSheet } from "react-native";
import { Colors } from "../../../utils/colors";

export const InstructionText = ({children, style}) =>{
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: Colors.text300,
        fontSize: 24,
        fontFamily: 'open-sans'
    }
})