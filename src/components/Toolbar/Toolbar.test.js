import React from 'react';
import { shallow } from 'enzyme';

import Toolbar from './Toolbar';
import GenerateArrayBtn from './GenerateArrayBtn';

describe('Toolbar', () => {
    it('should contain a GenerateArrayBtn component', () => {
        const wrapper = shallow(<Toolbar />);

        expect(wrapper.find(GenerateArrayBtn).length).toEqual(1);
        
    });
});