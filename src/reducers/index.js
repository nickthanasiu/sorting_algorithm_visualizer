import { combineReducers } from 'redux';

import arrayReducer from './array';
import algorithmReducer from './algorithm';
import swapCheckReducer from './swapCheck';
import sortedReducer from './sorted';

export default combineReducers({
    arrayReducer,
    algorithmReducer,
    swapCheckReducer,
    sortedReducer,
});