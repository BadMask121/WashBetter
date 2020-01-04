import React from 'react';
import {Text} from 'native-base';
import {View, Alert, Image} from 'react-native';
import {Dimensions} from 'react-native';
import style from './style';
import {Transition} from 'react-navigation-fluid-transitions';
export default () => {
  return (
    <View style={style.container}>
      <Transition shared="logo">
        <View style={style.logoContainer}>
          <Image
            source={require('@assets/images/logo.png')}
            style={{
              ...style.logoImage,
              width: Dimensions.get('window').width,
            }}
          />
        </View>
      </Transition>
      {/* <View>
        <View></View>
        <View>
          <View></View>
          <View></View>
        </View>
      </View> */}
    </View>
  );
};
