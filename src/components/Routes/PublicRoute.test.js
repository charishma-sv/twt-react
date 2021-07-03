import React from 'react';
import {
  BrowserRouter,
  MemoryRouter,
  Redirect,
  Router,
} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import renderer from 'react-test-renderer';

import HomePage from '../HomePage';
import PublicRoute from './PublicRoute';
import LoadingComponent from '../LoadingComponent';

describe('homepage render on not autheticated user', () => {
  it('should render homepage if not user is undefined', async () => {
    const AComponent = () => <HomePage />;

    let user = undefined;
    const path = '/';
    const propts = {
      path: '/',
    };

    const { root: instance } = renderer.create(
      <BrowserRouter>
        <PublicRoute component={AComponent} {...propts} user={user} />
      </BrowserRouter>
    );
    const HomepageComponent = instance.findByType(HomePage);
    expect(HomepageComponent).toBeDefined();
  });
});

describe('loadingComponent snapshot on user is null', () => {
  it('snaphot on user exits', () => {
    const AComponent = () => <LoadingComponent />;

    let user = 'hello';
    const path = '/';
    const propts = {
      path: '/',
    };
    const history = createMemoryHistory({ initialEntries: ['/feed'] });
    const tree = renderer.create(
      <Router history={history}>
        <PublicRoute component={AComponent} {...propts} user={user} />
      </Router>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render LoadingComponent if user is null', async () => {
    const AComponent = () => <LoadingComponent />;

    let user = null;
    const path = '/';
    const propts = {
      path: '/',
    };

    const { root: instance } = renderer.create(
      <BrowserRouter>
        <PublicRoute component={AComponent} {...propts} user={user} />
      </BrowserRouter>
    );
    const LoadingComp = instance.findByType(LoadingComponent);
    expect(LoadingComp).toBeDefined();
  });
});

describe('feed render on user exists', () => {
  it('snaphot on user exits', () => {
    const AComponent = () => <Feed />;

    let user = { email: 'john' };
    const path = '/feed';
    const propts = {
      path: '/feed',
    };
    const history = createMemoryHistory({ initialEntries: ['/feed'] });
    const tree = renderer.create(
      <Router history={history}>
        <PublicRoute component={AComponent} {...propts} user={user} />
      </Router>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render Feed if user exists', async () => {
    const AComponent = () => <Feed />;

    let user = 'john';
    const path = '/feed';
    const propts = {
      path: '/feed',
    };
    const history = createMemoryHistory({ initialEntries: ['/feed'] });

    const { root: instance } = renderer.create(
      <Router history={history}>
        <PublicRoute component={AComponent} {...propts} user={user} />
      </Router>
    );

    const RedirectComp = instance.findByType(Redirect);
    expect(RedirectComp).toBeDefined();
  });
});
