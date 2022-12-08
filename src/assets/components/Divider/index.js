import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CGreey4, CGreey5} from '../../styles/colors';
import Normal from './Normal';

export default function Divider({color = CGreey4, type}) {
  return type === 'normal' ? (
    <View style={{borderBottomWidth: 1, borderBottomColor: color}} />
  ) : type === 'dashed' ? (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        borderColor: CGreey5,
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        borderBottomRadius: 1,
        position: 'relative',
      }}
    />
  ) : (
    <></>
  );
}

const styles = StyleSheet.create({});
