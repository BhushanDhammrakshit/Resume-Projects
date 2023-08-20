import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import ProfilePage from './pages/ProfilePage'
import TransferPage from './pages/TransferPage'

const App = () => {
	return (
		<div>
            <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/services" element={<ServicesPage />}/>
                <Route path="/profile" element={<ProfilePage />}/>
                <Route path="/transfer" element={<TransferPage />}/>
            </Routes>
            </BrowserRouter>
		</div>
	)
}

export default App