import React, { createContext, useContext, useState, useEffect } from "react";
import { getMe as apiGetMe } from "../services/authService";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verify token with backend — do NOT trust localStorage alone
    let mounted = true;
    const verify = async () => {
      const stored = localStorage.getItem("user");
      if (!stored) {
        if (mounted) setLoading(false);
        return;
      }

      try {
        const parsed = JSON.parse(stored);
        const token = parsed?.token;
        if (!token) {
          localStorage.removeItem("user");
          if (mounted) setUser(null);
          if (mounted) setLoading(false);
          return;
        }

        // Call backend to verify token
        const me = await apiGetMe(token);
        // Keep token with returned user so downstream requests can use it
        const userWithToken = { ...me, token };
        localStorage.setItem("user", JSON.stringify(userWithToken));
        if (mounted) setUser(userWithToken);
      } catch (err) {
        // Token invalid/expired — clear and treat as logged out
        console.warn('Auth verify failed:', err.message || err);
        localStorage.removeItem("user");
        if (mounted) setUser(null);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    verify();
    return () => (mounted = false);
  }, []);

  // Function to save user data after login
  const login = (userData) => {
    // userData is expected to include `token` from backend
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  // Function to clear user data on logout
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    // Optional: Redirect to login page
    window.location.href = "/login"; 
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;