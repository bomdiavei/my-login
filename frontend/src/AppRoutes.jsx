import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

import { AuthProvider, AuthContext } from './contexts/auth'

const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated } = useContext(AuthContext)

        if (!authenticated) {
            return <Navigate to="/login" />
        }

        return children
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/" element={<Private><HomePage /></Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes