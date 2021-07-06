import React, { Component, createContext } from 'react';
import { auth, getUserDocument } from '../firebase';
export const UserContext = createContext({ user: null });
class UserProvider extends Component {
  state = {
    user: null,
  };

  componentDidMount = async () => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await getUserDocument(userAuth);
      console.log('user in usr provider', user);
      this.setState({ user });
    });
  };
  updateUser = (user) => {
    this.setState({ user });
  };
  render() {
    return (
      <UserContext.Provider
        value={{ user: this.state.user, updateUser: this.updateUser }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;
