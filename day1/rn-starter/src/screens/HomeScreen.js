import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Uong Minh Tan</Text>
      <Button
        onPress={() => {
          navigation.navigate("Components");
        }}
        title="Go to Component Demo"
      />
      <Button
        title="Go to list demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to counter screen"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to color screen"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to square screen"
        onPress={() => navigation.navigate("Square")}
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to list demo</Text>
      </TouchableOpacity> */}
      <Button
        title="Go to text screen"
        onPress={() => navigation.navigate("Text")}
      />
      <Button
        title="Go to box screen"
        onPress={() => navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
