import React, { useContext } from 'react';
import styled from 'styled-components';
import { FiMoon, FiSun } from "react-icons/fi";
import { DarkModeContext } from '../../../hooks/DarkModeContext';

const DarkModeToggle = styled.button`
    box-sizing: border-box;
    color: ${props => (
        props.darkMode ? props.theme.dark.primary : props.theme.light.primary
    )};
    height: 3rem;
    width: 8rem;
    padding: 1rem;
    font-size: .6rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    background-color: inherit;
    border: none;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1000;

    transition: color .5s ease;
    -webkit-transition: color .5s ease;

    &:hover {
        box-sizing: border-box;
        border: 1px solid ${props => (
            props.darkMode ? props.theme.dark.primary : props.theme.light.primary
        )};
    }

    &:focus {
        outline: none;
    }
    
    .icon {
        color: inherit;
    }

    .button-text {
        margin-top: .5rem;
    }
`;

export default () => {
    const { darkMode, theme, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <DarkModeToggle
            darkMode={darkMode}
            theme={theme}
            onClick={toggleDarkMode}
        >
            { darkMode && (<FiSun className="icon" />)}
            { !darkMode && (<FiMoon className="icon" />)}
            <span className="button-text">
                Switch to { darkMode ? 'Light' : 'Dark' } Mode
            </span>
        </DarkModeToggle>
    );
};