import React, { useEffect, useState } from "react";
import { Text, View , Image} from "react-native";
import style from "./style";
import { useDimensionContext } from "../../context";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Commonheaderleft from "../../components/Commonheaderleft";
import { useDispatch, useSelector } from "react-redux";
import firestore from "@react-native-firebase/firestore";
import { updateCartCount } from "../../storage/action";
import Commonheaderright from "../../components/Commonheaderright";

const Wishlist=() =>{
  const navigation=useNavigation();
  const cartCount = useSelector(state => state.cartCount);
  const userId = useSelector((state) => state.userId);
  const dimension=useDimensionContext();
  const responsivestyle=style(
    dimension.windowWidth,
    dimension.windowHeight,
        );
  const dispatch=useDispatch();
  const [wishitems,setwishitems] = useState([]);
  const isFocussed = useIsFocused();
  useEffect(()=>{
    getwishlist();
  },[isFocussed]);
 
  useEffect(() => {
    navigation.setOptions({
    headerRight : () => <Commonheaderright cart={true} />,
    headerLeft: () => <Commonheaderleft />,
                });
        },[] );
        
   const getwishlist = async () => {
     await firestore()
     .collection('wishlist')
     .where ('userId', '==' , userId)
     .get()
     .then(snapshot => {
      if(snapshot.empty){
       setwishitems([]);
       }else{
       const objarray =[];
       snapshot?.docs.forEach(document => {
       const result = {id:document.id, ...document?.data()}; 
       objarray.push(result);
        });
       setwishitems(objarray);
         }
          });
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
    const removeitem =async removeitem =>{
        await firestore()
        .collection('wishlist')
        .doc(removeitem.id)
        .delete()
        .then(() => {
         const filteredwishlist = wishitems.filter(
        ele => ele.id !== removeitem.id,
        );
        setwishitems(filteredwishlist);
        });
    }
    const navigatetoshop = () => {
        navigation.navigate('Shop',{type:'all'});
    }
return (
<View style={responsivestyle.container}> 
<ScrollView>
<FlatList 
   data={wishitems}
   showsVerticalScrollIndicator={false}
   ListEmptyComponent={()=>{
    return (
    <View style={{padding:15,
                  justifyContent:'center',
                  alignItems:'center' }}>
    <Text style={{fontSize:18,color:'green'}}>your wishlist is empty</Text>
    <TouchableOpacity style={{padding:15}} onPress={navigatetoshop}>
    <Text style={{fontSize:16,color:'black'}}>Go To Shop</Text>
    </TouchableOpacity>
    </View>
    );
   }}
   renderItem={({item,index,itemtoadd}) => {
    return(
<View style={responsivestyle.productview}>
     <Image source={{uri:item.image}}
         style={responsivestyle.productimage}/>
    <View style={responsivestyle.secondview}>
        <Text style={responsivestyle.title}>{item.name}</Text>
        
        <Text style={responsivestyle.desc}>{item.description}</Text>
        <View style={responsivestyle.bottomview}>
            <Text style={responsivestyle.price}>₹{item.price}</Text>
    <TouchableOpacity onPress={()=>addToCart(item)} style={responsivestyle.cartview}>
        <Text style={responsivestyle.carttext}>Add To Cart</Text>
    </TouchableOpacity>
        </View>
    </View>
    <TouchableOpacity onPress={() =>removeitem(item)} style={responsivestyle.removeview}>
        <Image source={require('../../assets/images/delete-white.png')}
         style={responsivestyle.remove}/>
    </TouchableOpacity>
</View>
    );
}} />

</ScrollView>
</View>
 );
 };
export default Wishlist;

