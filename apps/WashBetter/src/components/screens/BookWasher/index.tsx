import React from 'react';
import {View, Text} from 'native-base';
import {Image, Dimensions, Animated, StatusBar} from 'react-native';
// import {Bo} from 'react-native-shadow'
import style from './style';
import TopTitle from '@custom/TopTitle';

export default props => {
  const payload = props.navigation.state.params;
  const {width} = Dimensions.get('screen');
  const {height} = Dimensions.get('screen');

  return (
    <View style={style.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Animated.View style={style.headerContainer}>
        {/* <TopTitle style={style.headerTitle}>Booking</TopTitle> */}
        <View style={style.imageContainer}>
          <View style={{...style.imageOverlay, width, height}}>
            <Text></Text>
          </View>
          <Image
            source={payload.image}
            style={{
              ...style.image,
              width,
              resizeMode: 'cover',
            }}
          />
        </View>
      </Animated.View>
      <View
        style={{
          ...style.salesContainer,
          width,
          height: height / 2,
        }}>
        <View style={{margin: 15}}>
          <Text>Hello</Text>
        </View>
      </View>
    </View>
  );
};
