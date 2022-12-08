import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import transactionAgent from '../../api/transactionAgent';
import CardTransaction from '../../components/Transaction/CardTransaction';
import {CNeutral} from '../../assets/styles/colors';
import {scale} from '../../assets/helper/scaling';
import {useTheme} from '@react-navigation/native';
import Loading from '../../assets/components/Loading';
import moment from 'moment';
import formatDate from '../../assets/helper/formatDate';
import transactionStore from '../../api/transactionStore';

export default function StoreScreen({navigation}) {
  const [transaction, setTransaction] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //   const [filterDate,setFilterDate] = useState([])

  const getDataTransaction = async () => {
    setIsLoading(true);
    let response = await transactionStore();
    console.log(response.data.payload);
    if (!response.error) {
      setTransaction(response.data.payload.transactionList);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDataTransaction();
  }, []);

  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView style={styles.cardContainer}>
          {transaction.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate('TransactionDetail', {
                  id: item.transactionId,
                })
              }>
              <CardTransaction
                key={index + '12'}
                number={item.transactionTotal}
                idTransaksi={moment(item.transactionDate, 'YYYY/MM/DD').format(
                  'YYYY-MM-DD',
                )}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: CNeutral,
  },
  card: {
    marginVertical: scale(5),
  },
});
