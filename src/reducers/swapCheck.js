import { SWAP_CHECK } from './types';

const initialState = {
    pairToCheck: [],
    arrayToIterateOn: [],
    isIterating: false
};

export default (state = initialState, action) {
    switch (action.type) {
        case SWAP_CHECK:
            return {
                ...state,

            };
        default:
            return state;
    }
}