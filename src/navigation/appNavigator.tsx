import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AnimatedScreen from '../features/AnimatedScreen';
import ScreenRoutes from './routes';
import AuthStack from './authStack';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ScreenRoutes.SPLASH_SCREEN}
        component={AnimatedScreen}
      />
      <Stack.Screen name={ScreenRoutes.AUTH_STACK} component={AuthStack} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
