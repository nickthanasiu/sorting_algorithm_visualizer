import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Root reducer
import rootReducer from './reducers';

const configureStore = () => {

    const middlewares = [thunk];

    return createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(...middlewares)
        )
    );
};

export default configureStore;