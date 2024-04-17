import * as React from 'react';
import {useAuth} from '../context/AuthContext';
import {
  Welcome,
  Login,
  Signup,
  EmailVerification,
  CodeVerification,
  NewPassword,
  FirstStep,
  LastStep,
} from '../screens';
import TabNavigator from './tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const options = {
    headerShown: true,
    headerShadowVisible: false,
    headerTintColor: '#fff',
    headerTitle: '',
    headerStyle: {backgroundColor: '#222'},
  };

  return (
    <Stack.Navigator initialRouteName="Welcome" options={{headerShown: false}}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={Login} options={options} />
      <Stack.Screen name="Signup" component={Signup} options={options} />
      <Stack.Screen name="FirstStep" component={FirstStep} options={options} />
      <Stack.Screen name="LastStep" component={LastStep} options={options} />
      <Stack.Screen
        name="EmailVerification"
        component={EmailVerification}
        options={options}
      />
      <Stack.Screen
        name="CodeVerification"
        component={CodeVerification}
        options={options}
      />
      <Stack.Screen
        name="NewPassword"
        component={NewPassword}
        options={options}
      />
    </Stack.Navigator>
  );
}

function Navigation({colorScheme}) {
  const {authState} = useAuth();
  console.log('Autenticado', authState.authenticated);

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {authState?.authenticated ? (
        <TabNavigator props={authState.data} />
      ) : (
        <RootNavigator />
      )}
    </NavigationContainer>
  );
}

export default Navigation;
