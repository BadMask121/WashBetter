import React from 'react';
import {View, Text} from 'native-base';
import {Image, KeyboardAvoidingView} from 'react-native';
import {Dimensions} from 'react-native';
import * as BoxShadow from 'react-native-shadow';
import {Formik} from 'formik';
import TopTitle from '@custom/TopTitle';
import FormInput from '@custom/Form/Input';
import style from './style';
import CardList from 'components/custom/CardList';

export default props => {
  return (
    <KeyboardAvoidingView style={style.container}>
      <View style={style.topTitle}>
        <TopTitle title="Find Car Wash" />
        <View style={style.inputForm}>
          <Formik
            initialValues={{email: ''}}
            onSubmit={values => console.log(values)}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <FormInput
                  rounded
                  inputViewStyle={{
                    borderColor: '#e1fbff',
                    backgroundColor: '#e1fbff',
                  }}
                  handleChange={handleChange}
                  name="search"
                  placeholder="Search for car wash"
                  submitting={false}
                />
              </View>
            )}
          </Formik>
        </View>
      </View>
      <View style={{flex: 1}}>
        <CardList {...props} loading={true} />
      </View>
    </KeyboardAvoidingView>
  );
};
