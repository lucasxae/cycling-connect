import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

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
      const data = await AsyncStorage.getItem('Email');

      if (token) {
        setAuthState({
          data,
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
        data: data,
        token: response.data.token,
        authenticated: true,
      });

      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${authState.token}`;

      await AsyncStorage.setItem('AccessKey', response.data.token);
      await AsyncStorage.setItem('Email', data.email);
    } catch (error) {
      console.log('Erro authContext', error);
    }
  };

  const updateUserEmail = newEmail => {
    setAuthState(prevState => ({
      ...prevState,
      data: {...prevState.data, email: newEmail},
    }));
  };

  const deleteAccount = async email => {
    const response = await axios.delete(
      `http://10.0.2.2:8080/api/users/deleteByEmail/${email}`,
    );
    if (response.status === 200) {
      await AsyncStorage.removeItem('AccessKey');
      axios.defaults.headers.common = [''];
      setAuthState({
        data: null,
        token: null,
        authenticated: false,
      });
      console.log('Conta deletada!');
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
    onUpdateEmail: updateUserEmail,
    onDeleteAccount: deleteAccount,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
