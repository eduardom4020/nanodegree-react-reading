import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducers from '../reducers';

export const MainStore = createStore(
    Reducers,
    composeWithDevTools(
        applyMiddleware(),
        // other store enhancers if any
    )
);