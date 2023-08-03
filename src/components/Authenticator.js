import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

const AuthContext = createContext()

export function Authenticator({children}) {
    const [user, setUser] = useState({})
   
    useEffect(()=>{
        axios.get('http://localhost:3001/loggedIn').then(result => setUser(result.data))
    }, [])

    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
