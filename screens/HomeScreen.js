import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  Pressable,
  ScrollView,
  ScrollViewComponent,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/Card";

const HomeScreen = () => {
  const navigate = useNavigation();
  const [email, setEmail] = useState("");

  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
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
      title: "Master Web Development with amazing resources thatMaster Web Development with amazing resources that",
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

  return (
    <SafeAreaView className="bg-[#fcee21] flex-1 ~pb-16">
      <ScrollView className="pb-16">
        <View className="bg-[#f3f4d3] flex-1">
          <View className="overflow-hidden flex flex-col justify-center ~px-2 ~py-10 relative bg-[#183114]">
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

                <Pressable className="bg-[#fcee21] flex items-center justify-center rounded-r-xl px-2"
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
          <ScrollView
            className="my-3"
            horizontal={true}
          >
            {data.map((item) => (
              <Card key={item.id} data={item} />
            ))}
            
          </ScrollView>

          <Text className="text-center text-[#183114] text-2xl font-bold mt-5 mb-2">
            Popular Courses
          </Text>
          <ScrollView
            className="my-3"
            horizontal={true}
          >
            {data.map((item) => (
              <Card key={item.id} data={item} />
            ))}
            
          </ScrollView>
        </View>
      <View className="bg-[#183114] h-32">
        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
