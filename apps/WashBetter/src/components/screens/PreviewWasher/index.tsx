import React from 'react';
import {View, Text} from 'native-base';
import {Image, Dimensions} from 'react-native';
import style from './style';

export default props => {
  const payload = props.navigation.state.params;
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image
          source={payload.image}
          style={{
            flex: 1,
            width: Dimensions.get('screen').width,
            height: 100,
            resizeMode: 'cover',
          }}
        />
      </View>
      <View style={style.salesContainer}>
        <View></View>
      </View>
    </View>
  );
};
