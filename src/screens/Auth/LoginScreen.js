import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import StatusBarBackground from '../../components/StatusBarBackground';
import font from '../../assets/styles/font';
import {CBlack, colors, CPrimary, CWhite} from '../../assets/styles/colors';
import TextInputs from '../../assets/components/TextInputs';
// import iconEmail from '../../assets/images/icon/Exclude.png';
import {scale} from '../../assets/helper/scaling';
import Button from '../../assets/components/Button';
import callAPI from '../../assets/config/callAPI';
import login from '../../api/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import iconEmail from '../../assets/images/icon/email.png'
import iconPassword from '../../assets/images/icon/lock.png'
import {REGISTER_URL} from 'dotenv'

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    let response = await login({email, password});
    console.log({response})
    if (!response.error) {
      // console.log(response.data.payload)
      await storeData(response.data.payload);
      navigation.navigate('Dashboard');
      setIsLoading(false);
    } else {
      console.log('masuk sini')
      setIsLoading(false);
    }
  };

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('user', jsonValue);
    } catch (e) {
      console.log({e});
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* <StatusBarBackground style={{backgroundColor: CPrimary}} /> */}
      <View style={styles.titleContainer}>
        <Text style={[font.PoppinsBold, colors.Primary, {fontSize: scale(50)}]}>
          ALINGAN
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text
            style={[
              font.PoppinsRegular,
              {fontSize: scale(24), fontWeight: '600', color: CBlack},
            ]}>
            Masuk ke Akun
          </Text>
        </View>
        <View style={styles.textinputContainer}>
          <TextInputs
            keyboardType="email-address"
            value={email}
            onChangeText={value => setEmail(value)}
            icon={iconEmail}
          />
        </View>
        <View style={styles.textinputContainer}>
          <TextInputs
            icon={iconPassword}
            password
            secureTextEntry
            value={password}
            onChangeText={value => setPassword(value)}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={'LOGIN'}
          isLoading={isLoading}
          onPress={() => handleSubmit()}
          disable={!email || !password}
        />
        <View style={styles.registerContainer}>
          <Text
            style={[
              font.PoppinsRegular,
              {color: '#AAAAAA', fontWeight: '400', fontSize: scale(14)},
            ]}>
            Belum punya akun
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL(REGISTER_URL)}>
            <Text
              style={[
                font.PoppinsBold,
                colors.Blue,
                {fontWeight: '600', fontSize: scale(14)},
              ]}>
              Daftar Sekarang
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CWhite,
  },
  content: {
    flexGrow: 1,
    // height:'100%',
    // backgroundColor:'pink'
  },
  titleContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: scale(20),
    paddingVertical: scale(20),
  },
  textContainer: {
    alignItems: 'center',
    marginVertical: scale(20),
  },
  textinputContainer: {
    marginVertical: scale(15),
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: scale(20),
  },
  registerContainer: {
    marginVertical: scale(20),
    alignItems: 'center',
  },
});
