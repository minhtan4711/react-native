import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 }
  // must return a value
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : {
            ...state,
            red: state.red + action.payload,
          };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : {
            ...state,
            green: state.green + action.payload,
          };
    case "change_blue":
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : {
            ...state,
            blue: state.blue + action.payload,
          };
    default:
      return state;
  }
};

const SquareScreen = () => {
  {
    /*useReducer*/
  }
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  // console.log(state) // { red: 0, green: 0, blue: 0 }
  const { red, green, blue } = state;
  {
    /*useState */
  }
  // const [red, setRed] = useState(0);
  // const [green, setGreen] = useState(0);
  // const [blue, setBlue] = useState(0);

  // const setColor = (color, change) => {
  //   //color === 'red' 'green' 'blue'
  //   //change === +15 -15
  //   // if (color === "red") {
  //   //   if (red + change > 255 || red + change < 0) {
  //   //     return;
  //   //   } else {
  //   //     setRed(red + change);
  //   //   }
  //   // }
  //   switch (color) {
  //     case "red":
  //       red + change > 255 || red + change < 0 ? null : setRed(red + change);
  //       return;
  //     case "green":
  //       green + change > 255 || green + change < 0
  //         ? null
  //         : setGreen(green + change);
  //       return;
  //     case "blue":
  //       blue + change > 255 || blue + change < 0
  //         ? null
  //         : setBlue(blue + change);
  //       return;
  //     default:
  //       return;
  //   }
  // };

  return (
    <View>
      <ColorCounter
        // onIncrease={() => setColor("red", COLOR_INCREMENT)}
        // onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        // onIncrease={() => setColor("green", COLOR_INCREMENT)}
        // onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <ColorCounter
        // onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        // onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      {/* pass an object so need two braces {{}}  */}
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
    // <View>
    //   <View>
    //     <Text>Red</Text>
    //     <Button
    //       title="More red"
    //       onPress={() => {
    //         setColorRed(colorRed + 5);
    //       }}
    //     />
    //     <Button
    //       title="Less red"
    //       onPress={() => {
    //         setColorRed(colorRed - 5);
    //       }}
    //     />
    //   </View>
    //   <View>
    //     <Text>Green</Text>
    //     <Button
    //       title="More Green"
    //       onPress={() => {
    //         setColorGreen(colorGreen + 5);
    //       }}
    //     />
    //     <Button
    //       title="Less Green"
    //       onPress={() => {
    //         setColorGreen(colorGreen - 5);
    //       }}
    //     />
    //   </View>
    //   <View>
    //     <Text>Blue</Text>
    //     <Button
    //       title="More Blue"
    //       onPress={() => {
    //         setColorBlue(colorBlue + 5);
    //       }}
    //     />
    //     <Button
    //       title="Less Blue"
    //       onPress={() => {
    //         setColorBlue(colorBlue + 5);
    //       }}
    //     />
    //   </View>
    //   <View
    //     style={{
    //       height: 100,
    //       width: 100,
    //       backgroundColor: `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`,
    //     }}
    //   />
    // </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
