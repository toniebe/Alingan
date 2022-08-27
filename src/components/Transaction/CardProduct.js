import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import imageExample from '../../assets/images/images/exampleProduct.png';
import {scale} from '../../assets/helper/scaling';
import Button from '../../assets/components/Button';
import convertNumber from '../../assets/helper/convertNumber';
import font from '../../assets/styles/font';
import {CGreey4, CGreey5, colors} from '../../assets/styles/colors';

export default function CardProduct({
  image = imageExample,
  title = 'This Product',
  price = '19xxx',
  unit = 'pcs',
  count = 0,
  actionPlus,
  actionMinus,
}) {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={{flex: 1}}>
        <Text
          style={[
            font.PoppinsRegular,
            colors.Black,
            {fontWeight: '600', fontSize: scale(14)},
          ]}>
          {title}
        </Text>
        <Text
          style={[
            font.PoppinsRegular,
            {color: CGreey5, fontWeight: '800', fontSize: scale(12)},
          ]}>
          {`Rp.${convertNumber(price)}`}/{unit}
        </Text>
      </View>
      <View
        style={{
          //   backgroundColor: 'pink',
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          onPress={actionMinus}
          category="circle"
          title={'-'}
          type={count === 0 ? 'secondary' : 'primary'}
          disable={count === 0 ? true : false}
        />

        <View style={{marginHorizontal: scale(10)}}>
          <Text>{count}</Text>
        </View>

        <Button
          onPress={actionPlus}
          category="circle"
          title={'+'}
          type="primary"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: CGreey4,
    paddingBottom: scale(10),
  },
  image: {
    width: scale(70),
    height: scale(70),
    resizeMode: 'contain',
    borderRadius: scale(10),
  },
});
