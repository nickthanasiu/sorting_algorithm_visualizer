import {
    SET_PAIR_TO_CHECK,
    SET_PAIR_TO_SWAP,
    SET_IS_ITERATING,
} from './types';

export const setPairToCheck = array => ({
    type: SET_PAIR_TO_CHECK,
    payload: { array }
});

export const setPairToSwap = array => ({
    type: SET_PAIR_TO_SWAP,
    payload: { array }
});

export const setIsIterating = boolean => ({
    type: SET_IS_ITERATING,
    payload: { boolean }
});