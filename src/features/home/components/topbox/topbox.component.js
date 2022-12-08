import React from "react";
import { Searchbar, TouchableOpacity } from "react-native-paper";

import { Text } from "../../../../components/typography/text.component";

import {
  GroupSelectionContainer,
  ButtonContainer,
  CustomButton,
  TopBoxContainer,
  SearchContainer,
} from "./topbox.style";

export const TopBox = ({ navigation }) => {
  return (
    <>
      <GroupSelectionContainer>
        <Text> Group Name</Text>
      </GroupSelectionContainer>
      <TopBoxContainer>
        <ButtonContainer>
          <CustomButton>
            <Text>Content</Text>
          </CustomButton>
          <CustomButton>
            <Text>Forum</Text>
          </CustomButton>
        </ButtonContainer>
        <SearchContainer>
          <Searchbar></Searchbar>
        </SearchContainer>
      </TopBoxContainer>
    </>
  );
};
