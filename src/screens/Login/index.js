import React, { useState,useEffect } from "react";
import { View,Text,ScrollView,Image } from "react-native";
import style from "./style";
import CustomTextinput from "../../components/CustomTextinput";
import CustomBotton from "../../components/CustomButton";
import colors from "../../components/common/colors";
import { useNavigation } from "@react-navigation/native";
import firestore, { firebase } from '@react-native-firebase/firestore';
import Snackbar from "react-native-snackbar";
import auth from '@react-native-firebase/auth';
import { validateEmail } from "../../components/common/validations";
import { useDimensionContext } from "../../context";
import { useDispatch } from "react-redux";
import { login } from "../../storage/action";

const Login =() =>{
    const dimensions = useDimensionContext();
    const [email,setemail]=useState('');
    const [password,setPassword]=useState('');
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const responsivestyle=style(
      dimensions.windowWidth,
      dimensions.windowHeight);

    function onAuthStateChanged(user){
     //console.warn(user) ;
       }
      
  useEffect(()=>{
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber;
    },[]);
  const handleButtonpress = async() =>{
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog:true});
 
    }

  const handleLogin = async () => {
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();
    
      if (trimmedEmail !== '' && trimmedPassword !== '') {
        if (validateEmail(trimmedEmail)) {
          try {
            const snapshot = await firestore()
              .collection('user')
              .where('email', '==', trimmedEmail.toLowerCase())
              .get();
    
            if (snapshot.empty) {
              Snackbar.show({
                text: 'This user is not registered with us, try to create new',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: colors.primaryGreen,
                textColor: colors.white,
              });
            } else {
              snapshot.forEach((documentSnapshot) => {
                const respData = documentSnapshot.data();
                 // console.warn(respData);
                if (trimmedPassword == respData.password) {
                  Snackbar.show({
                    text: 'Login successful',
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor: 'red',
                  });
                  navigation.navigate('MyDrawer');

                  dispatch(
                    login({
                      userId:documentSnapshot.id,
                      firstName: respData.firstName,
                      lastName: respData.lastName,
                      email: respData.email,
                      mobileNumber:respData.mobilenumber,
                      profileImage:respData.profileimage,
                    }),
                  );
                
                } else {
                  Snackbar.show({
                    text: 'The password you entered is wrong',
                    duration: Snackbar.LENGTH_SHORT,
                    backgroundColor: colors.primaryGreen,
                    textColor: colors.white,
                  });
                 
                  
                }
              });
            }
          }catch (error ) {
            console.error('Firestore query error:', error);
           //  Handle the error appropriately, e.g., show an error message
          }
        //  catch (err){
          //  console.warn(err);
          //}  
        } else {
          Snackbar.show({
            text: 'Enter a valid email',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: colors.primaryGreen,
            textColor: colors.white,
          });
        }
      } else {
        Snackbar.show({
          text: 'Fill up the fields to continue',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: colors.primaryGreen,
          textColor: colors.white,
        });
      }
    };
   
    /*

    const handleLogin = async() =>{
        if(email.trim() !== '' && password.trim() !==''){
          if(validateEmail(email.trim())){
          await firestore()
            .collection('user')
            .where('email','==',email.trim().toLocaleLowerCase())
            .get()
            .then(async snapshot =>{
             if(snapshot.empty){
                Snackbar.show({
                    text:'this user is not registered with us,try to create new ',
                    duration:Snackbar.LENGTH_SHORT,
                    backgroundColor:colors.primaryGreen,
                    textColor:colors.white,
                });
            } else{
                snapshot.forEach((documentSnapshot) =>{
                const respData=documentSnapshot.data();

                if(password.trim()===respData.password){
                Snackbar.show({
                    text: 'Login successfull',
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor:'red',
                  });    
                  navigation.navigate('Home'); 
                }else{
                    Snackbar.show({
                        text:'the password you entered is wrong',
                        duration:Snackbar.LENGTH_SHORT,
                        backgroundColor:colors.primaryGreen,
                        textColor:colors.white,
                    });
                }
            });
        
            }
    })
    .catch (err => console.warn(err));
  }else{
    Snackbar.show({
      text:'enter a valid email',
      duration:Snackbar.LENGTH_SHORT,
      backgroundColor:colors.primaryGreen,
      textColor:colors.white,
  });

  }
          }else {
                Snackbar.show({
                        text:'fill up the fields to continue',
                        duration:Snackbar.LENGTH_SHORT,
                        backgroundColor:colors.primaryGreen,
                        textColor:colors.white,
                });

            }
        };
    */
   const handlegotoSignup=()=>{
     navigation.navigate('signup');
    };

    const handlegotologinphone =() =>{
        navigation.navigate('Loginphone');
          };

    return(
        <View style={responsivestyle.container}>
            <Image source={require('../../assets/images/topBg.png')}
              style={responsivestyle.topBg} />
            <ScrollView style={responsivestyle.ScrollView} showsVerticalScrollIndicator={false}>
              <Image source={require('../../assets/images/logo.webp')}
                 style={responsivestyle.logo} />
            <Text style={responsivestyle.loginText}>Login Account
            </Text>
            <CustomTextinput
                    type="email"
                    handleText={text=>setemail(text)}
                    placeholder='email address' />
            <CustomTextinput 
                    type="password"
                    handleText={text=>setPassword(text)}
                    placeholder='password'
            />
            <CustomBotton 
                     type='primary'
                     handleButtonpress={handleLogin}
                     buttonText = {'SignIn'}
            />
           <Text onPress={handlegotoSignup} style={responsivestyle.createNew}>
            if you are new,create here
           </Text>
           <View style={responsivestyle.dottedLineContainer}>
           <View style={responsivestyle.overflow}>
            <View style={responsivestyle.dashedLine}/>
            </View>
            <View style={responsivestyle.textContainer}>
            <Text style={responsivestyle.dashedText}>or login with</Text>
            </View>
        </View>
           <CustomBotton 
                     type='secondary'
                     handleButtonpress={handlegotologinphone}
                     buttonText = {'Sign in with phone'}
                     icon={require('../../assets/images/phone.png')}
                     
            />
            <CustomBotton 
                     type='secondary'
                     handleButtonpress={handleLogin}
                     buttonText = {'Sign in with google'}
                     icon={require('../../assets/images/google.png')}
            />
           
            </ScrollView>
            <View style={responsivestyle.footer}>
                <Text style={responsivestyle.footerText}>
                    Login in as a Guest
                </Text>
            </View>
        </View>
    );
  };
export default Login;

