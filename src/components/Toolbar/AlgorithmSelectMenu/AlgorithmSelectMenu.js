import React, { useContext } from 'react';
import styled from 'styled-components';

const AlgorithmSelectMenu = styled.div`
    border: 1px solid red;
`;

export default () => {
    return (
        <AlgorithmSelectMenu>
            Select Sorting Algorithm:
        </AlgorithmSelectMenu>
    );
};
