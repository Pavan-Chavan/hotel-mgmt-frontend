import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { API_HEADER } from "../constants/constants";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post(`${API_HEADER}auth/signin`, inputs);
    console.log("==>"+JSON.stringify(res.data.token));
    setCurrentUser({username: res.data?.username, roles:res.data.role, userId: res.data.id});
    sessionStorage.setItem("Authorization",`Bearer ${res.data.token}`)
    return res;
  };

  const logout = async (inputs) => {
    setCurrentUser(null);
    sessionStorage.removeItem("Authorization");
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
