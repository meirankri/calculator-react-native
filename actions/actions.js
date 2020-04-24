import { ADD, HANDLE_TEXT_INPUT, HANDLE_BUTTON_PRESS, RESET } from './actionTypes';

export const handleText = (value) => ({
  type: HANDLE_TEXT_INPUT,
  payload: value,
});
export const handleButtonPress = (value) => ({
  type: HANDLE_BUTTON_PRESS,
  payload: value,
});
export const reset = () => ({
  type: RESET,
});
export const newElem = (elemType) => ({
  type: ADD,
  payload: elemType,
});
