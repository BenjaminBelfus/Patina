import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const name = "this is the cards name";

export const PostInfoCard = () => {
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover
        key={name}
        style={styles.cover}
        sourve={{
          uri: "https://images.unsplash.com/photo-1556195332-95503f664ced?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxheWluZyUyMGNhcmR8ZW58MHx8MHx8&w=1000&q=80",
        }}
      />
      <Text>This is the card name</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { margin: 5, backgroundColor: "lightgray" },
  cover: { padding: 20, backgroundColor: "white" },
});
