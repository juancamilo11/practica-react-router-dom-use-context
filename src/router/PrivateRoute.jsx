import React from 'react'
import { Redirect, Route } from 'react-router'

export const PrivateRoute = ({component:Component, ...rest}) => {
    
    const user = null;
    //const user = {id:'123', username:'camilo12345'}

    return (
        //  <Route exact={props.exact} path={props.path} component={props.component} /> 
        <Route {...rest}>
            { user ?
                <Component />
                :
                <Redirect to='/login'/> 
            }
        </Route>
    )
}
