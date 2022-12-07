import React from "react";
import { Text, Searchbar } from "react-native-paper";
import { TouchableOpacity } from "react-native";

import {
  GroupSelectionContainer,
  TopBoxContainer,
  ContentContainer,
  ForumContainer,
  SearchContainer,
} from "./topbox.style";

export const TopBox = () => {
  return (
    <>
      <GroupSelectionContainer>
        <Text> Group Name</Text>
      </GroupSelectionContainer>
      <TopBoxContainer>
        <TouchableOpacity>
          <ContentContainer>
            <Text>Content</Text>
          </ContentContainer>
        </TouchableOpacity>
        <TouchableOpacity>
          <ForumContainer>
            <Text>Forum</Text>
          </ForumContainer>
        </TouchableOpacity>
        <SearchContainer>
          <Searchbar></Searchbar>
        </SearchContainer>
      </TopBoxContainer>
    </>
  );
};
