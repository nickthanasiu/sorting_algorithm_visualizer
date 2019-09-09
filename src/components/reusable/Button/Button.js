import React, { useContext } from 'react';
import styled from 'styled-components';

import { DarkModeContext } from '../../../contexts/DarkModeContext';

const Button = styled.button`
    border: 1px solid ${props => (
        props.darkMode ? props.theme.dark.primary : props.theme.light.primary
    )};
    border-radius: 5px;
    width: 6.5rem;
    height: 1.875rem;
    margin-right: 5rem;
    margin-left: ${props => props.value === 'Sort' ? '7rem' : '0'};
    background-color: ${props => (
        props.value !== 'Sort' ?
            'inherit' : props.darkMode ?
                props.theme.dark.primary : props.theme.light.primary
    )};
    color: ${props => (
        props.value !== 'Sort' ?
            (props.darkMode ? props.theme.dark.primary : props.theme.light.primary) : 
            '#fff'
    )};
    font-size: .6rem;
    font-weight: 500;
    font-family: 'Roboto';
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    

    transition: all .2s ease;
    -webkit-transition: all .2s ease;
    

    &:hover {
        background-color: ${props => (
            props.darkMode ? props.theme.dark.primary : props.theme.light.primary
        )};
        color: white;
        transform: ${props => props.value !== 'Sort' ? 'none' : 'scale(1.05)'}
    }

    &:focus {
        outline: none;
    }
`;

export default ({ value, handleClick, children }) => {
    const { darkMode, theme } = useContext(DarkModeContext);

    return (
        <Button 
            value={value}
            darkMode={darkMode}
            theme={theme}
            onClick={handleClick}
        >
            { children }
        </Button>
    );
};
