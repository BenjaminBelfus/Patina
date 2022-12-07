import styled from "styled-components/native";

export const TopBoxContainer = styled.View`
  display: flex;
  row-gap: 10px;
  justify-content: space-around;
  flex-wrap: wrap;
  flex_direction: row;
  padding: 5px;
  width: 100%;
`;

export const SearchContainer = styled.View`
  width: 100%;
  padding: ${(props) => props.theme.space[1]};
`;

export const ContentContainer = styled.View`
  height: 30%;
  width: 100%
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  border-radius: 10px;
  margin: 5px;
`;

export const ForumContainer = styled.View`
  height: 30%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  border-radius: 10px;
  margin: 5px;
`;

export const GroupSelectionContainer = styled.View`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 30;
`;
