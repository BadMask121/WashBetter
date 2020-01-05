import React from 'react';
import {View, Text} from 'native-base';
import {KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import Button from '@custom/Button';
import FormInput from '@custom/Form/Input';
import {app} from '@src/helpers/constants';
import style from './style';
export default () => {
  return (
    <KeyboardAvoidingView style={style.container}>
      <View style={style.loginOptions}>
        <View style={style.titleContainer}>
          <Text style={style.title}>Log in</Text>
        </View>
        <Button
          icon="facebook"
          iconSize={20}
          iconColor="#fff"
          text="Log in with Facebook"
        />
        <Button
          buttonStyle={{
            backgroundColor: '#fff',
          }}
          textStyle={{
            color: '#000',
          }}
          icon="google"
          iconSize={20}
          iconColor="#000"
          text="Sign in with Google"
        />
        <View
          style={{
            marginTop: 10,
          }}>
          <Text
            style={{
              justifyContent: 'flex-end',
              alignSelf: 'center',
              fontFamily: 'Gilroy-Light',
            }}>
            or
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1.5,
        }}>
        <Formik
          initialValues={{email: ''}}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View
              style={
                {
                  // flex: 0.5,
                }
              }>
              <FormInput
                handleChange={handleChange}
                name="email"
                placeholder="Email Address"
                submitting={false}
              />
              <FormInput
                handleChange={handleChange}
                name="password"
                placeholder="Password"
                submitting={false}
                secureTextEntry
              />
              <Button
                disable={!true}
                buttonStyle={{
                  marginTop: 20,
                  marginBottom: 30,
                  backgroundColor: app.primaryColor,
                }}
                textStyle={{fontFamily: 'Gilroy-Bold'}}
                onPress={handleSubmit}
                text="Log in"
              />

              <TouchableOpacity onPress={() => alert('Forgot Password')}>
                <Text
                  style={{
                    justifyContent: 'center',
                    textAlign: 'center',
                    fontSize: 15,
                    color: 'rgba(0,0,0,0.9)',
                  }}>
                  Forgot your password?
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAvoidingView>
  );
};
