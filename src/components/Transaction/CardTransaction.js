import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import convertNumber from '../../assets/helper/convertNumber';
import {
  CGreey2,
  CGreey3,
  CGreey4,
  CNeutral,
  CNeutral12,
} from '../../assets/styles/colors';
import {scale} from '../../assets/helper/scaling';
import font from '../../assets/styles/font';
import formatDate from '../../assets/helper/formatDate';

export default function CardTransaction({
  idTransaksi = 'TRX-124-134',
  number = '49000',
}) {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={[
            font.PoppinsRegular,
            {fontSize: scale(14), fontWeight: '600', color: CNeutral12},
          ]}>
          Pembayaran
        </Text>
        <Text
          style={[
            font.PoppinsRegular,
            {fontSize: scale(12), fontWeight: '400', color: CGreey3},
          ]}>
          {formatDate({date_input:idTransaksi,type:'long',sparator:' ',time:false,withYear:true,sparatorDateTime:''})}
        </Text>
      </View>
      <Text
        style={[
          font.PoppinsRegular,
          {fontSize: scale(14), fontWeight: '600', color: CNeutral12},
        ]}>{`Rp. ${convertNumber(number)}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: CNeutral,
    paddingVertical: scale(10),
    paddingHorizontal: scale(20),
  },
});
