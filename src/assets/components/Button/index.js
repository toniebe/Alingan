import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CPrimary} from '../../styles/colors';
import BStandartShort from './BStandartShort';
import BStandartLong from './BStandartLong';

export default function Button({
  disable, // (true/false)
  onPress,
  icon,
  type = 'primary', // (primary/secondary/link/textLink)
  title,
  size = 'long', // (short/long)
  isLoading, // (true/false)
  category = 'standard', // (standart/circle/square)
  style
}) {
  category = category && category.toLowerCase();
  size = size && size.toLowerCase()
  type = type && type.toLowerCase();
  return isLoading ? (
    <ActivityIndicator size="large" color={CPrimary} />
  ) : category && 'standard' ? (
    size === 'short' ? (
      <BStandartShort
        disable={disable}
        onPress={onPress}
        icon={icon}
        type={type}
        title={title}
        style={style}
      />
    ) : (
      <BStandartLong
        disable={disable}
        onPress={onPress}
        icon={icon}
        type={type}
        title={title}
        style={style}
      />
    )
  ) : (
    <BStandartLong 
        disable={disable}
        onPress={onPress}
        icon={icon}
        type={type}
        title={title}
        style={style}
    />
  )
}
