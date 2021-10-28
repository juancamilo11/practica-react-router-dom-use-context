import React from 'react'
import useAuth from '../auth/useAuth'

export const LoginScreen = () => {

    const auth = useAuth();

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button className="btn btn-primary" onClick={() => auth.login()}>Ingresar</button>
        </div>
    )
}
