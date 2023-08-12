import * as React from 'react'
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlatList } from "react-native";
import Asks from '../Asks';
import axios from 'axios';
import AskID from '../Asks/AskID';
import slugify from 'slugify';

const Stack = createNativeStackNavigator();

//Responsável por capturar e renderizar todas as perguntas.
export default function Home() {
  const [data, setData] = React.useState([]);
  const navigation = useNavigation();

  const getAsks = async () => {
    try {
      const result = await axios.get("http://192.168.0.181:8000/get-ask");
      setData(result.data);
    } catch (error) {
      console.log("Erro ao capturar os dados");
    }
  };
  
  React.useEffect(() => {
    getAsks();
  }, []);

  const handleAskPress = (_id, titulo) => {
    const screenName = slugify(titulo, { upper: true });
    navigation.navigate(screenName, { _id });
  };

  const Card = () => (
    <FlatList
      data={data}
      renderItem={({ item }) => <Asks item={item} onPress={() => handleAskPress(item._id, item.titulo)} />}
      keyExtractor={(item) => item._id}
    />
  );

  return (
    <Stack.Navigator>
      <Stack.Screen name="Ask" component={Card} />
      {data.map((item) => (
            //Lógica necessária para alterar o titulo da tela de acordo com o titulo recebido da api.
            //initialParams, passa _id como parâmetro inicial
          <Stack.Screen key={item._id} name={slugify(item.titulo, { upper: true })} component={AskID} initialParams={{ _id: item._id}} />
      ))}
    </Stack.Navigator>
  );
}

// export default function Home() {
//   return (
//   );
// }
