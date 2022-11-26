import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import CardAccount from '../../components/Transaction/CardAccount';
import {CPrimary, CWhite} from '../../assets/styles/colors';
import {scale} from '../../assets/helper/scaling';
import font from '../../assets/styles/font';
import TextInputs from '../../assets/components/TextInputs';
import iconSearch from '../../assets/images/icon/search_line.png';
import Divider from '../../assets/components/Divider';
import CardProduct from '../../components/Transaction/CardProduct';
import getProduct from '../../api/getProduct';
import Loading from '../../assets/components/Loading';
import Button from '../../assets/components/Button';
import {set} from 'react-native-reanimated';
import {ReducerContext} from '../../store';
import {useIsFocused} from '@react-navigation/native';
import convertNumber from '../../assets/helper/convertNumber';
import CardCart from '../../components/Transaction/CardCart';

export default function TransactionScreen({navigation}) {
  const {store, dispatch} = useContext(ReducerContext);
  const [allData, setAllData] = useState({});
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newItem, setNewItem] = useState({});
  const [filterData, setFilterData] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const [tabCart, setTabCart] = useState(false);
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const isFocus = useIsFocused();
  // let totalPrice = 0;

  const getData = async () => {
    setIsLoading(true);
    let response = await getProduct();
    if (!response.error) {
      setAllData(response.data.payload);
      setProduct(response.data.payload.products);
      setFilterData(response.data.payload.products);
      setIsLoading(false);
    }
  };

  const quantityPlusHanlder = index => {
    const newItems = [...product]; // clone the array
    let currentQty = newItems[index]['quantity'];

    newItems[index]['quantity'] = currentQty + 1;
    setTotalProduct(totalProduct + 1);
    setProduct(newItems);
    getCartProduct();
  };

  const quantityMinusHanlder = index => {
    const newItems = [...product]; // clone the array
    let currentQty = newItems[index]['quantity'];
    newItems[index]['quantity'] = currentQty > 0 ? currentQty - 1 : 0;
    setTotalProduct(totalProduct > 0 ? totalProduct - 1 : 0);
    setProduct(newItems);
  };

  const getTotalPrice = () => {
    let arrProd = filterCart();
    let result = 0;
    arrProd.map(item => {
      result = result + item.quantity * item.price;
    });
    setTotalPrice(result);
    console.log({totalPrice});
  };

  const getCartProduct = () => {
    if (totalProduct > 0) {
      setTabCart(true);
    } else {
      setTabCart(false);
    }
  };

  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()];
  }

  const filterCart = () => {
    const arr1 = getUniqueListBy(product, 'productId');
    // console.log({arr1})
    return arr1.filter(item => item.quantity !== 0);
  };

  const handleSubmit = () => {
    let arrCart = filterCart();
    const data = {
      item: arrCart,
      totalPrice: totalPrice,
      totalProduct: totalProduct,
    };
    // console.log({data})
    navigation.navigate('DetailPayment', {data: data});
  };

  const searchFilter = text => {
    if (text) {
      const newData = product.filter(item => {
        const itemData = item.productName
          ? item.productName.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(product);
      setSearch(text);
    }
  };

  useEffect(() => {
    getData();
    if (isFocus) {
      setTotalProduct(0);
    }
  }, [isFocus]);

  useEffect(() => {
    getCartProduct();
    getTotalPrice();
  }, [totalProduct]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{flex: 1, flexGrow: 1}}>
      {isLoading ? (
        <Loading fullPage />
      ) : (
        <>
          <View style={styles.topContainer}>
            <Text style={textAlingan}>ALINGAN</Text>
          </View>
          <View style={styles.midContainer}>
            <CardAccount />
            <View style={{marginVertical: scale(20), borderRadius: scale(10)}}>
              <TextInputs
                value={search}
                onChangeText={value => searchFilter(value)}
                icon={iconSearch}
                placeholder="Cari Produk"
              />
            </View>
            <Divider type={'normal'} />
            <ScrollView
              contentContainerStyle={styles.contentContainer}
              style={{flex: 1, marginTop: scale(10)}}>
              {filterData.map((item, index) => (
                <View style={{marginVertical: scale(10)}} key={index}>
                  <CardProduct
                    image={item.imageUrl}
                    title={item.productName}
                    price={item.price}
                    unit={item.unit}
                    count={item.quantity}
                    actionMinus={() => quantityMinusHanlder(index)}
                    actionPlus={() => quantityPlusHanlder(index)}
                    // actionPlus={() => handlePlus(item)}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
          {tabCart && (
            <CardCart
              totalPrice={totalPrice}
              totalProduct={totalProduct}
              titleBtn="bayar sekarang"
              onPress={() => handleSubmit()}
            />
          )}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CWhite,
  },
  contentContainer: {
    flexGrow: 1,
    backgroundColor: CWhite,
  },
  topContainer: {
    flex: 0.2,
    backgroundColor: CPrimary,
    borderBottomLeftRadius: scale(30),
    borderBottomRightRadius: scale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  midContainer: {
    flex: 1,
    backgroundColor: CWhite,
    paddingHorizontal: scale(20),
  },
  cart: {
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

    elevation: 6,
  },
});

const textAlingan = StyleSheet.flatten([
  font.Poppins,
  {fontSize: scale(20), color: CWhite},
]);
