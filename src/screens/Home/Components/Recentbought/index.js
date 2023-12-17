import { View,Text, Image, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useDimensionContext } from "../../../../context";
import style from "./style";
import { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";

const Recentbought =  () => {
    const dimensions=useDimensionContext();
    const responsivestyle=style(
        dimensions.windowWidth,
        dimensions.windowHeight,
        );
   const navigation =useNavigation();
   const [recentItems,setRecentItem] = useState([]);
 useEffect(()=> {
   getproducts();
    },[]);
const getproducts = async (item) => {
    await firestore()
    .collection("products")
    .get()
    .then((snapshot) => {
    if (!snapshot.empty) {
    const result = [];
    snapshot.docs.forEach(doc => {
    if (doc.exists) {
    result.push(doc.data());
     }
      });
      setRecentItem(result);
      }
        })
    .catch((err) => {
      console.log(err);
          });
      };
 /* const recentItems = [
        {id:0,image:require('../../../../assets/images/apple.png')},
        {id:1,image:require('../../../../assets/images/bananas.png')},
        {id:2,image:require('../../../../assets/images/grapes.png')},
        {id:3,image:require('../../../../assets/images/lemon.png')},
        {id:4,image:require('../../../../assets/images/strawberry.png')}
    ];*/
   
  const handleproduct = item => {
       navigation.navigate('Productdetails',{product:item})
   }
 return (
 <View style={responsivestyle.container}>
    <Text style={responsivestyle.head}>Buy from recently bought</Text>
    <FlatList
        horizontal 
        showsHorizontalScrollIndicator={false}
        data={recentItems}
        keyExtractor={(item,index)=> String(index)}
        renderItem={({item,index}) => {
        return (
      <TouchableOpacity 
            onPress={()=>handleproduct(item)}
               style={responsivestyle.contentview}>
            <Image source={{uri:item.image}}
               style={responsivestyle.images}/>
      </TouchableOpacity>
        );
         }}
    />
 </View>
);
};
export default Recentbought;