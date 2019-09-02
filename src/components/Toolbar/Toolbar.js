import React from 'react';
import styled from 'styled-components';

// Styled components
const StyledToolbar = styled.div`
    border: 1px solid red;
`;

const Toolbar = () => {
    return (
        <StyledToolbar>
            Tools...
        </StyledToolbar>
    );
};

export default Toolbar;