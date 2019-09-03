import {
    GENERATE_ARRAY,
    SET_ARRAY_SIZE,
} from './types';

export const generateArray = size => ({
    type: GENERATE_ARRAY,
    payload: { size }
});

export const setArraySize = size => dispatch => {
    dispatch({
        type: SET_ARRAY_SIZE,
        payload: { size }
    });

    dispatch({
        type: GENERATE_ARRAY,
        payload: { size }
    });
};