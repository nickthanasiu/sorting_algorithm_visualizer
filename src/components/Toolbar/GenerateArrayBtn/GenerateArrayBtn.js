import React, { useContext } from 'react';
import styled from 'styled-components';
import { DarkModeContext } from '../../../hooks/DarkModeContext';

const GenerateArrayBtn = styled.button`
    border: 1px solid ${props => (
        props.darkMode ? props.theme.dark.primary : props.theme.light.primary
    )};
    border-radius: 10px;
    width: 8.5rem;
    height: 2.5rem;
    color: ${props => props.darkMode ? props.theme.dark.primary : props.theme.light.primary };
    font-weight: 500;
    font-family: 'Roboto';
`;

export default () => {
    const { darkMode, theme } = useContext(DarkModeContext);
    console.log(useContext(DarkModeContext));
    return (
        <GenerateArrayBtn
            darkMode={darkMode}
            theme={theme}
        >
            Generate Array
        </GenerateArrayBtn>
    );
};