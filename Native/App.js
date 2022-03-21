import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { theme } from './color';

import MainScreen from './MainScreen';
import DetailScreen from './DetailScreen';

const Stack = createStackNavigator();

export default function App() {
  // const [working, setWorking] = useState(true);
  // const[text, setText] = useState("");
  // const example1 = () => setWorking(false);
  // const example2 = () => setWorking(true);
  // const onChangeText = (payload) => setText(payload);

  // const [count, setCount] = useState(0);
  // const onPress = () => setCount(count+1);
  return (
    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //   <View style={styles.header}>
    //     <TouchableOpacity onPress={example1}>
    //       <Text style={{...styles.btnText, color: working ? "blue" : theme.gray }}>I'm False</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View>
    //     <TouchableOpacity onPress={example2}>
    //       <Text style={{...styles.btnText, color: !working ? "blue" : theme.gray }}>I'm True</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <TextInput 
    //     onChangeText={onChangeText}
    //     value={text}
    //     placeholder={working ? "False" : "True"}
    //     style={styles.input}
    //   />
    //   <View style={styles.counter}>
    //     <Text>Count : {count}</Text>
    //   </View>
    //   <View style={styles.button}>
    //     <Text onPress={onPress}>Click Here!</Text>
    //   </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MAIN"> 
        <Stack.Screen name="MAIN" component={MainScreen} options={{ title: '메인화면' }}/> 
        <Stack.Screen name="DETAIL" component={DetailScreen} options={{ title: '상세화면' }}/> 
      </Stack.Navigator>
    </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    alignItems: "center",
    padding: 10,
  },
  button: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#DDDDDD",
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
