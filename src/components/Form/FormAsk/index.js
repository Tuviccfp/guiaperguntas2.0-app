import axios from 'axios';
import * as React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function FormAsk() {
  const [titulo, setTitulo] = React.useState("");
  const [descricao, setDescricao] = React.useState("");
  const navigation = useNavigation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios
        .post("http://192.168.0.181:8000/save-ask", {
          titulo: titulo,
          descricao: descricao,
        });
        const updatePergunta = result.data;
        navigation.goBack( { newData: updatePergunta }) //Navego de volta com os dados sendo passados como parâmetro para newData
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Titulo:</Text>
        <TextInput
          style={styles.input}
          value={titulo}
          onChangeText={(e) => setTitulo(e)}
          placeholder='Digite o título da pergunta'
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Descrição:</Text>
        <TextInput 
            style={styles.input}
            value={descricao}
            onChangeText={(e) => setDescricao(e)}
            placeholder='Digite a descrição da pergunta' />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.textButton}>Publicar</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
    formContainer: {
        margin: 30,
        display: 'flex',
        alignItems: 'center',
    }, 
    formGroup: {
        margin: 10,
    },
    label: {
        textTransform: 'uppercase'
    },
    input: {
        width: 215,
        padding: 10,
        margin: 10,
        height: 45,
        borderWidth: 1,
        borderRadius: 15
    },
    button: {
        borderWidth: 1,
        backgroundColor: 'tomato',
        padding: 10,
        borderRadius: 5,
        margin: 5
    },
    textButton: {
    }
})