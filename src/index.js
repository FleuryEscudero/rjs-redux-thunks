import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    data : [1,2,3],
    selected:  1,
}
const reducer = (state = initialState, action ) => {
    return state
} 

const store = createStore (reducer, applyMiddleware(thunk))
ReactDOM.render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
