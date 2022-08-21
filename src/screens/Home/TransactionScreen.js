import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
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

export default function TransactionScreen({navigation}) {
  const [allData, setAllData] = useState({});
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newItem, setNewItem] = useState({});
  const [filterData, setFilterData] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');

  const getData = async () => {
    setIsLoading(true);
    let newArr = [];
    let response = await getProduct();
    if (!response.error) {
      setAllData(response.data.payload);
      setProduct(response.data.payload.products);
      setFilterData(response.data.payload.products);
      setIsLoading(false);
    }
  };

  const quantityHanlder = (action, index) => {
    const newItems = [...product]; // clone the array
    // console.log({newItems})
    let currentQty = newItems[index]['quantity'];

    if (action == 'more') {
      newItems[index]['quantity'] = currentQty + 1;
    } else if (action == 'less') {
      newItems[index]['quantity'] = currentQty > 0 ? currentQty - 1 : 0;
    }
    setNewItem({cartItems: newItems});
    console.log(newItem);
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
  }, []);

  return (
    <View style={styles.container}>
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
              <TextInputs value={search} onChangeText={(value) => searchFilter(value)} icon={iconSearch} placeholder="Cari Produk" />
            </View>
            <Divider type={'normal'} />
            <ScrollView
              contentContainerStyle={styles.contentContainer}
              style={{flex: 1, marginVertical: scale(20)}}>
              {filterData.map((item, index) => (
                <View style={{marginVertical: scale(10)}} key={index}>
                  <CardProduct
                    image={item.imageUrl}
                    title={item.productName}
                    price={item.price}
                    unit={item.unit}
                    count={item.quantity}
                    actionMinus={() => quantityHanlder('less', index)}
                    actionPlus={() => quantityHanlder('more', index)}
                    // actionPlus={() => handlePlus(item)}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
        </>
      )}
    </View>
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
});

const textAlingan = StyleSheet.flatten([
  font.Poppins,
  {fontSize: scale(20), color: CWhite},
]);
