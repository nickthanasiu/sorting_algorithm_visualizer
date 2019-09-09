import React, { useState } from 'react';
import { DropdownMenuContext } from '../../contexts/DropdownMenuContext';

export default ({ children }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    function toggleDropdown() {
        setDropdownOpen(isDropdownOpen => !isDropdownOpen);
    }

    return (
        <DropdownMenuContext.Provider value={{ isDropdownOpen, toggleDropdown }}>
            { children }
        </DropdownMenuContext.Provider>
    );
};