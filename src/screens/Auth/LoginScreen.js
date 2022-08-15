import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StatusBarBackground from '../../components/StatusBarBackground'

import { CPrimary, CWhite } from '../../assets/styles/colors'
import TextInputs from '../../assets/components/TextInputs'
import iconEmail from '../../assets/images/icon/Exclude.png'

export default function LoginScreen() {
  return (
    <View style={styles.container}>
        <StatusBarBackground style={{backgroundColor: CPrimary}} />
      <Text>LoginScreen</Text>
      <TextInputs icon={require('../../assets/images/icon/Exclude.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:CWhite,
    }
})