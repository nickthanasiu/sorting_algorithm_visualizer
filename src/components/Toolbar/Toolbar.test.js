import React from 'react';
import { shallow } from 'enzyme';

import Toolbar from './Toolbar';
import GenerateArrayBtn from './GenerateArrayBtn';
import ArraySizeSlider from './ArraySizeSlider';
import AlgorithmSelectMenu from './AlgorithmSelectMenu';

describe('Toolbar', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Toolbar />);
    });

    it('should contain a GenerateArrayBtn component', () => {
        expect(wrapper.find(GenerateArrayBtn).length).toEqual(1);
    });

    it('should contain an ArraySizeSlider component', () => {
        expect(wrapper.find(ArraySizeSlider).length).toEqual(1);
    });

    it('should contain an AlgorithmSelectMenu component', () => {
        expect(wrapper.find(AlgorithmSelectMenu).length).toEqual(1);
    });
});