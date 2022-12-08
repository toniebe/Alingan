import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../assets/components/Button';
import convertNumber from '../../assets/helper/convertNumber';
import {CBlack, CGreey3, CGreey4, CNeutral} from '../../assets/styles/colors';
import {scale} from '../../assets/helper/scaling';
import font from '../../assets/styles/font';

export default function CardCart({
  totalProduct,
  totalPrice,
  onPress,
  titleBtn,
}) {
  return (
    <View style={styles.cart}>
      <View>
        <Text
          style={[font.PoppinsRegular, {fontSize: scale(12), color: CGreey3}]}>
          Total {totalProduct} Produk
        </Text>
        <Text
          style={[
            font.PoppinsRegular,
            {fontSize: scale(18), fontWeight: '700', color: CBlack},
          ]}>{`Rp${convertNumber(totalPrice)}`}</Text>
      </View>
      <View style={{width: '70%', alignItems: 'flex-end'}}>
        <Button size="short" title={titleBtn} onPress={onPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cart: {
    backgroundColor: CNeutral,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 3,
    paddingVertical: scale(10),
    paddingHorizontal: scale(7),
  },
});
