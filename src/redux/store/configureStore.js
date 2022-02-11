import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "../reducers/rootReducer";

const configureStore = () => {
    const middlewares = [thunk];
    const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enchancers = composeEnhancers(applyMiddleware(...middlewares));
    const store = createStore(rootReducers(),enchancers);

    return store;
}

export default configureStore;
