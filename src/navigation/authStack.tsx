import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from '../features/Auth/screens/AuthScreen';
import ScreenRoutes from './routes';
import LoginScreen from '../features/Auth/screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={ScreenRoutes.AUTH_SCREEN} component={AuthScreen} />
    <Stack.Screen name={ScreenRoutes.LOGIN_SCREEN} component={LoginScreen} />
  </Stack.Navigator>
);

export default AuthStack;
