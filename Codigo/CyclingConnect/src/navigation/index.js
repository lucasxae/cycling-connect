import * as React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Home from '../screens/Home';
import {useAuth} from '../../context/AuthContext';
import {Button} from 'react-native';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const {authState, onLogout} = useAuth();

  return (
    <Stack.Navigator initialRouteName="Welcome" options={{headerShown: false}}>
      {authState?.authenticated ? (
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            headerRight: () => <Button onPress={onLogout} title="Sair" />,
          }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: true,
              headerShadowVisible: false,
              headerTitle: '',
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerShown: true,
              headerShadowVisible: false,
              headerTitle: '',
              headerTransparent: true,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

function Navigation({colorScheme}) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default Navigation;
