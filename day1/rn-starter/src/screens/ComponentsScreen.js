//part 1: import libraries
import React from "react";
import { Text, StyleSheet, View } from "react-native";

//part 2: create a component - a function to return JSX
const ComponentsScreen = () => {
  //   const greeting = 123;
  const myName = "Tan";
  const greeting = (
    <Text style={styles.subHeaderStyle}>My name is {myName} </Text>
  );

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      {/* <Text>{ greeting }</Text> */}
      {greeting}
    </View>
  );
  //{fontsize: 30} inline style
};

//part 3: style
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

//part 4: export
export default ComponentsScreen;
