import React from 'react';
import {View, Text} from 'native-base';
import {Image, Dimensions, TouchableHighlight} from 'react-native';
import Button from 'components/custom/Button';
import StarRating from '@lib/react-native-star-rating';
import {app} from '@src/helpers/constants';
import style from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
interface Props {
  id: number;
  image: string;
  name: string;
  location: string;
  rating: string;
}
export default (props: Props) => {
  const bookWash = () => {
    props.navigation.navigate('BookWasher', {
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
              flex: 1,
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
                color: '#4E4D50',
              }}>
              {props.name}
            </Text>
            <Text
              style={{
                marginTop: 1,
                fontFamily: 'Gilroy-Medium',
                color: '#55D2C4',
              }}>
              {props.location}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
            }}>
            <View
              style={{
                alignSelf: 'flex-start',
                flexDirection: 'row',
                marginBottom: 10,
              }}>
              <Icon
                name="location-on"
                size={15}
                color="#55D2C4"
                style={{
                  marginLeft: -4,
                }}
              />
              <Text
                style={{
                  fontFamily: 'Gilroy-Light',
                  color: '#55D2C4',
                  fontSize: 14,
                  alignItems: 'flex-end',
                  alignSelf: 'flex-end',
                }}>
                1 km away
              </Text>
            </View>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={props.rating}
              fullStarColor="#67CDBF"
              starSize={22}
            />
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
