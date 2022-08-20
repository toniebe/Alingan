import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

export default function Loading({fullPage}) {
  return fullPage ? (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Lottie
        source={require('../../animation/84041-load-orange-jundo.json')}
        autoPlay
        loop
      />
    </View>
  ) : (
    <Lottie
      source={require('../../animation/84041-load-orange-jundo.json')}
      autoPlay
      loop
    />
  );
}

const styles = StyleSheet.create({});
