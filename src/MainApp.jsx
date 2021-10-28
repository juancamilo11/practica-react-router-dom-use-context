import React from 'react'
import AuthProvider from './auth/authProvider'

import {AppRouter} from './router/AppRouter'

export const MainApp = () => {
    
    return (
        <div>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </div>
    )
}
