import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WebScreen from "./screens/WebScreen";
import Icon from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

// const Stack = createNativeStackNavigator();

// Create a bottom navigator for the screens
const Stack = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <TailwindProvider>
          <Stack.Navigator
            screenOptions={({ route }) => ({
              tabBarShowLabel: false,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = "md-home";
                } else if (route.name === "Articles") {
                  iconName = "md-newspaper";
                } else if (route.name === "Courses") {
                  iconName = "md-tv";
                } else if (route.name === "FunFact") {
                  iconName = "md-bulb-sharp";
                } else {
                  iconName = "md-bulb-sharp";
                }

                return <Ionicons name={iconName} size={35} color={color} />;
              },
              tabBarActiveTintColor: "#fcee21",
              tabBarInactiveTintColor: "#ffffff",
              tabBarStyle: {
                backgroundColor: "#183114",
                position: "absolute",
                bottom: 10,
                left: 10,
                right: 10,
                elevation: 0,
                borderRadius: 15,
                height: 60,
                borderTopWidth: 0,
                shadowColor: "#000",
                elevation: 5,
              },
            })}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Articles" component={WebScreen} />
            <Stack.Screen name="Courses" component={WebScreen} />
            <Stack.Screen name="FunFact" component={WebScreen} />
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
  );
}
