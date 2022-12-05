import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "md-home",
  Chat: "md-chatbubble-ellipses",
  Marketplace: "md-cart",
  Profile: "person",
};

const Home = () => {
  <Text>Home</Text>;
};
const Chat = () => {
  <Text>Chat</Text>;
};
const Marketplace = () => {
  <Text>Marketplace</Text>;
};
const Profile = () => {
  <Text>Profile</Text>;
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Marketplace" component={Marketplace} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  </NavigationContainer>
);
