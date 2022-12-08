import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Loading({fullPage}) {
  return fullPage ? (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator color={"#D2512C"} size="large"
      />
    </View>
  ) : (
    <ActivityIndicator color={"#D2512C"} size="large"
    />
  );
}

const styles = StyleSheet.create({});
