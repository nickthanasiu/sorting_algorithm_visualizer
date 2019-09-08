import { useSelector } from 'react-redux';

export const useStateArray = () => {
    return useSelector(state => state.arrayReducer.array);
};