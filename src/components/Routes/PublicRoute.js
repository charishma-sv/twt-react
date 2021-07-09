import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoadingComponent from '../LoadingComponent';

const PublicRoute = ({
  component: Component,
  user,
  authListner,
  updateUser,
  isLoggedIn,
  ...rest
}) => {
  return (
    // <Route
    //   {...rest}
    //   render={(props) => {
    //     console.log('props in public', props);
    //     if (user) {
    //       return <Redirect to="/feed" />;
    //     } else {
    //       return <Component />;
    //     }
    //   }}
    // />
    <Route {...rest}>
      {user === null ? (
        <LoadingComponent />
      ) : user ? (
        <Redirect to="/feed" />
      ) : (
        <Component updateUser={updateUser} />
      )}
    </Route>
  );
};

export default PublicRoute;
