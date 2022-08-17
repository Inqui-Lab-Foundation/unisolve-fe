import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

export function configureStore(initialState) {
    const store = createStore(
        reducers,

        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    );

    return store;
}
