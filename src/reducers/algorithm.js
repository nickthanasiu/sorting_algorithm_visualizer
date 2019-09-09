import { SET_ALGORITHM } from '../actions/types';

const initialState = {
    selectedAlgorithm: 'Bubble'
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_ALGORITHM:
            return {
                ...state,
                selectedAlgorithm: payload.algorithm
            };
        default:
            return state;
    }
};