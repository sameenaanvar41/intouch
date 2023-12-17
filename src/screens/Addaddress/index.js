/*import {Modal ,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import style from "../Login/style";
import { useDimensionContext } from "../../context";
import { useNavigation, useRoute} from "@react-navigation/native";
import Commonheaderleft from "../../components/Commonheaderleft";
import Commonbutton from "../../components/Commonbutton";
import { useEffect, useState } from 'react';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView from "react-native-maps";
import { Marker } from "react-native-svg";
//import Geolocation from "@react-native-community/geolocation";
import { ScrollView } from "react-native-gesture-handler";
//navigator.geolocation = require('@react-native-community/geolocation')
import RazorpayCheckout from 'react-native-razorpay';
import { useSelector } from "react-redux";
import firestore from "@react-native-firebase/firestore";

const Addaddress = () => {
   const dimensions = useDimensionContext();
   const route = useRoute();
   const navigation =useNavigation();
   const {cartProducts} = route.params;
   const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const userId = useSelector(state =>state.userId);
  const firstName = useSelector(state =>state.firstName);
  const lasttName = useSelector(state =>state.lasttName);
  const email = useSelector(state =>state.email);
  const mobilenumber = useSelector(state =>state.mobilenumber);
  const [newposition,setNewPosition] = useState(null);
  const [address,setAddress]=useState(null);
  const [loading,setloading]=useState(false);
 useEffect(() => {
    getcurrentLocation();
    navigation.setOptions({
      headerLeft: () => <Commonheaderleft type={"back"} />,    });
  }, []);
    const getcurrentLocation = () => {
    Geolocation.getCurrentPosition((info)  => {
      setNewPosition({
        latitude: info.coords?.latitude ?? 0,
        longitude: info.coords?.longitude ?? 0,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      });
    });
    Snackbar.show({
      text: "Current location is fetched",
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: colors.primaryGreen,
      textColor: colors.white,
    });
        };
        const handleCreateOrder =async (paymentID) => {
          const smallId = paymentID.slice(4,12);
          await firestore()
          .collection('orders')
          .add({
          orderid: String(smallId).toUpperCase(),
          created: Date.now(),
          updated:Date.now(),
          orderstatus:'ordered',
          totalamount:total,
          address:address,
          userid:userId,
          paymentmethod:'online',
          cartitems:cartProducts,
          username:firstName + ' ' + lasttName,
         // useremail:email,
          userphone:mobilenumber,
          expdeldate:'',
         }) .then(async resp => {
         // console.warn(resp);
          await firestore()
          .collection('cart')
          .where('userId' ,'==',userId)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
            doc.ref.delete().then(() => {
              setloading(false);
              navigation.goBack();
            })
            .catch(err => {
              console.warn(err);
                });
            });
            });
          });
        // setTimeout(() => {
        // setloading(false);
          //},5000);
         // navigation.goBack();
          };
        

  const onButtonPress = () => {
    var options = {
      description: 'inkart products purchase',
      //image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_GR6KU32PwfjvPX', // Your api key
      amount: '5000',
      name: 'inkart',
      prefill: {
        email: email,
        contact: '9191919191',
        name: `${firstName} ${lasttName}`,
      },
      theme: {color: '#F37254'}
    };
    console.log('=======================');
    console.log(options);
    console.log('=======================');
   RazorpayCheckout.open(options)
   .then((data) => {
      // handle success
      setloading(true);
      handleCreateOrder(data.razopay_payment_id);
      // console.log('=======================');
       //console.log(data.razorpay_payment_id);
       //console.log('=======================');

    }).catch((error) => {
      // handle failure
      console.log('=======================');
      console.log(`Error: ${error.code}| $(error.description)`);
      console.log('=======================');
   });
   };
 return (
    <View style={responsiveStyle.container}>
    <Modal
        animationType="fade"
        transparent={true}
        visible={loading}>
        <View style={{height:'100%', width:'100%' , backgroundColor:'rgba(0,0,0,0,4)'
          }}>
          <ActivityIndicator size={'small'} color={'white'} />
        </View>
      </Modal>
     <ScrollView
          showVerticalScrollIndicator={false}>
      <GooglePlacesAutocomplete
        placeholder='Search Location'
        placeholderColor='black'
        currentLocation={true}
        fetchdeatails={true}
        currentLocationLabel="current location"
        query={{
              key:'AIzaSyBxr99617iBz0j-ao6GzTTl_Kq0TuvZwg4',
              language:'en',
        }}
        style= {{TextInput:responsiveStyle.TextInput,
                predefinedPlacesDescription:responsiveStyle.description
                }} 
                onPress={(data,details)=>{
                  const location= data?.geometry?.location ?? details ?.geometry ?.location;
                const positionData = {
                  latitude: location?.lat ?? 0,
                  longitude : location?.log ?? 0,
                  latitude:0.001,
                  longitude:0.001,
                };
                setNewPosition(positionData);
                setAddress(data?.name ?? data ?. description);
                }}
      //  onFail={fail => console.warn('fail',fail)}
      //  onNotfound={notfound => console.warn('not found', notfound)}
        />
     
<MapView
          style={{ width: "100%", height: 300 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
          followsUserLocation={true}
          zoomEnabled={true}
          pitchEnabled={true}
          rotateEnabled={true}
          scrollEnabled={true}
          showsMyLocationButton={true}
        ></MapView>

   {/*    <MapView 
        style={responsiveStyle.mapview}
        initialRegion={newposition}
        region={newposition}
        showsUserLocation={true}
        followsUserLocation={true}
        zoomEnabled={true}
        pitchEnabled={true}
        rotateEnabled={true}
        scrollEnabled={true}
        showsMyLocationButton={true}>
          <Marker 
              title={address}
              description="this is your marker"
              coordinate={newposition}
          />
        </MapView>*//*}
       <TouchableOpacity style={responsiveStyle.touchview}>
          <Text style={responsiveStyle.touchtext}>your current location</Text>
        </TouchableOpacity>
      <Commonbutton
        buttontext={'confirm location $ proceed'}
        onButtonPress={onButtonPress}
      /> 
      </ScrollView>
    </View>
      );
};
export default Addaddress;*/


import { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useDimensionContext } from "../../context";
import style from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import Commonbutton from "../../components/Commonbutton";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Geolocation from "@react-native-community/geolocation";
navigator.geolocation = require("@react-native-community/geolocation");
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MapView, { Marker } from "react-native-maps";
import colors from "../../components/common/colors";
import Snackbar from "react-native-snackbar";
import RazorpayCheckout from "react-native-razorpay";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-native";
import firestore from '@react-native-firebase/firestore';
import Commonheaderleft from "../../components/Commonheaderleft";
import { updateCartCount } from "../../storage/action";

const AddAddress = () => {
  const dimensions = useDimensionContext();
  const route = useRoute();
  const navigation = useNavigation();
  const { cartProducts, total } = route.params;
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait
  );
  const [newPosition, setNewPosition] = useState(null);
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const { userId, firstName, lastName, email, mobileNumber } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  useEffect(() => {
    getCurrentLocation();
    navigation.setOptions({
      headerLeft: () => <Commonheaderleft type={"back"} />,
    });
  }, []);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition((info) => {
      setNewPosition({
        latitude: info.coords?.latitude ?? 0,
        longitude: info.coords?.longitude ?? 0,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      });
    });
    Snackbar.show({
      text: "Current location is fetched",
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: colors.primaryGreen,
      textColor: colors.white,
    });
  };

  const handleCreateOrder = async (paymentID) => {
   const smallId = paymentID.slice(4,12);
   await firestore().collection('orders').add({
    orderId: String(smallId).toUpperCase(),
    created: Date.now(),
    updated: Date.now(),
    orderStatus: 'Ordered',
    totalAmount: total,
    address: address,
    userId: userId,
    paymentMethod: 'online',
    cartItems: cartProducts,
    userName: firstName + ' ' + lastName,
   // userPhone: mobileNumber,
    expDelDate: '',
   })
   .then(async resp => {
    await firestore().collection('cart')
    .where('userId', '==', userId)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        doc.ref.delete().then(() => {
          setLoading(false);
          dispatch(updateCartCount(0));
          Snackbar.show({
            text: "your order is successfully placed",
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: colors.primaryGreen,
            textColor: colors.white,
          });
          setTimeout(()=>{
            navigation.goBack();
          },2000);
          
        }).catch(err => {
          console.warn(err, 'order');
        })
      })
    })
   })
   
  };

  const onButtonPress = () => {
    var options = {
      description: "Inkart Products purchase",
      image: "https://i.imgur.com/3g7nmJC.png",
      currency: "INR",
      key: "rzp_test_CXo5HbmQ83IYL0",
      // amount: String(total, 10) * 100,
      amount : parseInt(total)*100  ,
      name: "Inkart",
      prefill: {
        email: email,
       // contact: mobileNumber,
        name: `${firstName} ${lastName}`,
      },
      theme: { color: "#F37254" },
    };
    RazorpayCheckout.open(options)
      .then((data) => {
        // handle success
        setLoading(true);
        handleCreateOrder(data.razorpay_payment_id);
       
      })
      .catch((error) => {
        // handle failure
        Snackbar.show({
          text: "your order is failed",
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: colors.primaryGreen,
          textColor: 'red',
        });
        navigation.goBack();

      });
  };

  return (
    <View style={responsiveStyle.container}>
      <Modal animationType="slide" transparent={true} visible={loading}>
        <View
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            justifyContent:'center',
            alignItems:'center'
          }}
        >
          <ActivityIndicator size={"small"} color={colors.white} />
        </View>
      </Modal>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
      >
        <GooglePlacesAutocomplete
          placeholder="Search Location"
          currentLocation={true}
          fetchDetails={true}
          currentLocationLabel="Current Location"
          query={{
            key: "rzp_test_GR6KU32PwfjvPX",
            language: "en",
          }}
          styles={{
            textInput: responsiveStyle.textInput,
            predefinedPlacesDescription: responsiveStyle.description,
          }}
          onPress={(data, details) => {
            const location =
              data?.geometry?.location ?? details?.geometry?.location;
            const positionData = {
              latitude: location?.lat ?? 0,
              longitude: location?.lng ?? 0,
              latitudeDelta: 0.001,
              longitudeDelta: 0.001,
            };
            setNewPosition(positionData);
            setAddress(data?.name ?? data?.description);
          }}
        />

        <MapView
          style={{ width: "100%", height: 300 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
          followsUserLocation={true}
          zoomEnabled={true}
          pitchEnabled={true}
          rotateEnabled={true}
          scrollEnabled={true}
          showsMyLocationButton={true}
        ></MapView>
       {/*  <MapView
          style={responsiveStyle.mapView}
          initialRegion={newPosition}
          region={newPosition}
          showsUserLocation={true}
          followsUserLocation={true}
          zoomEnabled={true}
          pitchEnabled={true}
          rotateEnabled={true}
          scrollEnabled={true}
          showsMyLocationButton={true}>
          <Marker
            title={address}
            description="This is your marker"
            coordinate={newPosition}
          />
        </MapView> */}

        {address && (
          <View style={{ padding: 15 }}>
            <Text
              style={{
                color: colors.black,
                fontFamily: "Lato-Regular",
                fontSize: 18,
              }}
            >
              {address}
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={responsiveStyle.TouchView}
          onPress={getCurrentLocation}
        >
          <View style={responsiveStyle.iconView}>
            <FontAwesome name="location-arrow" size={20} color={colors.white} />
          </View>
          <Text style={responsiveStyle.touchText}>Your Current Location</Text>
        </TouchableOpacity>

        <Commonbutton
          buttonText={"Confirm location & Proceed"}
          onButtonPress={onButtonPress}
        />
      </ScrollView>
    </View>
  );
};

export default AddAddress;  