import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import font from '../../assets/styles/font';
import {CNeutral1, CNeutral2, colors} from '../../assets/styles/colors';
import {ReducerContext} from '../../store';
import { ActivateConfig, GetAllConfig ,GetConfig} from '../../assets/config/remoteConfig';

const SplashScreen = ({navigation}) => {
  const {store, dispatch} = useContext(ReducerContext);
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Onboarding');
    }, 5000);
  }, [navigation]);

  useEffect(() => {
    ActivateConfig(err => {
      if (err) {
        console.log({err})
      } else {
        GetAllConfig(dispatch, () => {});
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
