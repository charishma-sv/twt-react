import React, { Component } from 'react';
import Application from './components/Application';
import UserProvider from './providers/UserProvider';
import './styles/scss/main.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <UserProvider>
          <Application />
        </UserProvider>
      </div>
    );
  }
}
export default App;
