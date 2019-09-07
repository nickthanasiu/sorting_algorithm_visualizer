import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { setArraySize } from '../../../actions/array';
import { DarkModeContext } from '../../../contexts/DarkModeContext';

/*
    opacity: ${props.opacity}
    -webkit-transition: .2s;
    transition: opacity .2s;
*/

const sliderThumbStyles = props => (`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${props.darkMode ? props.theme.dark.secondary : props.theme.light.secondary}
    cursor: pointer;
    transition: background-color .5s ease;
    -webkit-transition: background-color .5s ease;
`);

const ArraySizeSlider = styled.div`
    width: 18rem;
    display: flex;
    align-items: center;
    color: #888;
    margin: 2rem 10rem 2rem 0;

    .label {
        color: ${props => (
            props.darkMode ? props.theme.dark.text : props.theme.light.text
        )};
        font-size: .6rem;
        font-weight: 500;
        margin-right: 1.25rem;
        transition: color .5s ease;
        -webkit-transition: color .5s ease;
    }

    .slider {
        flex: 6;
        -webkit-appearance: none;
        width: 100%;
        height: .125rem;
        background-color: ${props => (
            props.darkMode? props.theme.dark.primary : props.theme.light.primary
        )};
        outline: none;
        transition: background-color .5s ease;
        -webkit-transition: background-color .5s ease;

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            ${props => sliderThumbStyles(props)}
        }

        &::-moz-range-thumb {
            ${props => sliderThumbStyles(props)}
        }
    }
`;

export default () => {
    const { darkMode, theme } = useContext(DarkModeContext);
    const { arraySize } = useSelector(state => state.arrayReducer);
    const dispatch = useDispatch();

    function handleChange(e) {
        dispatch(
            setArraySize(e.target.value)
        );
    }

    return (
        <ArraySizeSlider 
            color="#0074D99"
            darkMode={darkMode}
            theme={theme}
        >
            <label className="label" htmlFor="array-size">Array Size</label>
            <input 
                className="slider"
                type="range"
                id="start"
                name="array-size"
                min="10"
                max="80"
                step="10"
                onChange={handleChange}
            />
        </ArraySizeSlider>
    );
};

