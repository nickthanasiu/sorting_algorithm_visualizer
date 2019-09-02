import React, { useContext } from 'react';
import styled from 'styled-components';
import { DarkModeContext } from '../../hooks/DarkModeContext';

const Layout = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => (
        props.darkMode ? "black" : "white"
    )};
    color: ${props => props.darkMode ? "white" : "black "}
`;

export default ({ children }) => {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <Layout darkMode={darkMode}>
            { children }
        </Layout>
    );
};

