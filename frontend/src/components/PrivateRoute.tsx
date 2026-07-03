import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { type ReactElement } from 'react';

interface PrivateRouteProps {
  children: ReactElement;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};