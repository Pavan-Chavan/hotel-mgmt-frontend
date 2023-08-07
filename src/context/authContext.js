import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { API_HEADER } from "../constants/constants";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    setCurrentUser({username: "test",password: "test"});
    const res = await axios.post(`${API_HEADER}auth/login`, inputs);
    console.log("==>"+JSON.stringify(res.data.token));
  };

  const logout = async (inputs) => {
    setCurrentUser(null);
    await axios.post(`${API_HEADER}auth/logout`);
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
