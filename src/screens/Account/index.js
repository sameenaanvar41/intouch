/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-unstable-nested-components */
import {useEffect, useState} from 'react';
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import Snackbar from 'react-native-snackbar';
import firestore from '@react-native-firebase/firestore';
import Commonheaderleft from '../../components/Commonheaderleft';
import {useDimensionContext} from '../../context';
import CustomTextinput from '../../components/CustomTextinput';
import CustomBotton from '../../components/CustomButton';
import colors from '../../components/common/colors';
import { validateEmail, validatePhoneNumber } from '../../components/common/validations';
import {useDispatch, useSelector} from 'react-redux';
import {updateProfile} from '../../storage/action';
import {updateProfileImage} from './controller';

const Account = () => {
  const navigation = useNavigation();
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const {userId, firstName, lastName, email, mobileNumber, profileImage} =
    useSelector(state => state);

  const dispatch = useDispatch();

  const [fName, setFName] = useState(firstName);
  const [lName, setLName] = useState(lastName);
  const [phone, setPhone] = useState(mobileNumber);
  const [modal, setModal] = useState(false);
  const [modalChoose, setModalChoose] = useState(false);
  const [userImage, setUserImage] = useState('');
  const [StateEmail, setEmail] = useState(email);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Commonheaderleft />,
    });
  }, []);

  const handleOpenImage = () => {
    setModal(!modal);
  };
  const handleEditImage = () => {
    setModalChoose(true);
  };

  const handlePickFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setUserImage(image.sourceURL ?? '');
        setModalChoose(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setModalChoose(false);
        console.log(image);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleUpdateProfile = async () => {
    if (validatePhoneNumber(phone.trim())) {
      if (validateEmail(StateEmail.trim())) {
        if (fName !== '' && lName !== '') {
          let newUrl = profileImage;
          if (userImage !== '') {
            newUrl = await updateProfileImage(userImage);
          }
          await firestore()
            .collection('Users')
            .doc(userId)
            .update({
              firstName: fName,
              lastName: lName,
              email: StateEmail,
              mobilenumber: phone,
              profileimage: newUrl,
            })
            .then(() => {
              dispatch(
                updateProfile({
                  firstName: fName,
                  lastName: lName,
                  email: StateEmail,
                  mobileNumber: phone,
                  profileImage: newUrl,
                }),
              );
              setUserImage('');
              Snackbar.show({
                text: 'Profile is updated',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: colors.primaryGreen,
                textColor: colors.white,
              });
            });
        } else {
          Snackbar.show({
            text: 'Fill up the all fields to continue',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: colors.red,
            textColor: colors.white,
          });
        }
      } else {
        Snackbar.show({
          text: 'Given email address is not valid',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: colors.red,
          textColor: colors.white,
        });
      }
    } else {
      Snackbar.show({
        text: 'Given phone number is not valid',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.red,
        textColor: colors.white,
      });
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={responsiveStyle.container}>
      <Text style={responsiveStyle.head}>
        {firstName} {lastName}
      </Text>
      <View style={responsiveStyle.userImage}>
        <TouchableOpacity onPress={handleOpenImage}>
          <Image
            style={responsiveStyle.image}
            source={
              userImage === ''
                ? profileImage === ''
                  ? require('../../assets/images/profile-pic.png')
                  : {uri: profileImage}
                : {uri: userImage}
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={responsiveStyle.editTouch}
          onPress={handleEditImage}>
          <Image
            source={require('../../assets/images/edit-green.png')}
            style={responsiveStyle.edit}
          />
        </TouchableOpacity>
      </View>

      <CustomTextinput
        handleText={text => setFName(text)}
        value={fName}
        placeholder="First Name"
      />
      <CustomTextinput
        handleText={text => setLName(text)}
        value={lName}
        placeholder="Last Name"
      />
      <CustomTextinput
        type="email"
        handleText={text => setEmail(text)}
        value={StateEmail}
        placeholder="Email Address"
      />
      <CustomTextinput
        handleText={text => setPhone(text)}
        value={phone}
        placeholder="Mobile Number"
      />

      <CustomBotton
        type="primary"
        handleButtonPress={handleUpdateProfile}
        buttonText={'Update Profile'}
      />

      <Modal visible={modal} onRequestClose={() => setModal(false)} transparent>
        <View style={responsiveStyle.modalBack}>
          <View>
            <TouchableOpacity
              onPress={() => setModal(false)}
              style={responsiveStyle.close}>
              <Image
                source={require('../../assets/images/close.png')}
                style={responsiveStyle.edit}
              />
            </TouchableOpacity>
            <Image
              style={responsiveStyle.bigImage}
              source={
                userImage === ''
                  ? require('../../assets/images/profile-pic.png')
                  : {uri: userImage}
              }
            />
          </View>
        </View>
      </Modal>

      <Modal
        visible={modalChoose}
        onRequestClose={() => setModalChoose(false)}
        transparent>
        <View style={responsiveStyle.modalBack}>
          <View style={responsiveStyle.selectBox}>
            <TouchableOpacity
              onPress={() => setModalChoose(false)}
              style={responsiveStyle.closeChoose}>
              <Image
                source={require('../../assets/images/close.png')}
                style={responsiveStyle.edit}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={responsiveStyle.touch}
              onPress={handlePickFromGallery}>
              <Text style={responsiveStyle.pickText}>Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={responsiveStyle.touch}
              onPress={handleFromCamera}>
              <Text style={responsiveStyle.pickText}>Camera</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Account;





// import React, { useEffect, useState } from "react";
// import { Image, Modal, Text, View } from "react-native";
// import style from "./style";
// import { useNavigation } from "@react-navigation/native";
// import Commonheaderleft from "../../components/Commonheaderleft";
// import { useDimensionContext } from "../../context";
// import { TouchableOpacity } from "react-native";
// import CustomTextinput from "../../components/CustomTextinput";
// import CustomBotton from "../../components/CustomButton";
// import ImagePicker from 'react-native-image-crop-picker';
// import { validatePhoneNumber } from "../../components/common/validations";
// import Snackbar from "react-native-snackbar";
// import colors from "../../components/common/colors";
// import { validateEmail } from "../../components/common/validations";
// import { useDispatch, useSelector } from "react-redux";
// import firestore from '@react-native-firebase/firestore';
// import { updateprofile } from "../../storage/action";
// import { updateprofileImage } from "./controller";
// import { ScrollView } from "react-native-gesture-handler";

//  const Account=() =>{
//     const navigation=useNavigation();
//     useEffect(()=>{
//         navigation.setOptions({
//           headerLeft: () => <Commonheaderleft />,      
//              });
//        },[]);
//    const dimension= useDimensionContext();
//    const responsivestyle=style(
//     dimension.windowWidth,
//     dimension.windowHeight,
//     );
//     const userId =  useSelector(state => state.userId);
//     const firstName =  useSelector(state => state.firstName);
//     const lastName =  useSelector(state => state.lastName);
//     const email =  useSelector(state => state.email);
//     const mobileNumber =  useSelector(state => state.mobileNumber);
//     const dispatch = useDispatch();

//     const [fname,setfname]=useState(firstName);
//     const [lname,setlname]=useState(lastName);
//     const [modal,setModal]=useState(false);
//     const [modalChoose,setModalchoose]=useState(false);
//     const [profileImage,setprofileImage]=useState('');
//     const [userImage,setuserImage]=useState('');
//     const [phone,setphone]=useState(mobileNumber);
//     const[stateemail,setemail]=useState(email);
//     useEffect( ()=>{
//         navigation.setOptions({
//         headerLeft: ()=><Commonheaderleft />
        
//       });
//     },[]);
//    const handleopenimage = () => {
//     setModal(!modal);
//    };
//    const handleEditimage = () => {
//     setModalchoose(true);
//    };
//   const handlepickfromgallery = () =>{
//     ImagePicker.openPicker({
//       width: 300,
//       height: 400,
//       cropping: true
//     }).then(image => {
//      // setprofileImage(image.path)
//      setuserImage(image.path)
//      setModalchoose(false);
//       //console.log(image);
    
//     })
//     .catch(err =>{
//       console.log(err);
//     });
//    };

//    const handlefromcamera = () =>{
//      ImagePicker.openCamera({
//       width: 300,
//       height: 400,
//       cropping: true,
//     }).then(image => {
//       setModalchoose(false);
//       console.log(image);
//     })
//     .catch(err =>{
//       console.log(err);
//     });
//    };
//   const handleUpdateProfile = async() => {
//    if(validatePhoneNumber(phone.trim())){
//       if (validateEmail(stateemail.trim())){
//         if(fname !== '' && lname !== ''){
//          let newUrl = profileImage;
//          if(userImage !== ''){
//          newUrl = await updateprofileImage(userImage);
//          }
//          //console.warn('newUrl',newUrl);
//           await firestore()
//             .collection('users')
//             .doc(userId)
//             .update({
//               firstName:fname,
//               lastName:lname,
//               email:stateemail,
//               mobilenumber:phone,
//               profileImage:newUrl,
              
//             }) .then(()=>{
//               dispatch(updateprofile({
//                 firstName:fname,
//                 lastName:lname,
//                 email:stateemail,
//                 mobilenumber:phone,
//                 profileImage:newUrl,
//               }),
//               );
//               console.log(lname);
//               setuserImage('');
//               Snackbar.show({
//                 text: 'profile is updated',
//                 duration: Snackbar.LENGTH_SHORT,
//                 backgroundColor: 'green',
//                 textColor: 'white',
//                 });
//               });
//           } else {
//         Snackbar.show({
//         text: 'Given phone number is not valid',
//         duration: Snackbar.LENGTH_SHORT,
//         backgroundColor: 'red',
//        textColor: 'white',
//         });
//       }
//      } else{
//       Snackbar.show({
//         text: 'Given email is not valid',
//         duration: Snackbar.LENGTH_SHORT,
//         backgroundColor: 'red',
//         textColor: 'white',
//       });
//      }
//    }
//    } ;
// return (
// <ScrollView
//      showsVerticalScrollIndicator={false}
//      style={responsivestyle.container}> 
// <Text style={responsivestyle.head}>{firstName} {lastName}</Text>
// <View style={responsivestyle.userimage}>
//     <TouchableOpacity onPress={handleopenimage}>
//     <Image 
//     style={responsivestyle.image}
//     source={userImage === ''
//       ? profileImage === ''
//       ? require('../../assets/images/profile-pic.png')
//       : {uri: profileImage}
//       : {uri: userImage}
//     }
//       />
//      </TouchableOpacity>
//     <TouchableOpacity style={responsivestyle.edittouch} onPress={handleEditimage}>
//     <Image 
//      source={require('../../assets/images/edit-green.png')}
//         style={responsivestyle.edit}/>
//         </TouchableOpacity>
//  </View>
//  <CustomTextinput
//      handleText={text=>setfname(text)}
//      value={fname}
//      placeholder='FirstName'
//  />
//   <CustomTextinput
//      handleText={text=>setlname(text)}
//      value={lname}
//      placeholder='LastName' />

// <CustomTextinput
//     type='email'
//     handleText={text=>setemail(text)}
//      value={stateemail}
//      placeholder='Email Address' />
// <CustomTextinput
//      handleText={text=>setphone(text)}
//      value={phone}
//      placeholder='Mobile Number' />
// <CustomBotton
//      //type='primary'
//      handleButtonPress={handleUpdateProfile}
//      buttonText={'update profile'}       />

// <Modal visible={modal} onRequestClose={() => setModal(false)} >
//   <View style={responsivestyle.modalback}>
//     <TouchableOpacity
//         onPress={() => setModal(false)}
//         style={responsivestyle.close}>
//     <Image 
//      source={require('../../assets/images/close.png')}
//         style={responsivestyle.edit}/>
//     </TouchableOpacity>
   
//     <Image style={responsivestyle.bigimage}
//       source={profileImage === ''
//       ? require('../../assets/images/profile-pic.png')
//       //: {uri: `file://${profileImage}`}}
//       : {uri: userImage}
//     }
  
//     />
//   </View>
// </Modal>

// <Modal visible={modalChoose} onRequestClose={() => setModalchoose(false)} transparent>
//   <View style={responsivestyle.modalback}>
//     <View style={responsivestyle.selectbox}>
//       <TouchableOpacity
//         onPress={() => setModalchoose(false)}
//         style={responsivestyle.closechoose}>
//         <Image 
//            source={require('../../assets/images/close.png')}
//            style={responsivestyle.edit}/>
//       </TouchableOpacity>

//       <TouchableOpacity
//        style={responsivestyle.touch} 
//        onPress={handlepickfromgallery}>
//       <Text style={responsivestyle.picktext}>Gallery</Text>
//       </TouchableOpacity>
//       <TouchableOpacity 
//       style={responsivestyle.touch}
//       onPress={handlefromcamera}>
//       <Text style={responsivestyle.picktext}>Camera</Text>
//       </TouchableOpacity>
//     </View>
//   </View>
// </Modal>

// </ScrollView>
//  );
//  };
// export default Account;
// /*
// import {useEffect, useState} from 'react';
// import {
//   Image,
//   Modal,
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import style from './style';
// import {useNavigation} from '@react-navigation/native';
// import ImagePicker from 'react-native-image-crop-picker';
// import Snackbar from 'react-native-snackbar';
// import firestore from '@react-native-firebase/firestore';
// import Commonheaderleft from '../../components/Commonheaderleft';
// import {useDimensionContext} from '../../context';
// import CustomTextinput from '../../components/CustomTextinput';
// import CustomButton from '../../components/CustomButton';
// import colors from '../../components/common/colors';
// import {
//   validateEmail,
//   validatePhoneNumber,
// } from '../../components/common/validations';
// import {useDispatch, useSelector} from 'react-redux';
// import {updateProfile} from '../../storage/action';
// import {updateProfileImage} from './controller';

// const Account = () => {
//   const navigation = useNavigation();
//   const dimensions = useDimensionContext();
//   const responsiveStyle = style(
//     dimensions.windowWidth,
//     dimensions.windowHeight,
//     dimensions.isPortrait,
//   );
//   const {userId, firstName, lastName, email, mobileNumber, profileImage} =
//     useSelector(state => state);

//   const dispatch = useDispatch();

//   const [fName, setFName] = useState(firstName);
//   const [lName, setLName] = useState(lastName);
//   const [phone, setPhone] = useState(mobileNumber);
//   const [modal, setModal] = useState(false);
//   const [modalChoose, setModalChoose] = useState(false);
//   const [userImage, setUserImage] = useState('');
//   const [StateEmail, setEmail] = useState(email)
// ;

//   useEffect(() => {
//     navigation.setOptions({
//       headerLeft: () => <Commonheaderleft />,
//     });
//   }, []);

//   const handleOpenImage = () => {
//     setModal(!modal);
//   };
//   const handleEditImage = () => {
//     setModalChoose(true);
//   };

//   const handlePickFromGallery = () => {
//     ImagePicker.openPicker({
//       width: 300,
//       height: 400,
//       cropping: true,
//     })
//       .then(image => {
//         setUserImage(image.sourceURL ?? '');
//         setModalChoose(false);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   const handleFromCamera = () => {
//     ImagePicker.openCamera({
//       width: 300,
//       height: 400,
//       cropping: true,
//     })
//       .then(image => {
//         setModalChoose(false);
//         console.log(image);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   const handleUpdateProfile = async () => {
//     if (validatePhoneNumber(phone.trim())) {
//       if (validateEmail(StateEmail.trim())) {
//         if (fName !== '' && lName !== '') {
//           let newUrl = profileImage;
//           if (userImage !== '') {
//             newUrl = await updateProfileImage(userImage);
//           }
//           await firestore()
//             .collection('Users')
//             .doc(userId)
//             .update({
//               firstName: fName,
//               lastName: lName,
//               email: StateEmail,
//               mobilenumber: phone,
//               profileimage: newUrl,
//             })
//             .then(() => {
//               dispatch(
//                 updateProfile({
//                   firstName: fName,
//                   lastName: lName,
//                   email: StateEmail,
//                   mobileNumber: phone,
//                   profileImage: newUrl,
//                 }),
//               );
//               setUserImage('');
//               Snackbar.show({
//                 text: 'Profile is updated',
//                 duration: Snackbar.LENGTH_SHORT,
//                 backgroundColor: colors.primaryGreen,
//                 textColor: colors.white,
//               });
//             });
//         } else {
//           Snackbar.show({
//             text: 'Fill up the all fields to continue',
//             duration: Snackbar.LENGTH_SHORT,
//             backgroundColor: colors.red,
//             textColor: colors.white,
//           });
//         }
//       } else {
//         Snackbar.show({
//           text: 'Given email address is not valid',
//           duration: Snackbar.LENGTH_SHORT,
//           backgroundColor: colors.red,
//           textColor: colors.white,
//         });
//       }
//     } else {
//       Snackbar.show({
//         text: 'Given phone number is not valid',
//         duration: Snackbar.LENGTH_SHORT,
//         backgroundColor: colors.red,
//         textColor: colors.white,
//       });
//     }
//   };

//   return (
//     <ScrollView
//       showsVerticalScrollIndicator={false}
//       style={responsiveStyle.container}>
//       <Text style={responsiveStyle.head}>
//         {firstName} {lastName}
//       </Text>
//       <View style={responsiveStyle.userImage}>
//         <TouchableOpacity onPress={handleOpenImage}>
//           <Image
//             style={responsiveStyle.image}
//             source={
//               userImage === ''
//                 ? profileImage === ''
//                   ? require('../../assets/images/profile-pic.png')
//                   : {uri: profileImage}
//                 : {uri: userImage}
//             }
//           />
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={responsiveStyle.editTouch}
//           onPress={handleEditImage}>
//           <Image
//             source={require('../../assets/images/edit-green.png')}
//             style={responsiveStyle.edit}
//           />
//         </TouchableOpacity>
//       </View>

//       <CustomTextinput
//         handleText={text => setFName(text)}
//         value={fName}
//         placeholder="First Name"
//       />
//       <CustomTextinput
//         handleText={text => setLName(text)}
//         value={lName}
//         placeholder="Last Name"
//       />
//       <CustomTextinput
//         type="email"
//         handleText={text => setEmail(text)}
//         value={StateEmail}
//         placeholder="Email Address"
//       />
//       <CustomTextinput
//         handleText={text => setPhone(text)}
//         value={phone}
//         placeholder="Mobile Number"
//       />

//       <CustomButton
//         type="primary"
//         handleButtonPress={handleUpdateProfile}
//         buttonText={'Update Profile'}
//       />

//       <Modal visible={modal} onRequestClose={() => setModal(false)} transparent>
//         <View style={responsiveStyle.modalBack}>
//           <View>
//             <TouchableOpacity
//               onPress={() => setModal(false)}
//               style={responsiveStyle.close}>
//               <Image
//                 source={require('../../assets/images/close.png')}
//                 style={responsiveStyle.edit}
//               />
//             </TouchableOpacity>
//             <Image
//               style={responsiveStyle.bigImage}
//               source={
//                 userImage === ''
//                   ? require('../../assets/images/profile-pic.png')
//                   : {uri: userImage}
//               }
//             />
//           </View>
//         </View>
//       </Modal>

//       <Modal
//         visible={modalChoose}
//         onRequestClose={() => setModalChoose(false)}
//         transparent>
//         <View style={responsiveStyle.modalBack}>
//           <View style={responsiveStyle.selectBox}>
//             <TouchableOpacity
//               onPress={() => setModalChoose(false)}
//               style={responsiveStyle.closeChoose}>
//               <Image
//                 source={require('../../assets/images/close.png')}
//                 style={responsiveStyle.edit}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={responsiveStyle.touch}
//               onPress={handlePickFromGallery}>
//               <Text style={responsiveStyle.pickText}>Gallery</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={responsiveStyle.touch}
//               onPress={handleFromCamera}>
//               <Text style={responsiveStyle.pickText}>Camera</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </ScrollView>
//   );
// };

// export default Account;

// */