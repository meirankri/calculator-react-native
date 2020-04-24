/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Calculator from './screens/Calculator';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const store = createStore(reducers);

export default function App() {

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Calculator />
      </Provider>
    </SafeAreaProvider>

  );
}
