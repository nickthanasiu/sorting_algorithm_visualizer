import {
    GENERATE_ARRAY,
    SET_ARRAY_SIZE,
} from './types';

export const generateArray = size => ({
    type: GENERATE_ARRAY,
    payload: { size }
});