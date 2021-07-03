import React from 'react';
import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';
import Application from './Application';
describe('<Application />', () => {
  beforeEach(() => {
    render(<Application />);
  });
  describe('Application snapshot ', () => {
    it('should render application snapshot', () => {
      let tree = create(<Application />);
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
