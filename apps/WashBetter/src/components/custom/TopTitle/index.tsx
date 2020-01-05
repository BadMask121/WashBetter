import React from 'react';
import {View, Text} from 'native-base';
import {Animated} from 'react-native';
import style from './style';
export default ({title, labelSize}) => {
  return (
    <Animated.View style={style.titleContainer}>
      <Animated.Text style={[style.title, {fontSize: labelSize || 40}]}>
        {title}
      </Animated.Text>
    </Animated.View>
  );
};
