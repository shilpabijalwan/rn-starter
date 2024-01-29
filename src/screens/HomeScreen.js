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
      <View>
        {/* <Button title="List component" /> */}
        <TouchableOpacity onPress={() => navigation.navigate("ListComp")}>
          <Text>List Component</Text>
        </TouchableOpacity>
      </View>
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
