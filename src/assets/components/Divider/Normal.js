import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { CGreey4 } from '../../styles/colors';

export default function Normal({color=CGreey4}) {
  return (
    <View>
      <View style={{borderBottomWidth: 1, borderBottomColor: color }} />
    </View>
  );
}

const styles = StyleSheet.create({});
