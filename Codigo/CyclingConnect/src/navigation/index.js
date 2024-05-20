import * as React from 'react';
import {useAuth} from '../context/AuthContext';

import TabNavigator from './tabs';
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
  Profile,
  UserInformation,
  ChangeEmail,
  DeleteAccount,
  UpdateUserInformation,
  TrainingDetails,
} from '../screens';
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
  console.log('AuthNavigator', props);
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
        options={options}
      />
      <Stack.Screen
        name="ChangeEmail"
        component={ChangeEmail}
        options={options}
      />
      <Stack.Screen
        name="DeleteAccount"
        component={DeleteAccount}
        options={options}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        initialParams={props}
        options={options}
      />
      <Stack.Screen
        name="UserInformation"
        component={UserInformation}
        options={options}
      />
      <Stack.Screen
        name="UpdateUserInformation"
        component={UpdateUserInformation}
        options={options}
      />
      <Stack.Screen
        name="TrainingDetails"
        component={TrainingDetails}
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
