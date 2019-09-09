import { SET_ALGORITHM } from './types';

export const setAlgorithm = algorithm => ({
    type: SET_ALGORITHM,
    payload: { algorithm }
});