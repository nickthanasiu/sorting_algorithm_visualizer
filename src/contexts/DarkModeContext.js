import { createContext } from 'react';

export const DarkModeContext = createContext({
    darkMode: true,
    toggleDarkMode: () => {},
    theme: {
        dark: {
            background: '#000',
            text: '#fff',
            primary: '#32DEAA',
            secondary: '#5432DE',
            bar: 'rgba(87, 127, 229, .78)',
        },
        light: {
            background: '#fff',
            text: '#000',
            primary: '#5432DE',
            secondary: '#32DEAA',
            bar: 'rgba(87, 127, 229, .78)',
        }
    },
});