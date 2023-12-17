import React, { useEffect, useRef } from "react";
import { Text, View ,ScrollView} from "react-native";
import style from "./style";
import CommonHeader from "../../components/CommonHeader";
import Customsearch from "../../components/Customsearch";
import Banner from "./Components/Banner";
import Recentbought from "./Components/Recentbought";
import Shopcategory from "./Components/Shopcategory";
import Productscroll from "../../components/Productscroll";
import Offerproducts from "../../components/Offerproducts";
import firestore from "@react-native-firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { updatewishids } from "../../storage/action";
import { useIsFocused } from "@react-navigation/native";

 const Home =() =>{
   const userId = useSelector(state => state.userId);
   const dispatch = useDispatch();
   const scrollRef = useRef(null);
   const isFocused = useIsFocused();
   useEffect(()=>{
    if (isFocused){
      scrollRef.current.scrollTo({y:0,animated:true});
    }
   },[isFocused]);
   useEffect(()=>{
      getWishids();
   },[]);
   const getWishids= async() => {
      await firestore()
     .collection('wishlist')
     .where ('userId', '==' , userId)
     .get()
     .then(snapshot => {
      if(snapshot.empty){
      // setwishitems([]);
      dispatch(updatewishids([]));
       }else{
       const idarray =[];
       snapshot?.docs.forEach(document => {
       idarray.push(document?.data().productId);
        });
      // setwishitems(objarray);
      dispatch(updatewishids(idarray));
        }
          });
         }
 return (
    <View style={style.main} >
     
 <CommonHeader />
 <ScrollView 
 ref={scrollRef}
    style={style.container}
    nestedScrollEnabled
    showsVerticalScrollIndicator={false}
    >
<Customsearch />
<Banner />
<Recentbought />
<Shopcategory />
<Productscroll />
<Offerproducts />
<Text style={style.foottext}>
 Didnt fint what you are looking for
</Text>
<View style={style.footbutton}>
   <Text style={style.footbuttontext}>Browse category</Text>
</View>
</ScrollView>

</View>
 );
 };
export default Home;

