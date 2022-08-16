import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import StatusBarBackground from '../../components/StatusBarBackground';
import font from '../../assets/styles/font';
import {CBlack, colors, CPrimary, CWhite} from '../../assets/styles/colors';
import TextInputs from '../../assets/components/TextInputs';
import iconEmail from '../../assets/images/icon/Exclude.png';
import {scale} from '../../assets/helper/scaling';
import Button from '../../assets/components/Button';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <StatusBarBackground style={{backgroundColor: CPrimary}} />
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
          <TextInputs icon={require('../../assets/images/icon/Exclude.png')} />
        </View>
        <View style={styles.textinputContainer}>
          <TextInputs
            icon={require('../../assets/images/icon/Exclude.png')}
            password
            secureTextEntry
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title={'LOGIN'} />
        <View style={styles.registerContainer}>
          <Text
            style={[
              font.PoppinsRegular,
              {color: '#AAAAAA', fontWeight: '400',fontSize:scale(14)},
            ]}>
            Belum punya akun
          </Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com')}>
            <Text style={[font.PoppinsBold,colors.Blue,{fontWeight:'600',fontSize:scale(14)}]}>Daftar Sekarang</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CWhite,
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
