import {Image, StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {CGreey1} from '../../styles/colors';
import {scale} from '../../helper/scaling';

export default function TextInputs({icon}) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={icon} style={[styles.icon]} />
      </View>
      <View>
        <TextInput placeholder='example' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: CGreey1,
    paddingHorizontal: scale(10),
    paddingVertical: scale(5),
    borderRadius: scale(5),
    flexDirection: 'row',
  },
  icon: {
    width: scale(20),
    height: scale(20),
    resizeMode: 'contain',
  },
});
