import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({component: Component, auth, ...rest}) => {
    return auth.userId ?
        <Route {...rest} /> :
        <Redirect to={{pathname: '/login', state: { from: rest.location } }}/>};
export default PrivateRoute;