import React from 'react';

import { AboutScreen } from '../pages/AboutScreen';
import { HomeScreen } from '../pages/HomeScreen';
import { LoginScreen } from '../pages/LoginScreen';
import {NavBar} from '../components/NavBar'
import { BrowserRouter as Router,
    Switch,
    Route, 
    Redirect } from 'react-router-dom';
import { ProfileScreen } from '../pages/ProfileScreen';
import { PhotosScreen } from '../pages/PhotosScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className="container">
                    <Switch>

                        {/* 

                        <Route exact path='/home'>
                            <HomeScreen /> 
                        </Route>
                        <Route exact path='/about'>
                            <AboutScreen /> 
                        </Route>
                        <Route exact path='/login'>
                            <LoginScreen />
                        </Route>
                        <Route exact path='/'>
                            <HomeScreen />
                        </Route>
                        
                        <Redirect to="./home" /> 
                        
                        */}

                        <Route exact path='/home' component={HomeScreen} />
                        <Route exact path='/about' component={AboutScreen} />
                        <Route exact path='/login' component={LoginScreen} />
                        <Route exact path='/profile/:username' component={ProfileScreen} />
                        <Route exact path='/photos' component={PhotosScreen} />
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
