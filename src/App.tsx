import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary modules from react-router-dom
import {Login } from './pages'; // Import page components
import { RouteConstants } from './constants'; // Import route constants
//import ProtectedRoutes from './navigation/ProtectedRoutes';

const App: React.FC = () => {
  return (
    <Router> {/* Wrap the application in Router to enable routing */}
      <Routes> {/* Define all the routes for the application */}
        {/* Route for the root path redirects to the login page */}
        <Route path={RouteConstants.ROOT} element={<Login />} />
        {/* Route for the login path displays the Login component */}
        <Route path={RouteConstants.LOGIN} element={<Login />} />
        {/* Route for the register path displays the Register component */}
      </Routes>
    </Router>
  )
}

export default App;


