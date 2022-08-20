import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/Home/Dashboard';
import BottomTab from './BottomTab';
import DetailTransactionScreen from '../screens/History/DetailTransactionScreen';

export default function Transaction() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Group>
      <Stack.Screen
        name="TransactionDetail"
        component={DetailTransactionScreen}
        options={{
            title:'Detail Transaksi'
        }}
      />
    </Stack.Group>
  );
}
