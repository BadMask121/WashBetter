import React from 'react';
import {View, Text} from 'native-base';
import {Image, Dimensions, TouchableHighlight} from 'react-native';
import Button from 'components/custom/Button';
import style from './style';
interface Props {
  id: number;
  image: string;
  name: string;
  location: string;
  rating: string;
}
export default (props: Props) => {
  const bookWash = () => {
    props.navigation.navigate('PreviewWasher', {
      id: props.id,
      image: props.image,
      name: props.name,
      location: props.location,
      rating: props.rating,
    });
  };
  return (
    <TouchableHighlight>
      <View style={style.container}>
        {/* remember make source dynamic  */}
        <View style={style.imageContainer}>
          <Image
            source={props.image}
            style={{
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              width: (Dimensions.get('screen').width / 2) * 0.5,
              height: 150,
              resizeMode: 'cover',
            }}
          />
        </View>
        <View style={style.cardInfoContainer}>
          <View>
            <Text
              style={{
                width: 150,
                fontSize: 20,
                fontFamily: 'Gilroy-Bold',
                color: '#1C4641',
              }}>
              {props.name}
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontFamily: 'Gilroy-Medium',
                color: '#55D2C4',
              }}>
              {props.location}
            </Text>
          </View>
          <View>
            <Text>Add star Here</Text>
          </View>
        </View>
        <View style={style.cardBookContainer}>
          <Button
            buttonStyle={style.cardBook}
            textStyle={{fontSize: 18}}
            text="Book"
            onPress={bookWash}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};
