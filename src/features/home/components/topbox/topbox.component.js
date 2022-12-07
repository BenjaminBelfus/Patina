import React from "react";
import { Text, Searchbar, Button } from "react-native-paper";
import { TouchableOpacity } from "react-native";

import {
  GroupSelectionContainer,
  ButtonContainer,
  CustomButton,
  TopBoxContainer,
  SearchContainer,
} from "./topbox.style";

export const TopBox = () => {
  return (
    <>
      <GroupSelectionContainer>
        <Text> Group Name</Text>
      </GroupSelectionContainer>
      <TopBoxContainer>
        <ButtonContainer>
          <CustomButton>Click Me</CustomButton>
          <CustomButton>Click Me Too</CustomButton>
        </ButtonContainer>
        <SearchContainer>
          <Searchbar></Searchbar>
        </SearchContainer>
      </TopBoxContainer>
    </>
  );
};
