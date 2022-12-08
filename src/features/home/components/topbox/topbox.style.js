import styled from "styled-components/native";
import { Button } from "react-native-paper";

export const TopBoxContainer = styled.View`
  display: flex;
  row-gap: 10px;
  justify-content: space-around;
  flex_direction: column;
  padding: 5px;
  width: 100%;
`;

export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  margin: 5px;
  border-radius: 1px;
  justify-content: space-around;
`;

export const CustomButton = styled(Button)`
  flex-grow: 1;
  background-color: lightgray;
`;

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[1]};
`;

export const GroupSelectionContainer = styled.View`
  align-items: center;
  justify-content: center;
  display: flex;
  font-weight: bolder;
`;
