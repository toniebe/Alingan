import {StyleSheet, Text, View, Image, useWindowDimensions} from 'react-native';
import React from 'react';
import { scale } from '../../assets/helper/scaling';
import { CNeutral12, CTextLight6 } from '../../assets/styles/colors';

export default function OnboardingItem({item}) {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width: width}]}>
      <Image
        source={{uri: item.image_url}}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />
      <View style={{flex: 0.2}}>
        <Text style={[styles.title,{width: width > 400 ? scale(340): scale(350)}]}>{item.title}</Text>
        <Text style={styles.description}>{item.desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 0.8,
    justifyContent: 'center',
    width: scale(200),
    height: scale(200),
  },
  title: {
    fontWeight: '700',
    marginBottom: 10,
    color:  CNeutral12,
    textAlign: 'center',
    flexWrap: 'wrap',
    fontSize:24,
  },
  description: {
    fontWeight: '300',
    color: CTextLight6,
    textAlign: 'center',
    paddingHorizontal: 64,
  },
});
