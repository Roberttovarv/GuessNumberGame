import { View, Text , StyleSheet} from "react-native";

import { Colors } from "../../../utils/colors";


export const NumberContainer = ({children}) => {
    return (
        <View style={styles.container} >
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
};

const styles = StyleSheet.create ({
    container:{
        borderWidth: 4,
        borderColor: Colors.text300,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    numberText: {
        color: Colors.text300,
        fontSize: 36,
        fontFamily: 'open-sans-bold'
    }

})