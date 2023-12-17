import React, { useEffect, useState } from "react";
import { View ,Text,Image, FlatList,ImageBackground} from "react-native";
import style from "./style";
import { useDimensionContext } from "../../../../context";
import colors from "../../../../components/common/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import firestore, { firebase } from '@react-native-firebase/firestore';

 const Banner =() =>{
  const dimensions = useDimensionContext();
  const responsivestyle=style(

    dimensions.windowWidth,
    dimensions.windowHeight,
    );
    const [bannerItems,setbanneritems] =useState([]); //empty array
    useEffect(()=> {
      getBanners();
   },[]);
   const getBanners = async () => { 
      await firestore()
         .collection('Banners')
          .get()
          .then( snapshot => {
      if(!snapshot.empty){
        // console.log('==========================');
         //console.log('it is empty');
         //console.log('============================');
     // }else{
         const result = [];
         snapshot.docs.forEach(doc => {
            if(doc.exists){
              // console.warn(doc);
               result.push(doc.data());
            }
         } );
         setbanneritems(result);
      }
    } )
       .catch(err => {
        // console.log('==========================');
         console.log(err);
         //console.log('===============================');
       });
   };
  
   
return (
   <View>
<FlatList
data={bannerItems}
horizontal showsHorizontalScrollIndicator={false}
keyExtractor={(item,index)=> String(index)}
renderItem={({item,index}) =>{
    return (
     <ImageBackground source={{uri: item.image}}
        style={responsivestyle.banner} >
        <View style={responsivestyle.innerview}>
            <Text style={responsivestyle.head}>{item.head}</Text>
            <Text style={responsivestyle.content}>{item.description}</Text>
            <TouchableOpacity style={responsivestyle.touch}>
               <Text style={responsivestyle.touchtext}> shop now</Text>
            </TouchableOpacity>
            </View>
            </ImageBackground>
        );
}
}
/>
</View>
 );
 };
export default Banner;

