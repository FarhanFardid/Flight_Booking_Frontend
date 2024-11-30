import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if the user is logged in on app load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // decoding token
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      setUser({ id: decodedToken.id, role: decodedToken.role });
    }
  }, []);

  // Logout function
  const logout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setUser(null); // Clear user state
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
