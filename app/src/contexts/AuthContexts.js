import { createContext, useState, useEffect } from "react";
import { Token, User } from "@/api";

const tokenCtrl = new Token();
const userCtrl = new User();

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  const login = async (token) => {
    try {
      tokenCtrl.setToken(token);
      const response = await userCtrl.getMe()
      console.log(response)
      setUser(response);
      setToken(token);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const data = {
    accessToken: token,
    user,
    login,
    logout: null,
    updateUser: null,
  };

  if (loading) return null;
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
