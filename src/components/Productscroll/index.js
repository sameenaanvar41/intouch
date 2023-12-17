import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useDimensionContext } from "../../context";
import style from "./style";
import { FlatList } from "react-native-gesture-handler";
import colors from "../common/colors";
import CommonSectionHeader from "../CommonSectionHeader";
import firestore from "@react-native-firebase/firestore";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { updateCartCount, updatewishids } from "../../storage/action";
import Snackbar from "react-native-snackbar";
import Productdetails from "../../screens/Productdetails";

const ProductScroll = (props) => {
  const { isNavigationNeeded } = props;
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight
  );
  const navigation = useNavigation();
  const route = useRoute();
  const cartCount = useSelector((state) => state.cartCount);
  const userId = useSelector((state) => state.userId);
  const wishIds = useSelector((state) => state.wishIds);
  const dispatch = useDispatch();
  const [wishlist,setWishlist] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    await firestore()
      .collection("products")
      .get()
      .then((snapshot) => {
        if (!snapshot.empty) {
          const result = [];
          snapshot.docs.forEach((doc) => {
            if (doc.exists) {
              const responseData = { id: doc.id, ...doc?.data() };
              result.push(responseData);
            }
          });
          setProducts(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleProduct = (item) => {
    if (route.name === "Productdetails") {
      isNavigationNeeded(true, item);
    } else {
      navigation.navigate("Productdetails", {
        product: item,
      });
    }
  };

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

const addToCart = async (item) => {
    await firestore()
      .collection("cart")
      .where("userId", "==", userId)
      .where("productId", "==", item.id)
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          firestore().collection("cart").add({
            created: Date.now(),
            description: item.description,
            name: item.name,
            price: item.price,
            quantity: 1,
            userId: userId,
            productId: item.id,
            image: item.image,
          });
          dispatch(updateCartCount(cartCount.size + 1));
        } else {
          firestore()
            .collection("cart")
            .doc(snapshot?.docs[0].id)
            .update({
              quantity: parseInt(snapshot?.docs[0].data().quantity, 10) + 1,
            });
        }
      });
  };

return (
<View  style={responsiveStyle.container}>
  <CommonSectionHeader
       head={'Newly Added'} 
       content={'pay less Get more'}
       rightText={'See All'} />
<View>
    <FlatList
       data={products}
       horizontal
       showsHorizontalScrollIndicator={false}
       keyExtractor={(item,index)=> String(index)}
       renderItem={({item,index}) => {
       return (
 <TouchableOpacity
        onPress={() => handleProduct(item)} 
        style={{
          width: 150,
          height: 239,
          padding:10,
          paddingRight:10,
          marginRight: 10,
          marginVertical: 15,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: colors.primaryGreen,
               }}>
    <View>
 <TouchableOpacity onPress={() => addtowishlist(item)}>
  <Image
    source={
      wishIds.includes(item.id)
      ? require('../../assets/images/wishRed.png')
      : require('../../assets/images/wishlist.png')}
    style={{
      width: 25,
      height: 25,
      resizeMode: 'contain',
      alignSelf: 'flex-end',
    }}
  />
  </TouchableOpacity>
 
 { /* Display Wishlist */}
      <Text>wishlist:</Text>
      {wishlist.map((item) => (
        <Text key={item.id}>{item.name}</Text>
      ))}
   </View>
 <Image
    source={{uri: item.image }}
    style={{
      width: 46,
      height: 45,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginTop: 1,
      marginVertical: 20,
       }}
 />
  <Text style={{ fontSize: 15, color: 'black' }} numberOfLines={2}>
    {item.name}
  </Text>
  <Text style={{ fontSize: 12, color: 'black' }} numberOfLines={2}>
    {item.description}
  </Text>
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 1,
    }}>
    <Text style={{ fontSize: 10, color: 'black' }}>₹{item.price}</Text>
    
    <TouchableOpacity onPress={() => addToCart(item)}
        style={{ padding: 5, backgroundColor: 'lightgreen', borderRadius: 5 }}>
       <Text style={{fontSize: 20, color: colors.white }}>+</Text>
       </TouchableOpacity>
      </View>
    </TouchableOpacity>
    );
      }}
/>
   </View>
</View>

 );
 };
export default ProductScroll;


/*import {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useDimensionContext} from '../../context';
import style from './style';
import {FlatList} from 'react-native-gesture-handler';
import colors from '../common/colors';
import CommonSectionHeader from '../CommonSectionHeader';
import firestore from '@react-native-firebase/firestore';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {updateCartCount, updatewishids} from '../../storage/action';
import Snackbar from 'react-native-snackbar';
import Productdetails from '../../screens/Productdetails';

const Productscroll = props => {
  const {isNavigationNeeded} = props;
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );
  const navigation = useNavigation();
  const route = useRoute();
  const userId = useSelector(state => state.userId);
  const wishIds = useSelector(state => state.wishIds);
  const cartCount = useSelector(state => state.cartCount);
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    await firestore()
      .collection('Products')
      .get()
      .then(snapshot => {
        if (!snapshot.empty) {
          const result = [];
          snapshot.docs.forEach(doc => {
            if (doc.exists) {
              const responseData = {id: doc.id, ...doc?.data()};
              result.push(responseData);
            }
          });
          setProducts(result);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleProduct = item => {
    if (route.name === 'Productdetails') {
      isNavigationNeeded(true, item);
    } else {
      navigation.navigate('Productdetails', {
        product: item,
      });
    }
  };

  const addToCart = async item => {
    await firestore()
      .collection('cart')
      .where('userId', '==', userId)
      .where('productId', '==', item.id)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          firestore().collection('cart').add({
            created: Date.now(),
            description: item.description,
            name: item.name,
            price: item.price,
            quantity: 1,
            userId: userId,
            productId: item.id,
            image: item.image,
          });
          dispatch(updateCartCount(cartCount + 1));
        } else {
          firestore()
            .collection('cart')
            .doc(snapshot?.docs[0].id)
            .update({
              quantity: parseInt(snapshot?.docs[0].data().quantity, 10) + 1,
            });
        }
      });
  };

 /* const addToWishlist = Productdetails => {
    firestore()
      .collection('wishlist')
      .where('userId', '==', userId)
      .where('productId', '==', Productdetails.id)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          firestore()
            .collection('wishlist')
            .add({
              created: Date.now(),
              updated: Date.now(),
              description: Productdetails.description,
              name: Productdetails.name,
              price: Productdetails.price,
              userId: userId,
              image: Productdetails.image,
              categoryID: Productdetails.categoryId,
              productId: Productdetails.id,
            })
            .then(resp => {
              dispatch(updatewishids([...wishIds, Productdetails.id]));
              Snackbar.show({
                text: 'Item added to wishlist',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: colors.primaryGreen,
                textColor: colors.white,
              });
            });
        } else {
          Snackbar.show({
            text: 'Item is in your wishlist',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: colors.primaryGreen,
            textColor: colors.white,
          });
        }
      });
  };*/
/*
  const addToWishlist = Productdetails => {
    firestore()
      .collection('wishlist')
      .where('userId', '==', userId)
      .where('productId', '==', Productdetails.id)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          firestore()
            .collection('wishlist')
            .add({
              created: Date.now(),
              updated: Date.now(),
              description: Productdetails.description,
              name: Productdetails.name,
              price: Productdetails.price,
              userId: userId,
              image: Productdetails.image,
              categoryID: Productdetails.categoryId,
              productId: Productdetails.id,
            })
            .then(resp => {
              dispatch(updatewishids([...wishIds, Productdetails.id]));
              Snackbar.show({
                text: 'Item added to wishlist',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: colors.primaryGreen,
                textColor: colors.white,
              });
            });
        } else {
          Snackbar.show({
            text: 'Item is in your wishlist',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: colors.primaryGreen,
            textColor: colors.white,
          });
        }
      });
  };

  return (
    <View style={responsiveStyle.container}>
      <CommonSectionHeader
        head={'Newly Added'}
        content={'Pay less, Get more.'}
        rightText={'See All'}
      />
      <View>
        <FlatList
          data={products}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => handleProduct(item)}
                style={{
                  width: 150,
                  height: 275,
                  padding: 15,
                  marginRight: 15,
                  marginVertical: 15,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: colors.primaryGreen,
                }}>
                <TouchableOpacity onPress={() => addToWishlist(item)}>
                  <Image
                    source={
                      wishIds.includes(item.id)
                        ? require('../../assets/images/whishRed.png')
                        : require('../../assets/images/wishlist.png')
                    }
                    style={{
                      width: 25,
                      height: 25,
                      resizeMode: 'contain',
                      alignSelf: 'flex-end',
                    }}
                  />
                </TouchableOpacity>
                <Image
                  source={{uri: item.image}}
                  style={{
                    width: 75,
                    height: 75,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                    marginVertical: 10,
                  }}
                />
                <Text
                  style={{fontFamily: 'Lato-Bold', fontSize: 20}}
                  numberOfLines={1}>
                  {item.name}
                </Text>
                <Text
                  style={{fontFamily: 'Lato-Regular', fontSize: 18}}
                  numberOfLines={2}>
                  {item.description}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 15,
                  }}>
                  <Text style={{fontFamily: 'Lato-Regular', fontSize: 20}}>
                    ₹{item.price}
                  </Text>
                  <TouchableOpacity
                    onPress={() => addToCart(item)}
                    style={{
                      padding: 5,
                      backgroundColor: colors.primaryGreen,
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Lato-Bold',
                        fontSize: 20,
                        color: colors.white,
                      }}>
                      +
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Productscroll;*/


