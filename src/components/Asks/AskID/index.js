import * as React from 'react'
import axios from "axios";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Asks from '..';
import { useNavigation } from '@react-navigation/native';
import FormResponse from '../../Form/FormResponse';

const Stack = createNativeStackNavigator();

//Função responsável por converter a data
function converterDate(time) {
    var date = new Date(time);
    const showDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    return showDate
  }

export default function AskID({ route }) {
    const [dataAsk, setDataAsk] = React.useState({});
    const [dataResponse, setDataResponse] = React.useState([]);
    const { _id } = route.params;
    const navigation = useNavigation();
    
    const getAskID = async () => {
        try {
            const result = await axios.get(`http://192.168.0.181:8000/ask/${_id}`);
            const askData = result.data;

            const perguntaData = {
                _id: askData.askId._id,
                titulo: askData.askId.titulo,
                descricao: askData.askId.descricao,
                createdAt: askData.askId.createdAt
            }

            const responseData = askData.response.map((item) => ({
                _id: item._id,
                body: item.body,
                perguntaId: item.perguntaId,
                createdAt: item.createdAt                
            }))
            
            setDataAsk(perguntaData)
            setDataResponse(responseData)
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        getAskID();
    }, [])

    const handleResponsePress = (_id) => {
        navigation.navigate('Resposta', { _id })
    }

    const Card = () => (
        <View style={styles.container}>
          <Asks item={dataAsk} onPress={() => handleResponsePress(dataAsk._id)} />
          <SafeAreaView>
            <FlatList
              data={dataResponse}
              renderItem={({ item }) => (
                <View style={styles.containerResponse} key={item._id}>
                  <Text style={styles.body}>{item.body}</Text>
                  <Text style={styles.createdAt}>Criado em: {converterDate(item.createdAt)}</Text>
                </View>
              )}
              keyExtractor={(item) => item._id}
            />
          </SafeAreaView>
        </View>
      )
    
       return (
         <Stack.Navigator screenOptions={{ headerShown: false }}>
             <Stack.Screen name="Card" component={Card}/>
             <Stack.Screen name="Resposta" component={FormResponse} />
             {/* {dataAsk.askId.map((item) => {
            })} */}
         </Stack.Navigator>
       );
    }

    const styles = StyleSheet.create({
        container: {
        },
        containerResponse: {
            borderWidth: 2,
            borderRadius: 15,
            margin: 10,
            paddingVertical: 15,
            flex: 1,
            justifyContent: 'space-between'
        },
        body: {
            textAlign: 'center',
            fontSize: 18,
            marginBottom: 1,
            padding: 10
        },
        createdAt: {
            textAlign: 'center',
            padding: 10
        }
    })