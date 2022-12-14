import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { HomeScreen } from "../../features/home/screens/home.screen";
import { HomeForumScreen } from "../../features/home/screens/home.forum.screen";

const homeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <homeStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <homeStack.Screen name="Content" component={HomeScreen} />
      <homeStack.Screen name="Forum" component={HomeForumScreen} />
    </homeStack.Navigator>
  );
};
