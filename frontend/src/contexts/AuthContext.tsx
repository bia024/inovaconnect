import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { api } from '../api/api';

interface AuthContextType {
  user: any | null;
  login: (credentials: any) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);

  const login = async (credentials: any) => {
    const { data } = await api.post('/auth/login', credentials);
    localStorage.setItem('@InovaConnect:token', data.token);
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem('@InovaConnect:token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);