import { useSelector } from 'react-redux';

export const usePairToSwap = () => {
    return useSelector(state => state.swapCheckReducer.pairToSwap);
};