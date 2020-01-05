import React from 'react';
import {View, Text} from 'native-base';
import style from './style';
export default ({title}) => {
  return (
    <View style={style.titleContainer}>
      <Text style={style.title}>{title}</Text>
    </View>
  );
};
