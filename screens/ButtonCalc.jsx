/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

// const styles = StyleSheet.create({
//   buttonContainer: {
//     borderRadius: '50%',
//     backgroundColor: '#FFFFFF',
//     width: 40,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 5,

//   },
// });


const styles = StyleSheet.create({
  container : {
    height: Math.floor(buttonWidth - 15),
    width: Math.floor(buttonWidth - 15),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 7,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});
const ButtonCalc = ({ text, BC, handlePress }) => (
  <TouchableOpacity
    onPress={() => handlePress(text)}
    style={[styles.container, { backgroundColor: BC }]}
  >
    <Text style={styles.text}>
      {text}
    </Text>
  </TouchableOpacity>
);
export default ButtonCalc;
