import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';
import ContextWrapper from './components/ContextWrapper';
import Layout from './components/Layout';
import Toolbar from './components/Toolbar';

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders a ContextWrapper component', () => {
    expect(wrapper.find(ContextWrapper).length).toEqual(1);
  });

  it('renders a Layout component', () => {
    expect(wrapper.find(Layout).length).toEqual(1);
  });
  
  it('renders a Toolbar component', () => {
    expect(wrapper.find(Toolbar).length).toEqual(1);
  });
});
