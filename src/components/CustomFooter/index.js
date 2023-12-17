import React, { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import { useDimensionContext } from "../../context";
import { useDispatch, useSelector } from "react-redux";
import firestore from '@react-native-firebase/firestore';
import { updateCartCount } from "../../storage/action";

 const CustomFooter=({state,descriptors,navigation}) =>{
    const dimensions = useDimensionContext();
    const responsivestyle=style(
        dimensions.windowWidth,
        dimensions.windowHeight,
        dimensions.isportrait,
    );
    const userId = useSelector(state => state.userId);
    const cartCount = useSelector(state => state.cartCount);

    const dispatch = useDispatch();
    useEffect(() => {
       getCartProducts();
        }, []);
      
    const getCartProducts = async () => {
        await firestore()
          .collection('cart')
          .where('userId', '==', userId)
          .get()
          .then(snapshot => {
            dispatch(updateCartCount(snapshot.size));
          })
          .catch(err => {
            console.log(err);
           });
      };
    
 return (
<View  
    style={responsivestyle.mainContainer}>
    {state.routes.map((route,index) => {
        const isFoccused = state.index ===index;
        const icon= route.name==='Home'
        ? require('../../assets/images/home-white.png')
        :  route.name ==='Categories'
        ? require('../../assets/images/category-white.png')
        : route.name === 'Search'
        ? require('../../assets/images/search.png')
        :route.name === 'Offers'
        ? require('../../assets/images/offers.png')
        : require('../../assets/images/cart.png')
        return(
            <TouchableOpacity 
            key={index}
            onPress={() => navigation.navigate(route.name)}
            style={responsivestyle.touchContainer}>
             {isFoccused ? <Text style={responsivestyle.dot}>.</Text>
             :null}
             {route.name === 'cart' ? (
                <View style={responsivestyle.cartcount}>
                    <Text style={responsivestyle.count}>
                        {cartCount}
                    </Text>
                </View>
             ): null} 
            <Image source={icon}
            style={responsivestyle.iconStyle} />
            <Text style={responsivestyle.footerText}>{route.name}
            </Text>
             </TouchableOpacity>
        )
        
    })}




</View>
);
 };
export default CustomFooter;

