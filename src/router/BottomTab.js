import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TransactionScreen from '../screens/Home/TransactionScreen';
import HistoryScreen from '../screens/Home/HistoryScreen';
import AccountScreen from '../screens/Home/AccountScreen';
import MyTabBar from '../components/customTabBar/MyTabBar';
import iconTransaction from '../assets/images/icon/trx-unactive.png';
import iconHistory from '../assets/images/icon/history-unactive.png';
import iconAccount from '../assets/images/icon/akun-unactive.png';
// import TopTab from './TopTabNav';
import TopTabNav from './TopTabNav';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Transaksi"
        component={TransactionScreen}
        options={{headerShown: false, tabBarIcon: iconTransaction}}
      />
      <Tab.Screen
        name="History"
        component={TopTabNav}
        options={{title:'History', tabBarIcon: iconHistory}}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{title:'Akun', tabBarIcon: iconAccount}}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
