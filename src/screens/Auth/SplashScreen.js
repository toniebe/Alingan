import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import font from '../../assets/styles/font';
import {CNeutral1, CNeutral2, colors} from '../../assets/styles/colors';
import {ReducerContext} from '../../store';
import { ActivateConfig, GetAllConfig ,GetConfig} from '../../assets/config/remoteConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  const {store, dispatch} = useContext(ReducerContext);

  const getDataStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log({e})
    }
  }; 
  
  const handleNavigation = async () => {
    let data = await getDataStorage()
    // console.log({data})
    if(!data){
      navigation.replace('Onboarding')
    }else{
      navigation.replace('Dashboard')
    }
  }
  // useEffect( () => {
  //   setTimeout(() => {
  //     handleNavigation()
  //   }, 5000);
  // }, []);

  useEffect(() => {
    ActivateConfig(err => {
      if (err) {
        console.log({err})
      } else {
        GetAllConfig(dispatch, () => {
          if(!err){
            handleNavigation();
          }
        });
        // GetConfig('onboarding')
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[font.Poppins, {fontSize: 38}, colors.Primary]}>
        ALINGAN
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CNeutral2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
