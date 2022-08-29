import { View, Text, Image } from "react-native";
import React from "react";

const Card = ({ data }) => {
  return (
    <View className="relative w-72 mx-3 rounded-md overflow-hidden shadow-lg">
      <Image
        source={{
          uri: data.image,
        }}
        className="absolute top-0 right-0 brightness-50"
        style={{
          width: "100%",
          height: 400,
          resizeMode: "cover",
          overflow: "hidden",
        }}
      />
      <View className="px-4 pb-4 pt-16 h-full bg-[#183114]/40 flex justify-end">
        <Text className="text-white text-xl font-bold">
          {data.title.split(" ").slice(0, 12).join(" ")}
          {data.title.split(" ").length > 12 && " ..."}
        </Text>
      </View>
    </View>
  );
};

export default Card;
