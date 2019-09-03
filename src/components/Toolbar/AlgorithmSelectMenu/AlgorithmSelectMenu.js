import React, { useContext } from 'react';
import styled from 'styled-components';
import { MdExpandMore } from 'react-icons/md';

import { DarkModeContext } from '../../../hooks/DarkModeContext';

const AlgorithmSelectMenu = styled.div`
    font-size: .6rem;
    font-weight: 500;
    display: flex;
    align-items: center;

    .text {
        color: ${props => (
            props.darkMode ? props.theme.dark.text : props.theme.light.text
        )};
        transition: color .5s ease;
        -webkit-transition: color .5s ease;
    }

    .selected-alg {
        width: 3rem;
        margin-left: 1rem;
        color: ${props => (
            props.darkMode ? props.theme.dark.primary : props.theme.light.primary
        )};
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: color .5s ease;
        -webkit-transition: color .5s ease;
    }
`;

export default () => {
    const { darkMode, theme } = useContext(DarkModeContext);
    return (
        <AlgorithmSelectMenu
            darkMode={darkMode}
            theme={theme}
        >
            <span className="text">
                Select Sorting Algorithm:
            </span>
            <span className="selected-alg">
                Merge
                <MdExpandMore size={'.75rem'} />
            </span>
        </AlgorithmSelectMenu>
    );
};
