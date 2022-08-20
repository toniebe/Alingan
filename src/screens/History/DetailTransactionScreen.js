import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {scale} from '../../assets/helper/scaling';
import transactionDetail from '../../api/transactionDetail';
import {
  CBlack,
  CBlue,
  CGreey3,
  CGreey4,
  CGreey5,
  CNeutral,
  colors,
  CPrimary,
} from '../../assets/styles/colors';
import Divider from '../../assets/components/Divider';
import iconNext from '../../assets/images/icon/Chevron-Right.png';
import iconDolar from '../../assets/images/icon/money.png';
import CardTransaction from '../../assets/components/Transaction/CardSummaryTransaction';
import CardSummaryTransaction from '../../assets/components/Transaction/CardSummaryTransaction';
import convertNumber from '../../assets/helper/convertNumber';
import font from '../../assets/styles/font';
import Loading from '../../assets/components/Loading'

export default function DetailTransactionScreen({navigation, route}) {
  const {id} = route.params;
  const [detailTransaction, setDetailTransaction] = useState({});
  const [itemTransaction, setItemTransaction] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getDetailTransaction = async id => {
    setIsLoading(true);
    let response = await transactionDetail(id);
    console.log(response.data.payload);
    if (!response.error) {
      setDetailTransaction(response.data.payload);
      setItemTransaction(response.data.payload.transactionItems);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDetailTransaction(id);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loading fullPage />
      ) : (
        <ScrollView>
          <View style={[styles.contentRow]}>
            <Text
              style={[
                font.PoppinsRegular,
                {color: CGreey3, fontSize: scale(10), fontWeight: '400'},
              ]}>
              id transaksi
            </Text>
            <Text
              style={[
                font.PoppinsRegular,
                {color: CGreey3, fontSize: scale(10), fontWeight: '500'},
              ]}>
              {id}
            </Text>
          </View>
          <View style={[styles.contentRow, {backgroundColor: CNeutral}]}>
            <Text
              style={[
                font.PoppinsBold,
                {color: CPrimary, fontSize: scale(15)},
              ]}>
              ALINGAN
            </Text>
            <Text
              style={[
                font.PoppinsRegular,
                {color: CGreey3, fontSize: scale(10), fontWeight: '500'},
              ]}>
              12 Agustus 2022 . 19:38
            </Text>
          </View>
          <View>
            <View
              style={[
                styles.contentRow,
                {
                  backgroundColor: CNeutral,
                  borderTopWidth: 1,
                  borderTopColor: CGreey4,
                },
              ]}>
              <Text style={textStyle1}>Toko</Text>
              <Text style={textStyle2}>ETN Sukajadi</Text>
            </View>
            <View style={{paddingHorizontal: scale(20)}}>
              <Divider type={'dashed'} />
            </View>
            <View style={[styles.contentRow, {backgroundColor: CNeutral}]}>
              <Text style={textStyle1}>Kasir</Text>
              <Text style={textStyle2}>Eva Celia</Text>
            </View>
          </View>
          <View
            style={[
              styles.contentRow,
              {backgroundColor: CNeutral, marginVertical: scale(15)},
            ]}>
            <View>
              <Text style={[textStyle1, {fontWeight: '600'}]}>
                Struk Pembayaran
              </Text>
              <Text style={[textStyle2, {fontWeight: '400'}]}>
                Sudah Dicetak
              </Text>
            </View>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Text style={[textStyle1, {color: CBlue}]}>Lihat Struk</Text>
              <Image
                source={iconNext}
                style={{width: scale(20), height: scale(20), tintColor: CBlue}}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.sumaryContainer]}>
            <Text
              style={[
                font.PoppinsBold,
                {color: CBlack, fontSize: scale(15), marginVertical: scale(10)},
              ]}>
              Ringkasan Pesanan
            </Text>
            <View>
              <Divider type={'normal'} />
            </View>
            <View>
              {itemTransaction.map((item, index) =>
                index === itemTransaction.length - 1 ? (
                  <CardSummaryTransaction
                    quantity={item.buyQuantity}
                    unit={item.unit}
                    title={item.productName}
                    price={item.usedPrice}
                    lastItem
                  />
                ) : (
                  <CardSummaryTransaction
                    quantity={item.buyQuantity}
                    unit={item.unit}
                    title={item.productName}
                    price={item.usedPrice}
                  />
                ),
              )}
            </View>
            <View style={[styles.contentRow, {paddingHorizontal: 0}]}>
              <Text style={textTitle}>Total Pesanan</Text>
              <Text style={textPrice}>{`Rp${convertNumber(
                detailTransaction.transactionTotal,
              )}`}</Text>
            </View>
          </View>
          <View
            style={[
              styles.contentRow,
              {backgroundColor: CNeutral, marginBottom: scale(20)},
            ]}>
            <Text
              style={[textStyle1, {fontSize: scale(16), fontWeight: '700'}]}>
              Total Pembayaran
            </Text>
            <Text
              style={[
                textStyle1,
                {fontSize: scale(16), fontWeight: '700'},
              ]}>{`Rp${convertNumber(
              detailTransaction.transactionTotal,
            )}`}</Text>
          </View>
          <View
            style={[
              styles.contentRow,
              {backgroundColor: CNeutral, justifyContent: 'flex-start'},
            ]}>
            <Image
              source={iconDolar}
              style={{width: scale(25), height: scale(25)}}
            />
            <Text style={[textStyle2, {marginLeft: scale(20)}]}>Tunai</Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: scale(15),
    paddingHorizontal: scale(15),
  },
  sumaryContainer: {
    backgroundColor: CNeutral,
    marginBottom: scale(20),
    marginTop: scale(5),
    paddingHorizontal: scale(20),
  },
});

const textStyle1 = StyleSheet.flatten([
  font.PoppinsRegular,
  {color: CBlack, fontSize: scale(14), fontWeight: '400'},
]);

const textStyle2 = StyleSheet.flatten([
  font.PoppinsRegular,
  {color: CGreey3, fontSize: scale(12), fontWeight: '500'},
]);

const textTitle = StyleSheet.flatten([
  font.PoppinsRegular,
  {color: CBlack, fontSize: scale(14), fontWeight: '400'},
]);

const textPrice = StyleSheet.flatten([
  font.PoppinsRegular,
  {color: CGreey3, fontSize: scale(12), fontWeight: '400'},
]);
