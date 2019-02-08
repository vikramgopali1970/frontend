import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Dashboard from './Containers/DashBoard/Dashboard'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/dashboard' component={Dashboard}/>
    </Switch>
);
export default Routes;