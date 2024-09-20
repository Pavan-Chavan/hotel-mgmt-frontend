import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { API_HEADER } from "../constants/constants";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  const [statusMessage, setStatusMessege] = useState({statusMessage : "", category:""});
  const login = async (inputs) => {
    const res = await axios.post(`${API_HEADER}auth/signin`, inputs);
    if (res.status === 200) {
      setCurrentUser({username: res.data?.username, roles:res.data.roles, userId: res.data.id});
      sessionStorage.setItem("Authorization",`Bearer ${res.data.token}`);
      setStatusBarMessege(`${res.data.username} you have logged in succefully`);
    }
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

  const setStatusBarMessege = (newMessage,newCategory) => {
    setStatusMessege({...statusMessage,...{statusMessage : newMessage, category:newCategory}});
    setTimeout(()=>{
      setStatusMessege({statusMessage : "", category:""});
    },2000)
  }

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, setStatusBarMessege, statusMessage }}>
      {children}
    </AuthContext.Provider>
  );
};
