import { createContext, useEffect } from "react";
import useStickyState from "../hooks/useStickyState.js";
import axios from 'axios';
import { Outlet } from "react-router-dom";
import Home from "../pages/Home.js";

const AuthContext = createContext({});

export const AuthProvider = () => {
  const [ token, setToken ] = useStickyState(null, 'token');
  const [ user, setUser ] = useStickyState(null, 'user');

  useEffect(() => {
    if (token?.length) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, [token])

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
      }}
    >
      
      <Outlet />
    </AuthContext.Provider>
  )
}

export default AuthContext;