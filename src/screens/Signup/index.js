import React, { useEffect, useState } from "react";
import { View,Text,ScrollView,Image } from "react-native";
import firestore, { firebase } from '@react-native-firebase/firestore';
import style from "./style";
import CustomTextinput from "../../components/CustomTextinput";
import CustomBotton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { validateEmail, validatePhoneNumber } from "../../components/common/validations";
import Snackbar from "react-native-snackbar";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { colors } from "react-native/Libraries/NewAppScreen";


 const Signup =() =>{
    const [username,setUsername]=useState('');
    const [email,setemail]=useState('');
    const [mobile,setmobile]=useState('');
    const [password,setPassword]=useState('');
    const [cpassword,setcPassword]=useState('');
    const [error,seterror]=useState('');
    const navigation = useNavigation(null);
      
    useEffect( () => {
        GoogleSignin.configure({
        webClientId:
         '140592660905-ukj2cmhu85imla1eaj90r70etgkq9336.apps.googleusercontent.coms',
              });
    },[] );

    const handleButtonpress = async() =>{
        await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog:true});
    };
    

    
    const handlegotologin =() =>{
          navigation.goBack();
            };
        const handlesignup = async () => {
         if(
         username.trim() !== '' &&
         email.trim() !== ''&&
         mobile.trim() &&
         password.trim() &&
         cpassword.trim() 
         ) {
        if(validateEmail(email.trim())){
        // } else{
     if(validatePhoneNumber(mobile.trim())){
           if(password.trim()===cpassword.trim()){
                await firestore()
                .collection('user')
                .where('username','==',username.trim())
                .where('email','==',email.trim()).get()
                .then(async snapshot =>{
                if(snapshot.empty){
                if(validateEmail(email.trim())){
                  if(validatePhoneNumber(mobile.trim())){
                     const userdata = {
                     username:username.trim(),
                      email:email.trim(),
                       mobilenumber: mobile.trim(),
                       password:password.trim(),
                        created:String(new Date()),
                        updated:String(new Date())
                        };
                        await firestore()
                        .collection('user')
                        .add(userdata)
                        .then(resp =>{
                         setUsername('');
                        Snackbar.show({
                        text: 'A new user is created for you',
                        duration: Snackbar.LENGTH_LONG,
                                        backgroundColor:'red',
                                      });    
                                      navigation.navigate('Home'); 
                        })
                        .catch(err => {
                           console.warn(err);
                        }); 
                        }else{
                                seterror('Given mobile number is not valid');
                        }
                }
                        }else{
                             seterror('Given email is not valid');
                        }
                      // }
                       });
                       }else{
                        Snackbar.show({
                                text: 'this email is already existing on our system,try using other',
                                duration: Snackbar.LENGTH_LONG,
                                backgroundColor:'red',
                              });
                        }
               // });
        }else{
                 seterror('give passwords are not matching');
                        }
                 } else{
                        seterror('given email is not');

                 }
        } else{
           seterror('fill up all the field to continue');
         };
             } ;/*

          const handlesignup = async () => {
                if (
                    username.trim() !== '' &&
                    email.trim() !== '' &&
                    mobile.trim() !== '' &&
                    password.trim() !== '' &&
                    cpassword.trim() !== ''
                ) {
                    if (validateEmail(email.trim())) {
                        if (password.trim() === cpassword.trim()) {
                            await firestore()
                                .collection('user')
                                .where('username', '==', username.trim())
                                .where('email', '==', email.trim())
                                .get()
                                .then(async snapshot => {
                                    if (snapshot.empty) {
                                        if (validatePhoneNumber(mobile.trim())) {
                                            const userdata = {
                                                username: username.trim(),
                                                email: email.trim(),
                                                mobilenumber: mobile.trim(),
                                                password: password.trim(),
                                                created: String(new Date()),
                                                updated: String(new Date())
                                            };
                                            await firestore()
                                                .collection('user')
                                                .add(userdata)
                                                .then(resp => {
                                                    setUsername('');
                                                    Snackbar.show({
                                                        text: 'A new user is created for you',
                                                        duration: Snackbar.LENGTH_LONG,
                                                        backgroundColor: 'red',
                                                    });
                                                    navigation.navigate('Home');
                                                })
                                                .catch(err => {
                                                    console.warn(err);
                                                });
                                        } else {
                                            seterror('Given mobile number is not valid');
                                        }
                                    } else {
                                        seterror('This email is already existing in our system, try using another.');
                                    }
                                });
                        } else {
                            seterror('Given passwords are not matching');
                        }
                    } else {
                        seterror('Given email is not valid');
                    }
                } else {
                    seterror('Fill up all the fields to continue');
                }
            };

*/

             
                return(
        <View style={style.container}>
            <Image source={require('../../assets/images/topBg.png')}
              style={style.topBg} />
            <ScrollView style={style.ScrollView} showsVerticalScrollIndicator={false}>
              <Image source={require('../../assets/images/logo.webp')}
                 style={style.logo} />
            <Text style={style.loginText}>Sign Up
            </Text>

            {error !== null ? (
                <View>
                <Text style = {style.errorText}>{error} </Text>
                </View>
            ) : null
            }
            <CustomTextinput 
                    type="username"
                    handleText={text=>setUsername(text)}
                    placeholder='username' />
   
            <CustomTextinput 
                    type="email"
                    handleText={text=>setemail(text)}
                    placeholder='email address' />
            <CustomTextinput 
                    type="phone"
                    handleText={text=>setmobile(text)}
                    placeholder='mobile number' />
            <CustomTextinput 
                    type="password"
                    handleText={text=>setPassword(text)}
                    placeholder='password'
            />
            <CustomTextinput 
                    type="password"
                    handleText={text=>setcPassword(text)}
                    placeholder='corfirm password'
            />
            <CustomBotton 
                     type='primary'
                     handleButtonpress={handlesignup}
                     buttonText = {'Sign Up'}
            />
            <View style={style.dottedLineContainer}>
           <View style={style.overflow}>
            <View style={style.dashedLine}/>
            </View>
            <View style={style.textContainer}>
            <Text style={style.dashedText}>or signup Account</Text>
            </View>
        </View>

        <CustomBotton 
                     type='secondary'
                     handleButtonpress={handleButtonpress}
                     buttonText = {'Sign up with google'}
                     icon={require('../../assets/images/google.png')}
            />
           <Text onPress={handlegotologin} style={style.createNew}> 
           Go to Login</Text>
            </ScrollView>
            
            
        </View>
    );
        };
export default Signup;
