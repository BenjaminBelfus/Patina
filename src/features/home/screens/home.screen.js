import React from "react";
import { Text } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { TopBox } from "../components/topbox/topbox.component";
import { PostInfoCard } from "../components/postcard/post-info-card.component";

export const HomeScreen = () => {
  return (
    <SafeArea>
      <TopBox />
      <PostInfoCard />
    </SafeArea>
  );
};
