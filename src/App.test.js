import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';
import Toolbar from './components/Toolbar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a Toolbar component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  console.log(div.innerHTML);
  expect(div.innerHTML).toContain('Tools...');

  ReactDOM.unmountComponentAtNode(div);
});
