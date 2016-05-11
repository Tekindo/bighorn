import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TestComponent from './test/test-component';
import configureStore from './test/test-redux';
import styles from '../styles/main.scss';

/* added support for Dev Tools */
let store = configureStore(0);
// setup components
// fire start event.
// teardown



render(
    <Provider store={store}>
    <TestComponent />
    </Provider>, 
    document.getElementById('root')
);

store.subscribe( () => console.log(store.getState()) );

store.dispatch({ type: 'INCREMENT' });

console.log("web pack OK");
console.log(require("./test/webpack-check"));