import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1", age: 20 },
    { name: "Friend 2", age: 45 },
    { name: "Friend 3", age: 32 },
    { name: "Friend 4", age: 27 },
    { name: "Friend 5", age: 53 },
    { name: "Friend 6", age: 30 },
    { name: "Friend 7", age: 29 },
  ];

  return (
    <FlatList
      //theo chieu ngang
      // horizontal={true}
      //hien thanh scroll bar o duoi
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        //element === {item: {name: "Friend #1"}, index: 0}
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age: {item.age}
          </Text>
        );
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
