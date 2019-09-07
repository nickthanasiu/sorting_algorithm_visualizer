import React from 'react';

import Button from '../../reusable/Button';

export default ({ children }) => {
    function handleClick() {
        return null;
    }

    return (
        <Button 
            value="Sort"
            handleClick={handleClick}
        >
            Sort
        </Button>
    );
};