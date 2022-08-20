import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import account from '../../api/account';
import {scale} from '../../assets/helper/scaling';
import {
  CGreey,
  CGreey3,
  CGreey4,
  CNeutral,
  CNeutral12,
  CNeutral4,
  CPrimary,
} from '../../assets/styles/colors';
import Button from '../../assets/components/Button';
import font from '../../assets/styles/font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../assets/components/Loading';

export default function AccountScreen({navigation}) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [storeDetail, setStoreDetail] = useState({});
  const getDetailUser = async () => {
    setIsLoading(true);
    let response = await account();
    if (!response.error) {
      setUser(response.data);
      setStoreDetail(response.data.storeDetail);
      setIsLoading(false);
    } else {
      console.log('error bosq');
    }
  };

  const handleLogout = async () => {
    AsyncStorage.removeItem('user');
    navigation.replace('SplashScreen');
  };

  useEffect(() => {
    getDetailUser();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loading  />
      ) : (
        <>
          <View style={styles.topContainer}>
            <Image
              source={{uri: user.imageUrl}}
              style={{
                width: scale(100),
                height: scale(100),
                borderRadius: scale(100 / 2),
              }}
            />
            <View style={{alignItems: 'center', marginVertical: scale(10)}}>
              <Text
                style={[
                  font.PoppinsRegular,
                  {fontWeight: '700', color: CGreey3},
                ]}>
                {user.name}
              </Text>
              <Text
                style={[
                  font.PoppinsRegular,
                  {fontWeight: '600', color: CNeutral4},
                ]}>
                {user.email}
              </Text>
              {storeDetail && (
                <View style={{flexDirection: 'row', marginTop: scale(10)}}>
                  <Text
                    style={[
                      font.PoppinsRegular,
                      {color: CNeutral12, fontWeight: '700'},
                    ]}>
                    {storeDetail.storeName} -{' '}
                  </Text>
                  <Text
                    style={[
                      font.PoppinsRegular,
                      {color: CNeutral12, fontWeight: '700'},
                    ]}>
                    {storeDetail.address}
                  </Text>
                </View>
              )}
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <Button
              type="secondary"
              style={{backgroundColor: CNeutral}}
              textStyle={{color: CNeutral12, fontWeight: '700'}}
              title="Keluar Aplikasi"
              onPress={() => handleLogout()}
            />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: CNeutral,
    marginTop: scale(10),
  },
  bottomContainer: {
    flex: 1,
    paddingTop: scale(30),
    paddingHorizontal: scale(30),
  },
});
