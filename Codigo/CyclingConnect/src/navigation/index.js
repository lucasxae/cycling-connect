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
  ChangePassword,
} from '../screens';
import TabNavigator from './tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const options = {
  headerShown: true,
  headerShadowVisible: false,
  headerTintColor: '#fff',
  headerTitle: '',
  headerStyle: {backgroundColor: '#222'},
};

function RootNavigator() {
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

function AuthNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        initialParams={props}
        options={options}
      />
    </Stack.Navigator>
  );
}

function Navigation({colorScheme}) {
  const {authState} = useAuth();

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {authState?.authenticated ? (
        <>
          <AuthNavigator props={authState.data} />
        </>
      ) : (
        <RootNavigator />
      )}
    </NavigationContainer>
  );
}

export default Navigation;
