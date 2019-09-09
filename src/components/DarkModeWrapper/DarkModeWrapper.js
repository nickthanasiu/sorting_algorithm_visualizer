import React, { useState, useContext } from 'react';
import { DarkModeContext } from '../../contexts/DarkModeContext';

export default ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode() {
        setDarkMode(darkMode => !darkMode);
    }

    const { theme } = useContext(DarkModeContext);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode, theme }}>
            { children }
        </DarkModeContext.Provider>
    );
};