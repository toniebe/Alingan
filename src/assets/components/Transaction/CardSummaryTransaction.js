import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from '../../helper/scaling';
import convertNumber from '../../helper/convertNumber';
import {CBlack, CGreey3, CGreey5} from '../../styles/colors';
import font from '../../styles/font';

export default function CardSummaryTransaction({
  quantity,
  unit,
  title,
  price,
  lastItem = false,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: scale(10),
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: CGreey5,
        borderStyle: lastItem ? 'solid' : 'dashed'
      }}>
      <View style={{flexDirection: 'row'}}>
        <Text style={[textQuantity]}>
          {quantity} {unit}
        </Text>
        <Text style={[textTitle,{marginLeft: scale(10)}]}>{title}</Text>
      </View>
      <Text style={textPrice} >{`Rp${convertNumber(price)}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
const textQuantity = StyleSheet.flatten([
  font.PoppinsRegular,
  {color: CBlack, fontSize: scale(14), fontWeight: '500'},
]);

const textTitle = StyleSheet.flatten([
  font.PoppinsRegular,
  {color: CBlack, fontSize: scale(14), fontWeight: '400'},
]);

const textPrice = StyleSheet.flatten([
  font.PoppinsRegular,
  {color: CGreey3, fontSize: scale(12), fontWeight: '400'},
]);