import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  user: { name: string; email: string } | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  // Em um aplicativo real, você verificaria um token no localStorage para manter o usuário logado.
  const isAuthenticated = !!user;

  const login = async (email: string, password: string) => {
    // Simulação de login. Quando o Supabase for conectado, faremos a chamada de autenticação aqui.
    console.log('Tentando login com:', email, password);
    // TODO: Substituir pela chamada de autenticação do Supabase.
    if (email && password) {
        setUser({ name: 'Admin', email: email });
    } else {
        throw new Error('Credenciais inválidas');
    }
  };

  const logout = () => {
    // TODO: Substituir pela chamada de logout do Supabase.
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
