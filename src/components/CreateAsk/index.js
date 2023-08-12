import { View, Text, StyleSheet } from "react-native";

export default function CreateAsk() {
    return (
        <View style={styles.container}>
            <Text>Criar perguntas</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    }
})