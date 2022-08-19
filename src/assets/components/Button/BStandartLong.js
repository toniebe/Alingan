import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale} from '../../helper/scaling';
import font from '../../styles/font';
import {
  CNeutral4,
  CNeutral5,
  CNeutral6,
  CNeutral7,
  colors,
  CPrimary,
  CTextLight,
} from '../../styles/colors';

const BStandartLong = ({
  disable,
  onPress,
  icon,
  type,
  title,
  style,
  textStyle,
}) => {
  return disable ? (
    <View
      style={[
        icon && {flexDirection: 'row'},
        {backgroundColor: '#eeeeee'},
        styles.container,
        styles.size,
        style,
      ]}>
      {icon && (
        <Image
          source={icon}
          style={[styles.imageSize, {tintColor: CTextLight4}]}
        />
      )}
      <Text
        style={[
          font.PoppinsRegular,
          colors.TextLight4,
          {textAlign: 'center', fontWeight: '600'},
          textStyle
        ]}>
        {title}
      </Text>
    </View>
  ) : type === 'primary' ? (
    <TouchableOpacity
      style={[
        {backgroundColor: CPrimary},
        styles.container,
        icon && {flexDirection: 'row'},
        styles.size,
        style,
      ]}
      onPress={onPress}>
      {icon && (
        <Image
          source={icon}
          style={[styles.imageSize, {tintColor: CTextLight}]}
        />
      )}
      <Text
        style={[
          colors.TextLight1,
          font.PoppinsRegular,
          {textAlign: 'center', fontWeight: '600'},
          textStyle
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  ) : (
    <>
      <TouchableOpacity
        style={[
          {
            borderWidth: 1,
            borderColor: CNeutral5,
            backgroundColor: 'transparent',
          },
          styles.container,
          icon && {flexDirection: 'row'},
          styles.size,
          style,
        ]}
        onPress={onPress}>
        {icon && (
          <Image
            source={icon}
            style={[styles.imageSize, {tintColor: CNeutral7}]}
          />
        )}
        <Text
          style={[
            colors.Primary,
            font.PoppinsRegular,
            {textAlign: 'center', fontWeight: '600'},
            textStyle,
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default BStandartLong;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(4),
  },
  size: {
    width: '100%',
    minWidth: scale(100),
    height: scale(45),
  },
  imageSize: {
    width: scale(20),
    height: scale(20),
    resizeMode: 'contain',
    marginRight: scale(10),
  },
});
