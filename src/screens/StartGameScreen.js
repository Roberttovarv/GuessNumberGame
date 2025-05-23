import { TextInput, View } from "react-native"

import { PrimaryButton } from "../components/PrimaryButtons"

export const StartGameScreen = () => {
    return (
        <>
        <View>
        <TextInput />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
        </View>
        </>
    )
}