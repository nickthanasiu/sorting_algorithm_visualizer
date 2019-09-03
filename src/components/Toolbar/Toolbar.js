import React, { useContext } from 'react';
import styled from 'styled-components';

// Context
import { DarkModeContext } from '../../hooks/DarkModeContext';

// Components
import GenerateArrayBtn from './GenerateArrayBtn';
import ArraySizeSlider from './ArraySizeSlider';
import AlgorithmSelectMenu from './AlgorithmSelectMenu';

// Styled components
const Toolbar = styled.div`
    width: 100%;
    height: 6rem;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
`;

export default () => {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <Toolbar darkMode={darkMode}>
            <GenerateArrayBtn />
            <ArraySizeSlider />
            <AlgorithmSelectMenu />
        </Toolbar>
    );
};
