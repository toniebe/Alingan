import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Dashboard() {
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };
  useEffect(async () => {
    let storage = await getData()
    console.log({storage})
  }, [])
  
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
