import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.viewStyle}>
      <Text>Counter</Text>
      <Button
        color="#841584"
        title="increment"
        onPress={() => setCounter((pre) => pre + 1)}
      />
      <Text style={styles.TextStyle}>counter value: {counter}</Text>
      <Button
        title="decrement"
        onPress={() => setCounter((pre) => pre - 1)}
        disabled={counter == 0}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 2,
    borderColor: "cyan",
    width: "70%",
    alignSelf: "center",
    gap: 20,
  },
  TextStyle: {
    color: "brown",
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    fontSize: 20,
    margin: 14,
  },
});

export default Counter;
