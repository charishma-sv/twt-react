import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';
import Feed from './Feed';
import { UserContext } from '../providers/UserProvider';
import ProtectedRoute from './Routes/ProtectedRoute';
import PublicRoute from './Routes/PublicRoute';
import Signup from './Signup';
const Application = () => {
  const { user, updateUser } = useContext(UserContext);
  return (
    <Router>
      <div>
        <PublicRoute component={Login} user={user} path="/login" />
        <PublicRoute
          component={Signup}
          user={user}
          updateUser={updateUser}
          path="/signup"
        />
        <ProtectedRoute component={Feed} user={user} path="/feed" />
        <PublicRoute component={HomePage} user={user} path="/" exact />
      </div>
    </Router>
  );
};
export default Application;
