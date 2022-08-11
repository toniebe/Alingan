import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {ReducerContext} from '../../store';
import Onboarding from '../../components/Onboarding';

const OnboardingScreen = ({navigation}) => {
  const {store, dispatch} = useContext(ReducerContext);

  useEffect(() => {
    console.log(store.configReducer.configApp.onboarding);
  }, []);

  return (
    <View style={{flex:1}}>
      <Onboarding
        data={store.configReducer.configApp.onboarding}
        navigation={navigation}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
