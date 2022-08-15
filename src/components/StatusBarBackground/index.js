import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { scale } from '../../assets/helper/scaling';

export default function StatusBarBackground({style}) {
  return (
    <View style={[styles.statusBarBackground, style || {}]}></View>
  );
}

const styles = StyleSheet.create({
  statusBarBackground: {
    height: Platform.OS === 'ios' ? scale(40): 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
    backgroundColor: 'white',
  },
});
