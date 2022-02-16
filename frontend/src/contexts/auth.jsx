import { createContext, useState } from 'react'

import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    const login = (email, password) => {
        console.log(`login ${email} ${password}`,)

        if (password === "test") {
            setUser({ id: "123", email })
            navigate("/")
        }
    }

    const logout = (email, password) => {
        console.log("logout")
        setUser(null)
        navigate("/login")
    }

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}