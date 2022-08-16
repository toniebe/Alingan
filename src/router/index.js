import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './Auth';
import Home from './Home';
import {
  createStackNavigator,
  TransitionPreset,
  CardStyleInterpolators,
} from '@react-navigation/stack';

export default function Router() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {Auth()}
        {Home()}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
