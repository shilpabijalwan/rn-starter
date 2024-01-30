import React from "react";
import { ScrollView, Text, View } from "react-native";
import ImageCard from "../Components/ImageCard";
const images = [
  {
    id: 1,
    title: "forest",
    imageUrl:
      "https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?cs=srgb&dl=pexels-johannes-plenio-1423600.jpg&fm=jpg",
  },
  {
    id: 2,
    title: "beach",
    imageUrl:
      "https://thumbs.dreamstime.com/b/sunrise-over-beach-cancun-beautiful-mexico-40065727.jpg",
  },
  {
    id: 3,
    title: "mountains",
    imageUrl:
      "https://media.istockphoto.com/id/1300296030/photo/tropical-beach-palm-trees-sea-wave-and-white-sand.webp?b=1&s=612x612&w=0&k=20&c=g17Ermu4tIN3-u7FeSfvYxUmhY3j3MbXobHJiG_OQsE=",
  },
];

const ImageScreen = () => {
  return (
    <ScrollView style={{ width: "100%", borderWidth: 1, borderColor: "red" }}>
      <Text>Images Screen</Text>
      {images.map((ele) => {
        return <ImageCard {...ele} key={ele.id} />;
      })}
    </ScrollView>
  );
};

export default ImageScreen;
