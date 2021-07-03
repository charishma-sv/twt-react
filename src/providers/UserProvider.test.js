import React from 'react';
import { act, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Application from '../components/Application';
import UserProvider from './UserProvider';

describe('User provider snapshot when user is null', () => {
  it('should render LoadingComponent', () => {
    const root = document.createElement('div');
    document.body.appendChild(root);
    let user = null;
    let tree = renderer.create(
      <UserProvider value={user}>
        <Application />
      </UserProvider>,
      root
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
describe('User provider snapshot when user is undefined', () => {
  it('should render Homepage component', () => {
    let user = jest.fn(() => Promise.resolve(undefined));
    const root = document.createElement('div');
    document.body.appendChild(root);
    const tree = renderer.create(
      <UserProvider value={user}>
        <Application />
      </UserProvider>,
      root
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
