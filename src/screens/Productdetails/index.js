{/*import {useEffect, useRef, useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {useDimensionContext} from '../../context';
import style from './style';
import {useNavigation, useRoute} from '@react-navigation/native';
import Commonheaderleft from '../../components/Commonheaderleft';
import Commonheaderright from '../../components/Commonheaderright';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import StarRating from 'react-native-star-rating-widget';
import colors from '../../components/common/colors';
import Moreinfo from './components/Moreinfo';
import Extrainfo from './components/Extrainfo';
import ProductReview from './components/ProductReview';
import Deliveryinfo from './components/Deliveryinfo';
import Productscroll from '../../components/Productscroll';
import firestore from '@react-native-firebase/firestore';
//import {updateCartCount} from '../../../storage/action';
import {useDispatch, useSelector} from 'react-redux';

const ProductDetails = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const route = useRoute();
  const navigation = useNavigation();
  const [rating, setRating] = useState(5);
  const scrollRef = useRef(null);
  const {product} = route.params;
  const [productDetailsObj, setProductDetails] = useState({});
  const [qun, setQun] = useState(1);
  const {userId, cartCount} = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Commonheaderleft type="back" />,
      headerRight: () => <Commonheaderright cart={true} share={true} />,
      title: '',
    });
  }, []);

  useEffect(() => {
    setProductDetails(product);
  }, [product]);

  const navigationNeeded = (val, item) => {
    if (val) {
      scrollRef.current.scrollTo({x: 0, y: 0, animated: true});
      setProductDetails(item);
    }
  };

  const handleQuantity = type => {
    if (type === 'plus') {
      setQun(qun + 1);
    } else {
      if (qun === 1) {
        return;
      } else {
        setQun(qun - 1);
      }
    }
  };

  const handleAddToCart = async () => {
    await firestore()
      .collection('Cart')
      .where('userId', '==', userId)
      .where('productId', '==', productDetailsObj.id)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          firestore().collection('Cart').add({
            created: Date.now(),
            description: productDetailsObj.description,
            name: productDetailsObj.name,
            price: productDetailsObj.price,
            quantity: qun,
            userId: userId,
            productId: productDetailsObj.id,
            image: productDetailsObj.image,
          });
        //  dispatch(updateCartCount(cartCount + 1));
        } else {
          firestore()
            .collection('Cart')
            .doc(snapshot?.docs[0].id)
            .update({
              quantity: parseInt(snapshot?.docs[0].data().quantity, 10) + qun,
            });
        }
      });
  };

  return (
    <View>
      <ScrollView ref={scrollRef}>
        <View style={responsiveStyle.heart}>
        { // {/* <Ionicons name="heart-outline" size={50} color={colors.red} /> }
          <Ionicons name="heart-sharp" size={50} color={colors.red} />
        </View>
        <Image
          source={{uri: productDetailsObj?.image}}
          style={responsiveStyle.proimage}
        />
        <View style={responsiveStyle.mainview}>
          <View style={responsiveStyle.padding}>
            <Text style={responsiveStyle.name}>{productDetailsObj?.name}</Text>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <StarRating rating={rating} onChange={setRating} />
              <Text
                style={{
                  color: colors.gery,
                  marginLeft: 10,
                  fontFamily: 'Lato-Regular',
                  fontSize: 18,
                }}>
                (1 rating)
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={responsiveStyle.price}>
                ₹{parseFloat(productDetailsObj?.price).toFixed(2)}
              </Text>
              <Text
                style={{
                  color: colors.primaryGreen,
                  marginLeft: 10,
                  fontFamily: 'Lato-Bold',
                  fontSize: 18,
                }}>
                25% off
              </Text>
            </View>
            <Moreinfo />
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: colors.gery,
                paddingVertical: 10,
              }}>
              <Text style={responsiveStyle.descriptionhead}>
                Product Details
              </Text>
              <Text style={responsiveStyle.description}>
                {productDetailsObj?.description}
              </Text>
            </View>
            <Extrainfo />
            <ProductReview product={product} />
            <Deliveryinfo />
          </View>
          <Productscroll ={navigationNeeded} />
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 25,
          alignSelf: 'center',
          padding: 15,
          borderRadius: 8,
          backgroundColor: colors.primaryGreen,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          width: '95%',
        }}>
        <View
          style={{
            padding: 10,
            borderRadius: 8,
            backgroundColor: colors.white,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => handleQuantity('minus')}>
            <AntDesign name="minus" size={20} color={colors.primaryGreen} />
          </TouchableOpacity>
          <Text
            style={{
              color: colors.primaryGreen,
              fontFamily: 'Lato-Black',
              fontSize: 20,
              marginHorizontal: 15,
            }}>
            {qun}
          </Text>
          <TouchableOpacity onPress={() => handleQuantity('plus')}>
            <AntDesign name="plus" size={20} color={colors.primaryGreen} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleAddToCart}>
          <Text
            style={{
              color: colors.white,
              fontFamily: 'Lato-Black',
              fontSize: 18,
            }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails

*/}
import { View,Text ,Image} from "react-native"
import { useDimensionContext } from "../../context";
import style from "./style";
import { useNavigation, useRoute} from "@react-navigation/native";
import { useEffect,useState } from "react";
import Commonheaderleft from "../../components/Commonheaderleft";
import Commonheaderright from "../../components/Commonheaderright";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import StarRating from 'react-native-star-rating-widget';
import ProductReview from "./components/ProductReview";
import Extrainfo from "./components/Extrainfo";
import Moreinfo from "./components/Moreinfo";
import Deliveryinfo from "./components/Deliveryinfo";
import Productscroll from "../../components/Productscroll";
import React, { useRef } from 'react';
import firestore from "@react-native-firebase/firestore";
import { updateCartCount, updatewishids } from "../../storage/action";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "react-native-snackbar";

const Productdetails = () => {
 const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isportrait,
  );
   const route = useRoute();
  const navigation =useNavigation();
  const [rating,setRating] = useState(0);
  const [count,setcount] = useState(1)
  const {product} = route.params;
  const [productDetailsobj,setproductDetails] = useState({});
  const userId = useSelector((state) => state.userId);
  const cartCount = useSelector((state) => state.cartCount);
  const wishIds = useSelector((state) => state.wishIds);
  const dispatch = useDispatch();
  useEffect(() => {
     navigation.setOptions({
       headerLeft: () => <Commonheaderleft type="back"  />,
       headerRight: () => <Commonheaderright cart={true} share={true}/>,
       title: '',
       });
       }, []);
  useEffect(() => {
     setproductDetails(product);
     },[product]);
 const scrollRef = useRef(null);
 const navigationNeeded = (val,item) =>{
  if(val) {
    scrollRef.current.scrollToIndex({x: 0, y: 0,animated: true});
    setproductDetails(item);
    }
   };

  const handlecountclick = type => {
   if (type==='plus')
   {
     setcount(count + 1);
   }else{
    if(count === 1){
      return;
    }else{
     setcount(count - 1);
   }
  }
}

 const handleaddtoCart = async() =>{
  await firestore()
  .collection("cart")
  .where("userId", "==", userId)
  .where("productId", "==", productDetailsobj.id)
  .get()
  .then((snapshot) => {
    if (snapshot.empty) {
      firestore().collection("cart").add({
        created: Date.now(),
        description: productDetailsobj.description,
        name: productDetailsobj.name,
        price: productDetailsobj.price,
        quantity: count,
        userId: userId,
        productId: productDetailsobj.id,
        image: productDetailsobj.image,
      });
      dispatch(updateCartCount(cartCount + 1));
    } else {
      firestore()
        .collection("cart")
        .doc(snapshot?.docs[0].id)
        .update({
          quantity: parseInt(snapshot?.docs[0].data().quantity, 10) + count,
        });
    }
  });
   }
   const addtowishlist = Productdetails => {
    //console.warn(Productdetails);
    firestore()
    .collection('wishlist')
    .where('userId','==',userId)
    .where('productId','==',Productdetails.id)
    .get()
    .then(snapshot => {
      if(snapshot.empty){
        firestore()
        .collection("wishlist")
        .add({
          created: Date.now(),
          updated: Date.now(),
          description: Productdetails.description,
          name: Productdetails.name,
          price: Productdetails.price,
          userId: userId,
          productId: Productdetails.id,
          image: Productdetails.image,
          categoryid:Productdetails.categoryid
        }).then[resp => {
          dispatch(updatewishids(...wishIds,Productdetails.id));

          Snackbar.show({
            text: 'item added to wishlist',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: 'lightgreen',
            textColor: 'white',
            });
        }];
      }else{
        Snackbar.show({
          text: 'item is in your wishlist',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: 'lightgreen',
          textColor: 'white',
          });
      }
    })
    
  };
   
 return(
    <View>
   <ScrollView ref={scrollRef}>
    <View style={responsiveStyle.heart}>
    <TouchableOpacity onPress={() => addtowishlist(productDetailsobj)}>
  <Image
    source={
      wishIds.includes(productDetailsobj.id)
      ? require('../../assets/images/wishRed.png')
      : require('../../assets/images/wishlist.png')}
    style={{
      width: 40,
      height: 40,
      resizeMode: 'contain',
      alignSelf: 'flex-end',
      marginRight:15,
    }}
  />
  </TouchableOpacity>

    </View>
    <View>   
   <Image source={{uri:productDetailsobj?.image}} style={responsiveStyle.proimage} /></View>

    <View style={responsiveStyle.mainview}>
    <View style={responsiveStyle.padding}>
    <Text style={responsiveStyle.name}>{productDetailsobj?.name}</Text>
    <View>
       <StarRating
            rating={rating}
          //  onChange={setRating}
            onChange={() => {}}
        />
    <Text style={{
                    color:'gray',
                     marginLeft:10,
                     fontSize:18,
                     }}>(1 rating)</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={responsiveStyle.price}>₹{parseFloat(productDetailsobj?.price).toFixed(2)}</Text>
          <Text style={{
                    color:'green',
                     marginLeft:10,
                     fontSize:18,
                     }}>25% OFF</Text>
    </View>
<Moreinfo />

    <View style={{
              borderBottomWidth:1,
              borderBottomColor:'black',
              paddingBottom:20,
                }}>
          <Text style={responsiveStyle.descriptionhead}>product Details</Text>
          <Text style={responsiveStyle.description}>{productDetailsobj?.description}</Text>
    </View>
    <Extrainfo />
    <ProductReview />
    <Deliveryinfo />
    </View>
    <Productscroll  isNavigationNeeded = {navigationNeeded}/>
    </View>

 </ScrollView>

<View style={{position:'absolute',
              bottom:1,
              alignItems:'center',
              padding:15,
              borderRadius:10,
              backgroundColor:"lightgreen",
              justifyContent:"space-between",
              flexDirection:'row',
              alignItems:'center',
              width:'100%'
            }}>
<View style={{padding:18,
              borderRadius:8,
              backgroundColor:"white",
              justifyContent:'center',
              flexDirection:'row',
              alignItems:'center',
              marginRight:1
            }}>
<TouchableOpacity onPress={ () => handlecountclick('minus')}>
<Text style={{color:'green',
              fontSize:18,
              marginHorizontal:8
              }}>
<AntDesign name="minus" size={19} color='black'  />
</Text>
</TouchableOpacity>

<Text style={{color:'green',
              fontSize:20,
              marginHorizontal:8
              }}>
{count}</Text>

<TouchableOpacity onPress={() => handlecountclick('plus')}>
<Text style={{color:'green',
             fontSize:18,
             marginHorizontal:8}}>
<AntDesign name="plus" size={19} color='black'  />          
</Text>
</TouchableOpacity>

</View>
<TouchableOpacity onPress={handleaddtoCart} style={{color:"red",fontSize:18}}>
  <Text style={{fontSize:19,}}>Add to cart</Text></TouchableOpacity>
</View>
</View>
    );
};
export default Productdetails;