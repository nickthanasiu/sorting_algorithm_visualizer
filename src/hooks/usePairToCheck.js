import { useSelector } from 'react-redux';

export const usePairToCheck = () => {
    return useSelector(state => state.swapCheckReducer.pairToCheck);
};