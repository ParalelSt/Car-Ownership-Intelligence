import { createContext, useContext, useState } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: { id: string; email: string; username: string } | null;
  login: (email: string, password: string) => Promise<void>;
  logOut: () => void;
  register: (
    email: string,
    username: string,
    password: string,
  ) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthContextType["user"]>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);

    // TEMPORARY FAKE DELAY FOR TESTING

    await new Promise((resolve) => setTimeout(resolve, 800));
    setUser({ id: "mock-1", email, username: "mockuser" });
    setIsLoading(false);
  };

  const logOut = () => setUser(null);

  const register = async (
    email: string,
    username: string,
    password: string,
  ) => {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    setUser({ id: "mock-1", email, username });
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        isLoading,
        user,
        login,
        logOut,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
