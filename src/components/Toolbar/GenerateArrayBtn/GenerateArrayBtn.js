import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { DarkModeContext } from '../../../hooks/DarkModeContext';
import { generateArray } from '../../../actions/array';

const GenerateArrayBtn = styled.button`
    border: 1px solid ${props => (
        props.darkMode ? props.theme.dark.primary : props.theme.light.primary
    )};
    border-radius: 5px;
    width: 6.5rem;
    height: 1.875rem;
    margin-right: 5rem;
    background-color: inherit;
    color: ${props => props.darkMode ? props.theme.dark.primary : props.theme.light.primary };
    font-size: .6rem;
    font-weight: 500;
    font-family: 'Roboto';
    cursor: pointer;
    

    transition: all .2s ease;
    -webkit-transition: all .2s ease;
    

    &:hover {
        background-color: ${props => (
            props.darkMode ? props.theme.dark.primary : props.theme.light.primary
        )};
        color: white;
    }

    &:focus {
        outline: none;
    }
`;

export default () => {
    const { darkMode, theme } = useContext(DarkModeContext);
    const dispatch = useDispatch();
    const { arraySize } = useSelector(state => state.arrayReducer);

    function handleClick() {
        dispatch(generateArray(arraySize));
    }

    return (
        <GenerateArrayBtn
            darkMode={darkMode}
            theme={theme}
            onClick={handleClick}
        >
            Generate Array
        </GenerateArrayBtn>
    );
};