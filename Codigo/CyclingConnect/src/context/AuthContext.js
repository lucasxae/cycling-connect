import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {api} from '../src/services/api';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({children}) => {
  const [authState, setAuthState] = useState({
    token: null,
    authenticated: null,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await AsyncStorage.getItem('AccessKey');
      console.log('Token armazenado => ', token);

      if (token) {
        setAuthState({
          token,
          authenticated: true,
        });

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }
    };

    loadToken();
  }, []);

  const login = async data => {
    try {
      const response = await axios.post(
        'http://10.0.2.2:8080/auth/login',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      setAuthState({
        token: response.data.token,
        authenticated: true,
      });

      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${authState.token}`;

      await AsyncStorage.setItem('AccessKey', response.data.token);
    } catch (error) {
      console.log('Erro authContext', error);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('AccessKey');

    axios.defaults.headers.common = [''];

    setAuthState({
      token: null,
      authenticated: false,
    });
  };

  const value = {
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
