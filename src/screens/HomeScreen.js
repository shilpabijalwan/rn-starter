import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  Separator,
  TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  // console.log("navigation", navigation.navigate);
  return (
    <View>
      <Text style={styles.text}>this is homescreen</Text>
      <View>
        <Button
          title="Component Screen"
          onPress={() => navigation.navigate("Components")}
        />
      </View>

      {/* <Button title="List component" /> */}
      <TouchableOpacity onPress={() => navigation.navigate("ListComp")}>
        <Text>List Component</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ImageScreen")}>
        <Text>Images</Text>
      </TouchableOpacity>
      <Button
        title="Counter app"
        onPress={() => navigation.navigate("Counter")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttons: {
    marginBottom: 10,
    paddingBottom: 10,
    gapBottom: 12,
  },
});

export default HomeScreen;
