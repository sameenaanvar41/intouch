import React, { useState } from 'react';
import {  View , Image, TextInput,Text } from 'react-native';
import style from './style';
import colors from '../common/colors';
import { TouchableOpacity } from 'react-native';
import { useDimensionContext } from '../../context';

const CustomTextinput = props => {
const {type,handleText,placeholder,value,check=false,multiline=false} = props;
const dimension=useDimensionContext();
const {show, setShow}=useState(false);
const keyboardType = 
       type ==='email' ? 'email-address' : 
       type==='password' ? 'default' :
       type==='phone'?  'phone-pad':'default';
    const secureTextEntry = type ==='password' ?( show ? false : true) :false;
    const icon = 
    type === 'email' ? require('../../assets/images/email.png'):
    type === 'password' ? require('../../assets/images/passw.png'): false;

   const handlePressed = () => {
            setShow(!show);
    };
       return (
    <View style={style.container}>
      <TextInput
        style={[style.textInput ,     
       {height:Platform.OS === 'ios'
        ? multiline
          ? dimension.windowHeight * 0.12 
          : dimension.windowHeight * 0.04
        : multiline
          ? dimension.windowHeight * 0.1
          : dimension.windowHeight * 0.06,
         },
        ]} 
        placeholder={placeholder}
        placeholderTextColor='white'
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onChangeText={handleText}
        value={value}
        multiline={multiline}
      />
      {check ? (
      <Text style={style.checktext}>Check</Text>
      ):null }
      {!icon ? null : (
        <TouchableOpacity
          onPress={handlePressed}
          disabled={type !== 'password' ? true : false}>
          <Image source={icon} style={style.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default CustomTextinput;
