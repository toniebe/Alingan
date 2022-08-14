import {StyleSheet, Text, View, FlatList, Animated, Linking} from 'react-native';
import React, {useRef, useState} from 'react';
import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';
import font from '../../assets/styles/font';
import {colors} from '../../assets/styles/colors';
import {scale} from '../../assets/helper/scaling';
import Button from '../../assets/components/Button';

export default function Onboarding({data, navigation}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null);

  const viewableItemChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={[font.Poppins, colors.Primary, {fontSize: scale(30)}]}>
          ALINGAN
        </Text>
      </View>
      <View style={{flex: 2}}>
        <FlatList
          data={data}
          renderItem={({item}) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={data} scrollX={scrollX} />
      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: scale(30),
        }}>
        <View
         style={{
          width:'100%',
          marginBottom:scale(15)
         }}
        >
          <Button
            title="Masuk Sekarang"
            category="standard"
            size="long"
            type="primary"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
        <Button
          title="Daftar"
          category="standard"
          size="long"
          type="secondary"
          onPress={() => Linking.openURL('https://www.facebook.com')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#B52435',
  },
  buttonText: {
    color: '#fff',
  },
  buttonOutline: {
    borderColor: '#B52435',
  },
});
