import React, { Component } from 'react';
import Application from './components/Application';
import UserProvider from './providers/UserProvider';
import './styles/scss/main.scss';
import CacheBuster from './CacheBuster';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <CacheBuster>
        {({ loading, isLatestVersion, refreshCacheAndReload }) => {
          if (loading) return null;
          if (!loading && !isLatestVersion) {
            refreshCacheAndReload();
          }
          return (
            <div>
              <UserProvider>
                <Application />
              </UserProvider>
            </div>
          );
        }}
      </CacheBuster>
    );
  }
}

export default App;
