import React from "react";
import { Text, StyleSheet, View } from "react-native";

function Componentscreen() {
  return (
    <View style={styles.ViewStyle}>
      <Text style={styles.comstyle}> this is Componentscreen</Text>
      <Text style={styles.subText}> welcome to componentsscreen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  comstyle: {
    fontSize: 24,
    color: "blue",
    margin: "auto",
    paddingLeft: 22,
    textAlign: "center",
  },
  subText: {
    margin: "auto",
    color: "red"
  },
});
export default Componentscreen;
