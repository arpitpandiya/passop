import React from 'react';
import { Navigate } from 'react-router-dom';

// Example authentication check function
const isAuthenticated = () => {
  return !!localStorage.getItem('authToken'); // Replace this with your actual authentication logic
};

const ProtectedRoute = ({ element: Component, ...rest }) => {
  return isAuthenticated() ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;