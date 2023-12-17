import React, { useState } from "react";
import { View,Text,ScrollView,Image, Dimensions } from "react-native";
import style from "./style";
import CustomTextinput from "../../components/CustomTextinput";
import CustomBotton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';
import Snackbar from "react-native-snackbar";
import colors from "../../components/common/colors";
import { useDimensionContext } from "../../context";

    const Loginphone =() =>{
    const [phone,setphone]=useState('');
    const [error,seterror]=useState(null);
    const navigation = useNavigation();
    const [showOtp,setshowOtpfield]=useState(false);
    const[Confirm,setConfirm]=useState(null);
    const [otp,setotp]=useState();
    const dimensions = useDimensionContext();

    const responsivestyle=style(
      dimensions.windowHeight,
      dimensions.windowWidth);

    const validatePhone = (phoneNumber)=>{
       const phoneRegex = '/^[0-9]*$';
       return phoneRegex.test(phoneNumber);
    }
  const handleButtonpress = async () =>{
      try{
        seterror(null);
        if(validatePhone(phone.trim())){
        const confirmation = await auth().signInWithPhoneNumber(phone);
        if(confirmation){
        Snackbar.show({
        text:'verification code is send to your mobile number ,please verify ',
        duration:Snackbar.LENGTH_SHORT,
        backgroundColor:colors.primaryGreen,   
        textColor:colors.white,
      });

      setConfirm (confirmation);
      setshowOtpfield(true);
    }
  }else{
    seterror('given phone number is incorrect');
  }
  } catch(error)
         {
        seterror('given number is not correct')
         }
    };

    const handlegotologin =() =>{
          navigation.goBack();
            };

    const handleVerifyOtp= async() =>{
      if(otp.trim() !== '' && validateOtp(otp.trim())){
       // console.warn(otp)
      const res=await Confirm.confirm(otp.trim());
      if(res){
        Snackbar.show({
          text:'your phone number is verified,login successfully',
          duration:Snackbar.LENGTH_SHORT,
          backgroundColor:colors.primaryGreen,
          textColor:colors.white,
               });
               navigation.navigate('Home');
      }
    } else{
      seterror('entered opt is not valid');
    };
  
      //  console.warn('res',res);
    };
    return(
        <View style={responsivestyle.container}>
            <Image source={require('../../assets/images/topBg.png')}
              style={responsivestyle.topBg} />
            <ScrollView style={responsivestyle.ScrollView} showsVerticalScrollIndicator={false}>
              <Image source={require('../../assets/images/logo.webp')}
                 style={responsivestyle.logo} />
            <Text style={responsivestyle.loginText}>Sign Up
            </Text>
            <CustomTextinput 
                    handleText={text=>setphone(text)}
                    placeholder='phone number' 
                    type="phone"
                    />
                    {showOtp ?(
                      <CustomTextinput
                      handleText={text=>setotp(text)}
                      placeholder="enter OTP"
                      type="phone"
                      />
                    ):null}
            
 <CustomBotton 
       type='primary'
       handleButtonpress={showOtp ?handleVerifyOtp:handleButtonpress}
       buttonText = {showOtp ? 'verify OTP':'SignIn with phone'}
            />
           <Text onPress={handlegotologin} 
           style={responsivestyle.createNew}> 
           Go to Login</Text>
            </ScrollView>
            
            
        </View>
    );
}
export default Loginphone;

