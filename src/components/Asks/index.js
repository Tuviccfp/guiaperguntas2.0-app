import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

//Função responsável por converter a data
function converterDate(time) {
  var date = new Date(time);
  const showDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  return showDate
}

export default function Asks({ item, onPress }) {
  return (
    <View style={styles.containerAsk}>
      <Text style={styles._id}>{item._id}</Text>
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
      <Text style={styles.createdAt}>{converterDate(item.createdAt)}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onPress(item._id)}
      > 
        <Text style={styles.textButton}>Responder</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  _id: {
    display: 'none'
  },
  titulo: {
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  descricao: {},
  createdAt: {},
  containerAsk: {
    borderWidth: 2,
    borderRadius: 15,
    padding: 30,
    paddingHorizontal: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10
  },
  button: {
    width: 100,
    height: 45,
    borderRadius: 10,
    backgroundColor: "tomato",
    padding: 10,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 20,  
  }
});
