import {
  StyleSheet,
  Text,
  View,
  Animated,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {scale} from '../../assets/helper/scaling';
import {CPrimary} from '../../assets/styles/colors';

export default function Paginator({data, scrollX}) {
  const {width} = useWindowDimensions();
  return (
    <View style={{flexDirection: 'row', height: scale(64)}}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 30, 10],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, opacity}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: CPrimary,
    marginHorizontal: scale(5),
    marginVertical: scale(10),
  },
});
