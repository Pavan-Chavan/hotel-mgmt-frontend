import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { API_HEADER } from "../constants/constants";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post(`${API_HEADER}auth/login`, inputs);
    setCurrentUser(res.data);
    console.log("==>"+JSON.stringify(res.data.token));
  };

  const logout = async (inputs) => {
    await axios.post(`${API_HEADER}auth/logout`);
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
