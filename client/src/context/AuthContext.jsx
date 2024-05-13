import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post(
      "http://localhost:8000/api/auth/login",
      inputs
    );
    setUser(res.data);
    alert(res.data.username + " logged in")
  };

  const logout = async () => {
    try {
      const res =await axios.post("http://localhost:8000/api/auth/logout");
      setUser(null);
      alert(res.data)
    } catch (err) {
      console.log(err); 
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
