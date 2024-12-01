import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

// Auth provider compo
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // decoding token
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      setUser({ id: decodedToken.id, role: decodedToken.role });
      setLoading(false);
    }
  }, []);

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null); // Clear user state
    setLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, setLoading, loading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
