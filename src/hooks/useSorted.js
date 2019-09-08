import { useSelector } from 'react-redux';

export const useSorted = () => {
    return useSelector(state => state.sortedReducer.sorted);
};