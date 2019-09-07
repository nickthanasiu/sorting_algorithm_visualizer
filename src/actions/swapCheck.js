import {
    SWAP_CHECK,
    SET_IS_ITERATING
} from './types';
import { Action } from 'rxjs/internal/scheduler/Action';

export const swapCheck = array => {
    dispatch({
        type: SWAP_CHECK,
        payload: { array }
    });
};

export const setIsIterating = boolean => ({
    type: SET_IS_ITERATING,
    payload: { boolean }
});