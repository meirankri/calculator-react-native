/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View, FlatList, StyleSheet, Text,
} from 'react-native';
import { connect } from 'react-redux';
import uniqueId from '../helpers/uniqueId';
import ButtonCalc from './ButtonCalc';
import { HANDLE_TEXT_INPUT, HANDLE_BUTTON_PRESS, RESET } from '../actions/actionTypes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    marginTop: 10,
  },
  input: {
    height: 40,
    backgroundColor: 'white',
  },
  display: {
    height: 50,
    backgroundColor: 'white',
    fontSize: 20,
    textAlign: 'left',
  },
  // list: {
  //   justifyContent: 'center',
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  // },
});
const calculatrice = [
  { text: 'AC', BC: '#A6A6A6' },
  { text: 'Neg', BC: '#A6A6A6' },
  { text: '%', BC: '#A6A6A6' },
  { text: '/', BC: '#E39D4A' },
  { text: 7, BC: '#333333' },
  { text: 8, BC: '#333333' },
  { text: 9, BC: '#333333' },
  { text: '*', BC: '#E39D4A' },
  { text: 4, BC: '#333333' },
  { text: 5, BC: '#333333' },
  { text: 6, BC: '#333333' },
  { text: '+', BC: '#E39D4A' },
  { text: 1, BC: '#333333' },
  { text: 2, BC: '#333333' },
  { text: 3, BC: '#333333' },
  { text: '-', BC: '#E39D4A' },
  { text: 0, BC: '#333333' },
  { text: '', BC: '#333333' },
  { text: '.', BC: '#333333' },
  { text: '=', BC: '#E39D4A' },
];


const Calculator = ({
  calculatorReducer, handleButtonPress, reset,
}) => {
  const onPressCalcul = (number) => {
    if (number === 'AC') reset();
    else handleButtonPress(number);
  };
  return (
    <View style={styles.container}>
      {console.log(calculatorReducer)}
      <Text style={styles.display}>
        {calculatorReducer.result !== '' ? calculatorReducer.result : calculatorReducer.display}
      </Text>
      <FlatList
      // contentContainerStyle={styles.list}
        data={calculatrice}
        keyExtractor={() => uniqueId().toString()}
      // numColumns affiche la flatlist avec le nombre de colomns en props
        numColumns={4}
        renderItem={({ item }) => <ButtonCalc handlePress={onPressCalcul} text={item.text} BC={item.BC} />}
      />

    </View>
  );
};
const mapDispatchToProps = (dispatch) => ({
  // dispatching plain actions
  handleText: (value) => dispatch({ type: HANDLE_TEXT_INPUT, payload: value }),
  handleButtonPress: (value) => dispatch({ type: HANDLE_BUTTON_PRESS, payload: value }),
  reset: () => dispatch({ type: RESET }),
});
const mapStateToProps = (state) => (
  state
);
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
