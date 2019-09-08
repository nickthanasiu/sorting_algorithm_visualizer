import {
    SET_SORTED,
    RESET_SORTED,
} from './types';

export const setSorted = newArray => ({
    type: SET_SORTED,
    payload: { newArray }
});

export const resetSorted = () => ({
    type: RESET_SORTED
});