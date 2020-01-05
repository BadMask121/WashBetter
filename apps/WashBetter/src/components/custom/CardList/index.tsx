import React, {lazy, Suspense} from 'react';
import {View, Text} from 'native-base';
import {Image, Dimensions, FlatList, TouchableHighlight} from 'react-native';
import {data} from '../../../helpers/dummydata';
// import FindCardWashCard from '../Card/FindCarWashCard';
import {ActivityIndicator} from 'react-native';
const FindCardWashCard = lazy(() => import('../Card/FindCarWashCard'));

export default ({loading, ...props}) => {
  const renderFooter = () =>
    loading ? (
      <View>
        <ActivityIndicator animating size="large" />
      </View>
    ) : null;

  return (
    <Suspense fallback={renderFooter()}>
      <View style={{flex: 1, padding: 5}}>
        <FlatList
          data={data}
          renderItem={({item, index, separators}) => (
            <FindCardWashCard key={item.id} {...item} {...props} />
          )}
          keyExtractor={(item, i) => item.id}
          ListFooterComponent={renderFooter}
        />
        <Text>sdds</Text>
      </View>
    </Suspense>
  );
};
