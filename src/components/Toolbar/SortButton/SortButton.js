import React from 'react';
import { useDispatch } from 'react-redux';

// Bubble sort algorithm
import { bubbleSort } from '../../../algorithms/bubbleSort';

// Custom hook to get array from redux state
import { useStateArray } from '../../../hooks/useStateArray';

// Reusable Button component
import Button from '../../reusable/Button';

export default ({ children }) => {
    const dispatch = useDispatch();
    const array = useStateArray();

    function handleClick() {
        bubbleSort(array, dispatch);
    }

    return (
        <Button 
            value="Sort"
            handleClick={handleClick}
        >
            Sort
        </Button>
    );
};