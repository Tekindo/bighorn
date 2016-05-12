import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TestComponent from './test/test-component';
import configureStore from './test/test-redux';
import styles from '../styles/main.scss';
import Activity from './ui-component/activity-view';

var app_data = {
    ui : {},
    activity_system : {
        activity : {
            id : 'brk_omelette',
            name: 'Omelette',
            nodes: [
                { type: 'single_node', id: 'preparation', instructions: 'take this and that'},
                { type: 'single_node', id: 'cook', instructions: 'take this and that'}
            ],
            edges: []
        },
    }
};


/* added support for Dev Tools */
let store = configureStore(app_data);
// setup components
// fire start event.
// teardown
const App = () => (
    <Provider store={store}>
    <Activity activity={store.getState().activity_system.activity}/>
    </Provider>
);

store.subscribe( () => console.log(store.getState()) );

store.dispatch({ type: 'APP_STARTED' });

console.log("web pack OK");
console.log(require("./test/webpack-check"));

export default App;


render(<App />,
       document.getElementById('root'))