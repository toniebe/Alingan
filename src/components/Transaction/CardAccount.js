import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import iconStore from '../../assets/images/icon/Shop.png';
import iconAgent from '../../assets/images/icon/User_fill.png';
import {scale} from '../../assets/helper/scaling';
import {CBlack, CGreey4, CGreey5, CWhite} from '../../assets/styles/colors';

export default function CardAccount({
  storeName = 'ETN-XXX',
  agentName = 'AGENT-XXX',
}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={iconStore} style={styles.image} />
        <Text>{storeName}</Text>
      </View>
      <View style={{}}>
        <View
          style={{
            borderRightWidth: 1,
            borderRightColor: CGreey5,
            borderTopRightRadius: scale(1),
            paddingVertical: scale(25),
          }}
        />
      </View>

      <View style={styles.imageContainer}>
        <Image source={iconAgent} style={styles.image} />
        <Text>{agentName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical:scale(15),
    paddingHorizontal:scale(20),
    marginTop:scale(-30),
    flexDirection: 'row',
    backgroundColor: CWhite,
    justifyContent: 'space-around',
    alignItems:'center',
    borderRadius:scale(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  image: {
    width: scale(30),
    height: scale(30),
    resizeMode: 'contain',
  },
  imageContainer:{
    justifyContent:'center',
    alignItems:'center'
  }
});
