import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateArray } from '../../../actions/array';

import Button from '../../reusable/Button';


export default () => {
    const dispatch = useDispatch();
    const { arraySize } = useSelector(state => state.arrayReducer);

    function handleClick() {
        dispatch(generateArray(arraySize));
    }

    return (
        <Button
            value="Generate Array"
            handleClick={handleClick}
        >
            Generate Array
        </Button>
    );
};