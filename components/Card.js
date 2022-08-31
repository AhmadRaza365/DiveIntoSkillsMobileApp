import { View, Text, Image, Pressable, Linking } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../client.js";
const Card = ({ data, isArticle }) => {
  const navigate = useNavigation();

  return (
    <View
      className="relative w-72 min-h-[200px] mx-3 mt-3 mb-5 rounded-md overflow-hidden shadow-lg"
      style={{
        shadowColor: "#000",
        elevation: 10,
      }}
    >
      <Image
        source={{
          uri: urlFor(data.mainImage).url()
            ? urlFor(data.mainImage).url()
            : "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=2280&h=950&dpr=1",
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
        className="px-4 pb-4 pt-16 h-full bg-[#183114]/50 flex justify-end"
        onPress={() => {
          if (isArticle) {
            Linking.openURL(data.slug.current);
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
