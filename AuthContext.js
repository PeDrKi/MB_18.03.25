import React, { createContext, useContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Kiểm tra thông tin đăng nhập khi ứng dụng khởi động
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Error loading user from storage:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (email, password) => {
    if (email === 'PDK' && password === '244') {
      const userData = { email };
      setUser(userData);

      try {
        await AsyncStorage.setItem('user', JSON.stringify(userData));
      } catch (error) {
        console.error("Error saving user:", error);
      }
    } else {
      Alert.alert("WRONG", "Invalid credentials! Try again.");
    }
  };

  const logout = async () => {
    setUser(null);
    
    try {
      await AsyncStorage.removeItem('user');
    } catch (error) {
      console.error("Error removing user:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
