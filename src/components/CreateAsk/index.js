import { View, Text, StyleSheet } from "react-native";
import FormAsk from "../Form/FormAsk";

export default function CreateAsk() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crie sua própria pergunta e espere uma resposta com a solução!</Text>
            <FormAsk />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        width: '70%'
    }
})