/* eslint-disable linebreak-style */
import { createStore, applyMiddleware } from 'redux';
// thunk permet de gerer l'asynchrone dans le reducer
// peremttra de faire en sorte que chaque action s'excutes synchroniquement
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
