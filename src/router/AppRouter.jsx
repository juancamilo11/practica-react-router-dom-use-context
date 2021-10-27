import React from 'react';

import { AboutScreen } from '../pages/AboutScreen';
import { HomeScreen } from '../pages/HomeScreen';
import { LoginScreen } from '../pages/LoginScreen';
import {NavBar} from '../components/NavBar'
import { BrowserRouter as Router,
    Switch,
    Route, 
    Redirect } from 'react-router-dom';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className="container">
                    <Switch>
                        <Route exact path='/home' component={HomeScreen} />
                        <Route exact path='/about' component={AboutScreen} />
                        <Route exact path='/login' component={LoginScreen} />
                        <Route exact path='/' component={HomeScreen} />
                        
                        <Redirect to="./home" />
                        {/* <Route path="*" component={HomeScreen} /> */}
                        {/* <Route component={HomeScreen} /> */}
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
