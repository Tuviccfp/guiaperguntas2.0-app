import * as React from 'react';
import axios from "axios";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";

export default function FormResponse({ route }) {
    const [data, setData] = React.useState({});
    const {_id} = route.params;

    const getAskForResponse = async () => {
        try {
            const result = await axios.get(`http://192.168.0.181:8000/ask/${_id}`);
            const askData = result.data;
    
            const ask = {
                _id: askData.askId._id
            }
            setData(ask)
        } catch (error) {
            console.log('Erro')
        }
    }

    React.useEffect(() => {
        getAskForResponse()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.label}>Corpo da resposta:</Text>
                <TextInput style={styles.input} />
                <TextInput style={styles.input} value={data._id} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        textAlign: 'center'
    },
    input: {    
        borderWidth: 1,
        margin: 10,
        padding: 10,
        width: 230,
        height: 40
    },
    button: {
        borderWidth: 1,
        backgroundColor: 'tomato',
        width: 130,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        textAlign: 'center'
    }
})
