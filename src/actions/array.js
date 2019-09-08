import {
    GENERATE_ARRAY,
    SET_ARRAY_SIZE,
    SET_ARRAY,
    RESET_SORTED,
} from './types';

export const generateArray = size => dispatch => {
    
    // Purge sorted array
    dispatch({
        type: RESET_SORTED
    });

    dispatch({
        type: GENERATE_ARRAY,
        payload: { size }
    });
};

export const setArraySize = size => dispatch => {
    dispatch({
        type: SET_ARRAY_SIZE,
        payload: { size }
    });

    dispatch(generateArray(size));
};

export const setArray = newArray => ({
    type: SET_ARRAY,
    payload: { newArray }
});