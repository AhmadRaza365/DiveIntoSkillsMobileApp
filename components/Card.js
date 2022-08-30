import { View, Text, Image, Pressable, Linking } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Card = ({ data, isArticle }) => {
  const navigate = useNavigation();
  return (
    <View
      className="relative w-72 mx-3 mt-3 mb-5 rounded-md overflow-hidden shadow-lg"
      style={{
        shadowColor: "#000",
        elevation: 10,
      }}
    >
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
      <Pressable
        className="px-4 pb-4 pt-16 h-full bg-[#183114]/40 flex justify-end"
        onPress={() => {
          if (isArticle) {
            Linking.openURL("https://www.google.com");
          } else {
            navigate.navigate("Articles");
          }
        }}
      >
        <Text className="text-white text-xl font-bold">
          {data.title.split(" ").slice(0, 12).join(" ")}
          {data.title.split(" ").length > 12 && " ..."}
        </Text>
      </Pressable>
    </View>
  );
};

export default Card;
