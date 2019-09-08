import { 
    SET_PAIR_TO_CHECK,
    SET_PAIR_TO_SWAP,
    SET_IS_ITERATING,
} from '../actions/types';

const initialState = {
    pairToCheck: [],
    pairToSwap: [],
    isIterating: false
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_PAIR_TO_CHECK:
            return {
                ...state,
                pairToCheck: payload.array
            };
        case SET_PAIR_TO_SWAP:
            return {
                ...state,
                pairToSwap: payload.array
            };
        case SET_IS_ITERATING:
            return {
                ...state,
                isIterating: payload.boolean
            };
        default:
            return state;
    }
}