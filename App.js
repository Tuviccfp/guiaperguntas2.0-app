import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function ButtonHomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
          Bem vindo ao Guia Perguntas & Respostas.
        </Text>
        <Text style={styles.description}>
          Uma plataforma onde você pode postar perguntas em anônimo e também
          responde-las em anônimo.
        </Text>
        <Text style={styles.description}>
          A proposta desse aplicativo é apenas para estudos. Foi um exercício
          proposto como conclusão de um curso, onde venho fazendo algumas
          aprimorações no código que faz tudo funcionar.
        </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.textButton}>Início</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Início"  component={ButtonHomeScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textTransform: "uppercase",
    fontSize: 15,
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
    margin: 10,
  },
  button: {
    width: 150,
    height: 55,
    borderRadius: 10,
    backgroundColor: "tomato",
    padding: 10,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 20,  
  }
});
