import * as React from 'react';
import axios from "axios";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function FormResponse({ route }) {
    const [data, setData] = React.useState({});
    const [body, setBody] = React.useState('');
    const [perguntaId, setPerguntaId] = React.useState('');
    const {_id, onDataUpdated} = route.params;
    const navigation = useNavigation();

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

    const idPergunta = data._id;
    const submitForm = async (e) => {
        e.preventDefault();
        await axios.post('http://192.168.0.181:8000/save-response', {
            body: body,
            perguntaId: idPergunta
        }).then((result) => {
            console.log(result.data);
            onDataUpdated() //Chama a função para atualizar os dados no componente pai.
            navigation.goBack();
        }).catch((err) => {
            console.log(err)
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.label}>Corpo da resposta:</Text>
                <TextInput style={styles.input} value={body} onChangeText={(e) => setBody(e)} placeholder='Digite uma resposta' />
                <TextInput style={styles.input} value={idPergunta} onChangeText={(e) => setPerguntaId(e)}/>
                <TouchableOpacity style={styles.button} onPress={submitForm}>
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
