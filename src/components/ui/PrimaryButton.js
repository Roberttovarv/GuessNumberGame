import { View, Text, Pressable, StyleSheet } from "react-native"

import { Colors } from "../../../utils/colors"


export const PrimaryButton = ({children, onPress}) => {  
    return (
        <View style={styles.outterCointainer}>
        <Pressable style={({pressed}) =>
            pressed 
                ? [styles.innerContainer, styles.pressed] 
                : styles.innerContainer} 
                
                onPress={onPress}>

            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    outterCointainer:{
        overflow: 'hidden',
        borderRadius: 28,
        margin: 3,
    },
    innerContainer: {
        backgroundColor: Colors.primary300,
        paddingVertical:8,
        paddingHorizontal: 16,
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
})