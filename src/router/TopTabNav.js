import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AgentScreen from '../screens/History/AgentScreen';
import StoreScreen from '../screens/History/StoreScreen';
import MyTopTabBar from '../components/customTabBar/MyTopTabBar';
import {CPrimary} from '../assets/styles/colors';

const TopTab = createMaterialTopTabNavigator();

export default function TopTabNav() {
  return (
    <TopTab.Navigator
      //  tabBar={props => <MyTopTabBar {...props} />}
      screenOptions={{
        tabBarIndicatorStyle: {backgroundColor: CPrimary},
        tabBarLabelStyle:{
          fontSize:14,
          fontFamily:'Poppins-Regular'
        }
      }}>
      <TopTab.Screen name="historyStore" component={StoreScreen} options={{ title:'Store'}} />
      <TopTab.Screen name="historyAgent" component={AgentScreen} options={{ title:'Transaksi Saya'}} />
    </TopTab.Navigator>
  );
}
