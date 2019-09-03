import {
    GENERATE_ARRAY,
    SET_ARRAY_SIZE
} from '../actions/types';
import { generateRandomArray } from '../utils/generateRandomArray';

const initialState = {
    array: [],
    arraySize: 50,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GENERATE_ARRAY:
            return {
                ...state,
                array: generateRandomArray(action.payload.size),
                arraySize: action.payload.size || 50
            };
        case SET_ARRAY_SIZE:
            return {
                ...state,
                arraySize: action.payload.size || 50
            };
        default:
            return state;
    }
};