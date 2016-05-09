import { createStore, middleware, compose } from 'redux';

export default function counter(state=0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        default:
            return state;
    }
}
    
export default function configureStore(initialState) {
    const store = createStore(counter, initialState, 
      window.devToolsExtension ? window.devToolsExtension() : f => f
    );
    return store;
}