import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/Card";
import sanityClient from "../client.js";

const HomeScreen = () => {
  const navigate = useNavigation();
  const [email, setEmail] = useState("");
  

  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
    });

    sanityClient.fetch(`*[_type == "post"]`).then((res) => {
      console.log(res);
    });
  }, []);

  const data = [
    {
      id: 1,
      title: "amazing resources that",
      image:
        "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=2280&h=950&dpr=1",
    },
    {
      id: 2,
      title:
        "Master Web Development with amazing resources thatMaster Web Development with amazing resources that",
      image:
        "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=2280&h=950&dpr=1",
    },
    {
      id: 3,
      title: "Master Web Development with amazing resources that",
      image:
        "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=2280&h=950&dpr=1",
    },
    {
      id: 4,
      title: "Master Web Development with amazing resources that",
      image:
        "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=2280&h=950&dpr=1",
    },
    {
      id: 5,
      title: "Master Web Development with amazing resources that",
      image:
        "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=2280&h=950&dpr=1",
    },
    {
      id: 6,
      title: "Master Web Development with amazing resources that",
      image:
        "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=2280&h=950&dpr=1",
    },
  ];

  const funFacts = [
    {
      id: 1,
      title: "Facts",
      description:
        "Tons of interesting facts about science, literature, philosophy and other cool topics.",
      apiProvider: "Ninjas Api",
    },
    {
      id: 2,
      title: "Quotes",
      description:
        "Read nearly endless amount of quotes from famous people throughout history.",
      apiProvider: "Ninjas Api",
    },
    {
      id: 3,
      title: "Riddles",
      description:
        "Thousands of riddles with answers to tell, share and enjoy with your friends.",
      apiProvider: "Ninjas Api",
    },
  ];

  return (
    <SafeAreaView className="bg-[#fcee21] flex-1">
      <ScrollView className="pb-16">
        <View className="bg-[#f3f4d3] flex-1 pb-20">
          <View className="overflow-hidden flex flex-col justify-center relative bg-[#183114]">
            <Image
              className="absolute top-0 right-0 brightness-50"
              style={{
                width: "120%",
                height: 400,
                resizeMode: "cover",
                overflow: "hidden",
              }}
              source={{
                uri: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=2280&h=950&dpr=1",
              }}
            />
            <View className="bg-[#183114]/70 px-4 py-10">
              <Text className="text-4xl text-[#fcee21] font-bold">
                Dive Into Skills
              </Text>
              <Text className="text-lg text-white my-3">
                Master Web Development with amazing resources that are available
                for free! Join our Newsletter and get alerted when new articles,
                topics or courses are published.
              </Text>
              <View className="flex flex-row my-3">
                <TextInput
                  className="grow border-[#fcee21] border-2 rounded-l-xl py-2 px-2 text-white text-lg placeholder:text-slate-400"
                  placeholder="Enter your email"
                  placeholderTextColor="#ffffff"
                  onChangeText={(text) => setEmail(text)}
                  autoComplete="name"
                  keyboardType="email-address"
                />

                <Pressable
                  className="bg-[#fcee21] flex items-center justify-center rounded-r-xl px-2"
                  onPress={() => {
                    alert("Working on it!");
                  }}
                >
                  <Text className="text-[#183114] text-base font-bold">
                    Subscribe
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>

          <Text className="text-center text-[#183114] text-2xl font-bold mt-5 mb-2">
            Latest Articles
          </Text>
          <ScrollView className="my-3" horizontal={true}>
            {data.map((item) => (
              <Card key={item.id} data={item} isArticle={true} />
            ))}
          </ScrollView>

          <Text className="text-center text-[#183114] text-2xl font-bold mt-5 mb-2">
            Popular Courses
          </Text>
          <ScrollView className="my-3" horizontal={true}>
            {data.map((item) => (
              <Card key={item.id} data={item} isArticle={false} />
            ))}
          </ScrollView>

          <View className="">
            <Text className="text-center text-[#183114] text-2xl font-bold mt-5 mb-2">
              Fun Facts
            </Text>
            <ScrollView className="my-3" horizontal={true}>
              {funFacts.map((fact) => (
                <Pressable
                  key={fact.id}
                  className="w-48 h-48 mx-3 mt-3 mb-5 items-center justify-center bg-[#183114] py-2 px-3 rounded-xl"
                  style={{
                    shadowColor: "#000",
                    elevation: 8,
                  }}
                  onPress={() => {
                    alert("Working on it!");
                  }}
                >
                  <Text className="text-[#fcee21] text-2xl font-bold my-2">
                    {fact.title}
                  </Text>
                  <Text className="text-[#f3f4d3] text-sm text-justify">
                    {fact.description}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
