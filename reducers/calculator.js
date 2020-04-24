/* eslint-disable linebreak-style */
import {
  ADD, HANDLE_TEXT_INPUT, HANDLE_BUTTON_PRESS, RESET,
} from '../actions/actionTypes';

const initialState = {
  number: 0,
  operator: '',
  number2: 0,
  result: '',
  display: 0,
};
const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state };
    case HANDLE_TEXT_INPUT:

      return { ...state, number: action.payload };

    case HANDLE_BUTTON_PRESS:
      if (action.payload === '=') {
        switch (state.operator) {
          case '+':
            return { ...state, result: state.number + state.number2 };
          case '*':
            return { ...state, result: state.number * state.number2 };
          case '/':
            return { ...state, result: state.number / state.number2 };
          case '-':
            return { ...state, result: state.number - state.number2 };
          default:
            return { ...state, result: state.number };
        }
      }
      if (isNaN(action.payload)) {
        if (state.number !== 0) {
          return { ...state, operator: action.payload, display: action.payload };
        }
      }
      if (state.operator !== '') {
        return {
          ...state,
          number2: action.payload + state.number2 * 10,
          display: action.payload,
        };
      }
      return {
        ...state,
        number: action.payload + state.number * 10,
        display: action.payload,

      };


      // switch (action.payload) {
      //   case 'AC':
      //     return { ...state, number: '' };
      //   case '+':
      //   case '-':
      //   case '*':
      //   case '/':
      //     return { ...state, operator: action.payload, display: state.display + action.payload }
      //   default:
      //     return { ...state };
      // }
    case RESET:
      return {
        ...state,
        number: 0,
        operator: '',
        number2: 0,
        display: 0,
        result: '',
      };
    default:
      return state;
  }
};
export default calculatorReducer;
