import { View, Text , StyleSheet, Dimensions} from "react-native";

import { Colors } from "../../../utils/colors";


export const NumberContainer = ({children}) => {
    return (
        <View style={styles.container} >
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
};

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create ({
    container:{
        borderWidth: 4,
        borderColor: Colors.text300,
        padding: deviceWidth < 400 ? 12 : 0,
        margin: deviceWidth < 400 ? 12 : 0,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.primary500 + "BF",
        minWidth: "60%"
    },
    numberText: {
        color: Colors.text300,
        fontSize: deviceWidth < 400 ? 24 : 36,
        fontFamily: 'open-sans-bold'
    }

})