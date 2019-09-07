import { combineReducers } from 'redux';

import arrayReducer from './array';
import algorithmReducer from './algorithm';

export default combineReducers({
    arrayReducer,
    algorithmReducer
});