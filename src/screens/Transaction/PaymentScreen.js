import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import iconDollar from '../../assets/images/icon/money.png';
import iconButton from '../../assets/images/icon/history-unactive.png';
import {scale} from '../../assets/helper/scaling';
import font from '../../assets/styles/font';
import {CGreey3, CWhite} from '../../assets/styles/colors';
import Divider from '../../assets/components/Divider';
import TextInputs from '../../assets/components/TextInputs';
import Button from '../../assets/components/Button';
import convertNumber from '../../assets/helper/convertNumber';

export default function PaymentScreen({navigation, route}) {
  const {newData} = route.params;
  const [nominal, setNominal] = useState('');
  const [moneyChanges, setMoneyChanges] = useState('-');
  const [disable, setDisable] = useState(true);

  //   useEffect(() => {
  //     console.log({newData})
  //   }, [])

  const handleOnchange = value => {
    setNominal(value);
    let nominalParse = parseInt(value);
    let totalPrice = parseInt(newData.data.totalPrice);
    let result = nominalParse - totalPrice;
    if (result >= 0) {
      setMoneyChanges(`Rp${convertNumber(result)}`);
      setDisable(false);
    } else {
      setMoneyChanges('-');
      setDisable(true);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.topContent}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={iconDollar}
            style={{width: scale(20), height: scale(20), resizeMode: 'contain'}}
          />
          <Text
            style={[
              font.PoppinsRegular,
              {
                fontWeight: '500',
                color: CGreey3,
                fontSize: scale(14),
                marginLeft: scale(10),
              },
            ]}>
            Tunai
          </Text>
        </View>
        <View style={{marginVertical: scale(15)}}>
          <Divider type={'normal'} />
        </View>
        <View>
          <Text
            style={[
              font.PoppinsRegular,
              {
                fontWeight: '400',
                color: CGreey3,
                fontSize: scale(14),
                marginBottom: scale(8),
              },
            ]}>
            Nominal Pembayaran
          </Text>
          <TextInputs
            keyboardType="numeric"
            value={nominal}
            onChangeText={value => handleOnchange(value)}
            textTitle="Rp"
            placeholder="Masukan Nominal Pembayaran"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: scale(10),
          }}>
          <Text
            style={[
              font.PoppinsRegular,
              {
                fontWeight: '400',
                color: CGreey3,
                fontSize: scale(14),
              },
            ]}>
            Kembalian
          </Text>
          <Text
            style={[
              font.PoppinsRegular,
              {
                fontWeight: '400',
                color: CGreey3,
                fontSize: scale(14),
              },
            ]}>
            {moneyChanges}
          </Text>
        </View>
      </View>
      <View style={styles.botContent}>
        <View style={styles.buttonContainer}>
          <Button
            title={'Buat Struk'}
            icon={iconButton}
            disable={disable}
            onPress={() =>
              navigation.navigate('Struct', {
                data: newData,
                nominal: nominal,
                moneyChanges: moneyChanges,
              })
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContent: {
    backgroundColor: CWhite,
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
    marginTop: scale(7),
  },
  botContent: {
    flex: 1,
    // backgroundColor: 'pink',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
    backgroundColor: CWhite,
  },
});
