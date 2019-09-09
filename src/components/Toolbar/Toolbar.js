import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

// Actions
import { setAlgorithm } from '../../actions/setAlgorithm';

// Context
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { DropdownMenuContext } from '../../contexts/DropdownMenuContext';

// Components
import GenerateArrayBtn from './GenerateArrayBtn';
import ArraySizeSlider from './ArraySizeSlider';
import AlgorithmSelectMenu from './AlgorithmSelectMenu';
import SortButton from './SortButton';
import Button from '../reusable/Button';

// Styled components
const ToolbarWrapper = styled.div`
    position: relative;    
`;

const Toolbar = styled.div`
    width: 100%;
    height: 6rem;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    z-index: 10000;
`;

//bottom: ${props => props.isDropdownOpen ? '-100%' : '110%' };

const DropdownMenu = styled.div`
    position: absolute;    
    
    box-shadow: 1px 2px 2px rgba(0, 0, 0, .4);
    
    transition: all .2s ease-in-out;
    transform: ${props => props.isDropdownOpen ? 'translateY(0)' : 'translateY(-6rem)'};
    background-color: ${props => (
        props.darkMode ? props.theme.dark.background : props.theme.light.background
    )};
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${props => (
        props.isDropdownOpen ? '100' : '-100'
    )};
`;

export default () => {
    const { darkMode, theme } = useContext(DarkModeContext);
    const { isDropdownOpen } = useContext(DropdownMenuContext);
    const dispatch = useDispatch();

    function handleClick(e) {
        const algorithm = e.target.innerHTML;
        dispatch(setAlgorithm(algorithm));
    }

    return (
        <ToolbarWrapper>
            <Toolbar darkMode={darkMode}>
                <GenerateArrayBtn />
                <ArraySizeSlider />
                <AlgorithmSelectMenu />
                <SortButton />
            </Toolbar>
            <DropdownMenu 
                isDropdownOpen={isDropdownOpen} 
                darkMode={darkMode}
                theme={theme}
            >
                <Button handleClick={e => handleClick(e)}>
                    Bubble
                </Button>
                <Button handleClick={e => handleClick(e)}>
                    Merge
                </Button>
                <Button handleClick={e => handleClick(e)}>
                    Selection
                </Button>
                <Button handleClick={e => handleClick(e)}>
                    Insertion
                </Button>
                <Button handleClick={e => handleClick(e)}>
                    Quick
                </Button>
            </DropdownMenu>
        </ToolbarWrapper>
    );
};
