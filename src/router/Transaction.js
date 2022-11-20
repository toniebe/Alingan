import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/Home/Dashboard';
import BottomTab from './BottomTab';
import DetailTransactionScreen from '../screens/History/DetailTransactionScreen';
import DetailPayment from '../screens/Transaction/DetailPayment';
import PaymentScreen from '../screens/Transaction/PaymentScreen';
import StructScreen from '../screens/Transaction/StructScreen';

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
      <Stack.Screen
        name="DetailPayment"
        component={DetailPayment}
        options={{
            title:'Detail Pembayaran'
        }}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
            title:'Total Bayar'
        }}
      />
      <Stack.Screen
        name="Struct"
        component={StructScreen}
        options={{
            title:'Struk Pembayaran'
        }}
      />
    </Stack.Group>
  );
}
