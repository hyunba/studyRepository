import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { theme } from './color';


export default function App() {
  const [working, setWorking] = useState(true);
  const[text, setText] = useState("");
  const example1 = () => setWorking(false);
  const example2 = () => setWorking(true);
  const onChangeText = (payload) => setText(payload);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={example1}>
          <Text style={{...styles.btnText, color: working ? "blue" : theme.gray }}>I'm False</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={example2}>
          <Text style={{...styles.btnText, color: !working ? "blue" : theme.gray }}>I'm True</Text>
        </TouchableOpacity>
      </View>
      <TextInput 
        onChangeText={onChangeText}
        value={text}
        placeholder={working ? "Falese" : "True"}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "gray",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    fontSize: 18,
  },
});
