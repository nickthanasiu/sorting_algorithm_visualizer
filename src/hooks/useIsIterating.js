import { useSelector } from 'react-redux';

export const useIsIterating = () => {
    return useSelector(state => state.swapCheckReducer.isIterating);
};