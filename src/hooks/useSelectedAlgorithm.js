import { useSelector } from 'react-redux';

export const useSelectedAlgorithm = () => {
    return useSelector(state => state.algorithmReducer.selectedAlgorithm);
};
