import React from 'react';
import {View, Text} from 'native-base';
import {Image, Dimensions, Animated, StatusBar} from 'react-native';
// import {Bo} from 'react-native-shadow'
import style from './style';
import TopTitle from '@custom/TopTitle';

export default props => {
  const payload = props.navigation.state.params;
  return (
    <View style={style.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Animated.View style={style.headerContainer}>
        <TopTitle style={style.headerTitle}>Booking</TopTitle>
        <View style={style.imageContainer}>
          <Image
            source={payload.image}
            style={{
              ...style.image,
              width: Dimensions.get('screen').width,
              resizeMode: 'cover',
            }}
          />
        </View>
      </Animated.View>
      <View
        style={{
          ...style.salesContainer,
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height / 2 - 100,
        }}>
        <View style={{margin: 15}}>
          <Text>Hello</Text>
        </View>
      </View>
    </View>
  );
};
