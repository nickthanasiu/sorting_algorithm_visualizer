import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { DarkModeContext } from '../../../hooks/DarkModeContext';

/*
    opacity: ${props.opacity}
    -webkit-transition: .2s;
    transition: opacity .2s;
*/

const sliderThumbStyles = props => (`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background: ${props.darkMode ? props.theme.dark.secondary : props.theme.light.secondary}
    cursor: pointer;
`);

const ArraySizeSlider = styled.div`
    width: 18rem;
    display: flex;
    align-items: center;
    color: #888;
    margin: 2rem 0;

    .label {
        color: ${props => (
            props.darkMode ? props.theme.dark.text : props.theme.light.text
        )};
        font-size: .75rem;
        font-weight: 500;
        margin-right: 1.25rem;
    }

    .slider {
        flex: 6;
        -webkit-appearance: none;
        width: 100%;
        height: .25rem;
        background: ${props => (
            props.darkMode? props.theme.dark.primary : props.theme.light.primary
        )};
        outline: none;

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
    const [value, setValue] = useState(50);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <ArraySizeSlider 
            opacity={value > 20 ? (value / 150) : .4} 
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
                max="150"
                step="10"
                onChange={handleChange}
            />
        </ArraySizeSlider>
    );
};

