import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [textString, setTextString] = useState("First Value");

  const func = () => {
    if (textString == "First Value") {
      setTextString("Second Value");
    } else {
      setTextString("First Value");
    }
  };

  return (
    <View style={styles.container}>
      <Text>{textString}</Text>
      <Button title="Hello World" onPress={func}></Button>
      <StatusBar style="auto" />
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
});
