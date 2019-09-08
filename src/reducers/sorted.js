import { SET_SORTED, RESET_SORTED } from '../actions/types';

const initialState = {
    sorted: [],
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_SORTED:
            return {
                ...state,
                sorted: [...state.sorted, ...payload.newArray]
            };
        case RESET_SORTED:
            return {
                ...state,
                sorted: []
            };
        default:
            return state;
    }
};