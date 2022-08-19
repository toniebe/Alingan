import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/Home/Dashboard';
import BottomTab from './BottomTab';

export default function Home() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Group>
      <Stack.Screen
        name="Dashboard"
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Group>
  );
}
