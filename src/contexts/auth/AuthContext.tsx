import { createContext, ReactNode, useState, useMemo } from "react";

interface IAuthContextValue {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContextValue>(
  {} as IAuthContextValue
);

interface IAuthProviderProps {
  children?: ReactNode;
}

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const memoizedValue = useMemo(
    () => ({
      isAuthenticated,
      logout,
      login,
    }),
    [isAuthenticated]
  );

  function logout() {
    setIsAuthenticated(false);
  }

  function login() {
    setIsAuthenticated(true);
  }

  return <AuthContext.Provider value={memoizedValue} children={children} />;
};
