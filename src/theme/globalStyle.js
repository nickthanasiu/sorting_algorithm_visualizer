import { createGlobalStyle } from 'styled-components';
import { create } from 'domain';

const global = {
    bar: 'rgba(87, 127, 229, .78)',
};

export const themes = {
    lightMode: {
        background: '#fff',
        text: '#000',
        primary: '#5432DE',
        secondary: '#32DEAA',
        bar: global.bar,
    },
    darkMode: {
        background: '#000',
        text: '#fff',
        primary: '#32DEAA',
        secondary: '#5432DE',
        bar: global.bar,
    },
};

const GlobalStyle = createGlobalStyle`
    
`;