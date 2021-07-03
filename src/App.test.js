import React from 'react';
import { create } from 'react-test-renderer';
import App from './App';

describe('snapshot <App />', () => {
  it('should render snapshot', () => {
    let tree = create(<App />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
