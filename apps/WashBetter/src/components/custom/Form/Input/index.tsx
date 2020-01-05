import React from 'react';
import {Item, Label, Input} from 'native-base';
import {Dimensions} from 'react-native';
function FormInput({handleChange, name, placeholder, submitting, ...props}) {
  return (
    <Item
      regular
      style={{
        borderRadius: 5,
        borderColor: 'lightblue',
        height: 50,
        marginBottom: 15,
        marginLeft: 10,
        marginRight: 10,
      }}
      floatingLabel>
      <Input
        onChangeText={handleChange(name)}
        placeholder={placeholder}
        placeholderTextColor="rgba(0,0,0,0.5)"
        disabled={submitting || false}
        {...props}
        style={{
          textAlign: 'center',
          fontFamily: 'Gilroy-Medium',
          lineHeight: 15,
          fontSize: 15,
          height: 70,
          marginBottom: 10,
        }}
      />
    </Item>
  );
}

export default FormInput;
