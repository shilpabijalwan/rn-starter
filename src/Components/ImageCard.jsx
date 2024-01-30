import React from "react";
import { Image, Text, StyleSheet, View } from "react-native";

const ImageCard = ({ id, title, imageUrl }) => {
  console.log(imageUrl);
  return (
    <View style={styles.viewstyle}>
      <Image
        source={{ uri: imageUrl }}
        style={{ width: "100%", height: 300, margin: "auto" }}
      />
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewstyle: {
    borderWidth: 1,

    width: "98%",
    alignSelf: "center",
    gap: 14,
  },
});

export default ImageCard;
