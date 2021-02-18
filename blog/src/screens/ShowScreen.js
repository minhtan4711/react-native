import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ShowScreen = ({ route }) => {
  console.log(route.params.id);
  return (
    <View>
      <Text>{route.params.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
