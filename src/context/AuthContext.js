import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in (e.g., from sessionStorage)
    const userEmail = sessionStorage.getItem('userEmail');
    const userId = sessionStorage.getItem('userId');
    if (userEmail && userId) {
      setUser({ email: userEmail, id: userId });
    }
  }, []);

  const login = (email, password) => {
    if (email === 'admin@gmail.com' && password === 'admin') {
      toast.success('Logged in as Admin');
      setUser({ email, role: 'admin' });
      sessionStorage.setItem('userEmail', email);
      navigate('/Admin');
    } else {
      // Handle user login via API
      const url = `http://localhost:7071/user/signin`;
      const params = { email, password };
      const config = { headers: { 'Content-Type': 'application/json' } };

      axios
        .get(url, { params }, config)
        .then((response) => {
          const result = response.data;
          if (result.status === undefined) {
            setUser({ email, id: result.userId });
            sessionStorage.setItem('userEmail', email);
            sessionStorage.setItem('userId', result.userId);
            toast.success('Logged in successfully');
            navigate('/Services');
          } else {
            toast.error(result.error);
          }
        })
        .catch(() => {
          toast.error('Login failed');
        });
    }
  };

  const logout = () => {
    setUser(null);
    sessionStorage.clear();
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};