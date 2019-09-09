import React from 'react';
import { useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner'

// Actions
import { setIsIterating } from '../../../actions/swapCheck';

// Bubble sort algorithm
import { bubbleSort } from '../../../algorithms/bubbleSort';

// Custom hook to get array from redux state
import { useStateArray } from '../../../hooks/useStateArray';
import { useIsIterating } from '../../../hooks/useIsIterating';

// Reusable Button component
import Button from '../../reusable/Button';

export default () => {
    const dispatch = useDispatch();
    const array = useStateArray();
    const isIterating = useIsIterating();

    function handleClick() {
        dispatch(setIsIterating(true));
        bubbleSort(array, dispatch);
    }

    return (
        <Button 
            value="Sort"
            handleClick={handleClick}
        >
            { isIterating ? (
                <Loader
                    type="TailSpin"
                    color="#fff"
                    height="10"
                    width="40"
                />
                ) : 'Sort' 
            }
        </Button>
    );
};