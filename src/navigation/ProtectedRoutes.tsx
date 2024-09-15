import React from 'react';
import { Navigate } from 'react-router-dom';
import { RouteConstants } from '../constants';

interface ProtectedRouteProps {
    element: React.ReactElement;
}

// Check authentication status
const isAuthenticated = () => {
    //check if the user is logged in
    return !!localStorage.getItem('token');
};

const ProtectedRoutes: React.FC<ProtectedRouteProps> = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to={RouteConstants.LOGIN} />;
};

export default ProtectedRoutes;
