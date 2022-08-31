import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import convertNumber from '../../assets/helper/convertNumber';
import CardSummaryTransaction from '../../assets/components/Transaction/CardSummaryTransaction';
import Divider from '../../assets/components/Divider';
import font from '../../assets/styles/font';
import {
  CBlack,
  CGreey3,
  CGreey4,
  CNeutral,
  CPrimary,
} from '../../assets/styles/colors';
import {scale} from '../../assets/helper/scaling';
import Loading from '../../assets/components/Loading';
import CardCart from '../../components/Transaction/CardCart';
import formatDate from '../../assets/helper/formatDate';

export default function DetailPayment({navigation, route}) {
  const {data} = route.params;
  const [detailTransaction, setDetailTransaction] = useState({});
  const [itemTransaction, setItemTransaction] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [date,setDate] = useState(new Date(Date.now()))

  const handleSubmit = () => {
    let newData = {
        data,
        date:date
    }
    navigation.navigate('Payment', {newData})
  }
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loading fullPage />
      ) : (
        <ScrollView>
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
              {formatDate({date_input:date,type:'short',sparator:' ',time:true,sparatorDateTime:' . '})}
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
              {data.item.map((item, index) =>
                index === data.item.length - 1 ? (
                  <CardSummaryTransaction
                    key={index}
                    quantity={item.quantity}
                    unit={item.unit}
                    title={item.productName}
                    price={item.price}
                    lastItem
                  />
                ) : (
                  <CardSummaryTransaction
                    key={index}
                    quantity={item.quantity}
                    unit={item.unit}
                    title={item.productName}
                    price={item.price}
                  />
                ),
              )}
            </View>
            <View style={[styles.contentRow, {paddingHorizontal: 0}]}>
              <Text style={textTitle}>Total Pesanan</Text>
              <Text style={textPrice}>{`Rp${convertNumber(
                data.totalPrice,
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
              ]}>{`Rp${convertNumber(data.totalPrice)}`}</Text>
          </View>
        </ScrollView>
      )}
      <View style={styles.cartContainer}>
        <CardCart
          totalPrice={data.totalPrice}
          totalProduct={data.totalProduct}
          titleBtn="Selanjutnya"
          onPress={() => handleSubmit()}
        />
      </View>
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
    marginTop: scale(15),
    paddingHorizontal: scale(20),
  },
  cartContainer: {
    flex: 1,
    // backgroundColor: 'pink',
    justifyContent: 'flex-end',
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
