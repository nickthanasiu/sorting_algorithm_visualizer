import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

// Context
import { DarkModeContext } from '../../contexts/DarkModeContext';

// Custom hooks
import { usePairToCheck } from '../../hooks/usePairToCheck';
import { usePairToSwap } from '../../hooks/usePairToSwap'; 
import { useSorted } from '../../hooks/useSorted';

// Actions
import { generateArray } from '../../actions/array';

//Components
import DarkModeToggle from './DarkModeToggle';

const Main = styled.div`
    width: 60rem;
    height: 100%;
    padding: 2rem 0;
`;

const ChartContainer = styled.div`
    height: 20rem;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;

const Bar = styled.div`
    background-color: ${props => props.backgroundColor};
    margin-right: .375rem;
    width: ${props => 768 / (props.arraySize * 3)}px;
    height: ${props => props.num * 3}px;
`;

export default () => {
    const { darkMode, theme } = useContext(DarkModeContext);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(generateArray());
    }, []);
    
    const { array, arraySize } = useSelector(state => state.arrayReducer);
    const pairToSwap = usePairToSwap();
    const pairToCheck = usePairToCheck();
    const sorted = useSorted();

    return (
        <Main>
            <ChartContainer>
            {array.map((num, index) => {
                const backgroundColor =
                    pairToSwap.includes(index) ? 'red' :
                    pairToCheck.includes(index) ? 'green' : 
                    sorted.includes(index) ? 'green' : theme.light.bar;
                    return (
                        <Bar
                            key={index}
                            darkMode={darkMode}
                            theme={theme}
                            num={num}
                            arraySize={arraySize}
                            backgroundColor={backgroundColor}
                        />
                    );
                })}
            </ChartContainer>
            <DarkModeToggle />
        </Main>
    );
};