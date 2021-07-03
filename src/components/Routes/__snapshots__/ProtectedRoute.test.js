import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Feed from '../../Feed';
import ProtectedRoute from '../ProtectedRoute';
import HomePage from '../../HomePage';

describe('feed render on autheticated user', () => {
  it('should render feed if user exists', () => {
    const root = document.createElement('div');
    document.body.appendChild(root);

    const AComponent = () => <Feed />;
    let user = { email: 'cherry@gmail.com', uid: '123' };

    const propts = {
      path: '/feed',
    };

    const component = renderer.create(
      <MemoryRouter initialEntries={['/feed']}>
        <ProtectedRoute component={AComponent} {...propts} user={user} />
      </MemoryRouter>,
      root
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should render homepage if not user is undefined', () => {
    const root = document.createElement('div');
    document.body.appendChild(root);
    const history = createMemoryHistory();
    const AComponent = () => <HomePage />;
    let user = undefined;
    const props = {
      path: '/',
    };

    renderer.create(
      <MemoryRouter initialEntries={['/']}>
        <ProtectedRoute component={AComponent} {...props} user={user} />
      </MemoryRouter>
    );

    expect(history.location.pathname).toBe('/');
  });
});
describe('user exists', () => {
  it('snaphot on user exits', () => {
    const AComponent = () => <Feed />;

    let user = { email: 'john' };
    const propts = {
      path: '/feed',
    };
    const history = createMemoryHistory({ initialEntries: ['/feed'] });
    const tree = renderer.create(
      <Router history={history}>
        <ProtectedRoute component={AComponent} {...propts} user={user} />
      </Router>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
  it('should render Feed if user exists', async () => {
    const AComponent = () => <Feed />;

    let user = 'john';
    const propts = {
      path: '/feed',
    };
    const history = createMemoryHistory({ initialEntries: ['/feed'] });

    const { root: instance } = renderer.create(
      <Router history={history}>
        <ProtectedRoute component={AComponent} {...propts} user={user} />
      </Router>
    );

    const RedirectComp = instance.findByType(Feed);
    expect(RedirectComp).toBeDefined();
  });
});
