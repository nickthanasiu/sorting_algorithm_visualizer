import React from 'react';
import styled from 'styled-components';

import DarkModeToggle from './DarkModeToggle';

const Main = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem;
`;

export default () => {
    return (
        <Main>
            <DarkModeToggle />
        </Main>
    );
};