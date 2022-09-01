import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from '../features/Auth/screens/AuthScreen';
import ScreenRoutes from './routes';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={ScreenRoutes.AUTH_SCREEN} component={AuthScreen} />
  </Stack.Navigator>
);

export default AuthStack;
