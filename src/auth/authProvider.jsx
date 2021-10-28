import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);

    const contextValue = {
        user:user,
        login() {
            setUser({id:'123', username:'juancamilo11'});
        },
        logout() {
            setUser(null);
        },
        isLogged() {
            return !!user;
        }
    }
    
    return(
        <AuthContext.Provider value={ contextValue }>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;