import { createContext } from 'react';

export const DropdownMenuContext = createContext({
    isDropdownOpen: false,
    toggleDropdown: () => {},
});