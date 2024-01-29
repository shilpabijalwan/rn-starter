import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
const studentData = [
  {
    name: "shilpa",
    age: 24,
  },
  {
    name: "diksha",
    age: 25,
  },
  {
    name: "shefali",
    age: 22,
  },
  {
    name: "pnkj",
    age: 27,
  },
  {
    name: "dipi",
    age: 27,
  },
  {
    name: "ishan",
    age: 27,
  },
];
export default function List() {
  return (
    // <View>
    //   {studentData.map((ele) => (
    //     <Text>{ele.name}</Text>
    //   ))}
    // </View>
    <FlatList
      horizontal //to display the list of students in the horizontally manner
      showsHorizontalScrollIndicator={false} // to hide scroll indicator when the list is displayed
      keyExtractor={(studentData) => studentData.name}
      data={studentData}
      renderItem={({ item, index }) => (
        <Text style={styles.textstyle}>
          {item.name} --- age:{item.age}
        </Text>
      )}
    />
  );
}
const styles = StyleSheet.create({
  textstyle: {
    marginVertical: 70,
    marginHorizontal: 30,
  },
});
