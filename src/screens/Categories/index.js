import React from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomSearch from "../../components/Customsearch";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { useDimensionContext } from "../../context";
import firestore from '@react-native-firebase/firestore';
import colors from "../../components/common/colors";
import { useSelector } from "react-redux";
import Commonheaderleft from "../../components/Commonheaderleft";

 const Categories=() =>{
    const dimension= useDimensionContext();
    const navigation=useNavigation();
    const route = useRoute();
    const responsivestyle=style(
    dimension.windowWidth,
    dimension.windowHeight,
    );
    const {categories} = useSelector(state => state.categories);
    const[products ,setproducts] = useState([]);
    const[active,setactive]=useState(0);
    const {catIndex = 0} = route.params ?? {};
   
  useEffect ( () => {
    if(catIndex){
      setactive(catIndex);
    }
    },[catIndex]);

    useEffect(() => {
      navigation.setOptions({
      headerLeft: () => <Commonheaderleft />    
         })
      getproducts();
         },[]);
 
  const getproducts = async () => {
      await firestore()
      .collection('products')
      .get()
      .then( snapshot => {
      const result = [];
      snapshot.docs.forEach(doc => {
      if(doc.exists){
        result.push(doc.data());
       }
       });
      setproducts(result);
       })
      .catch(err => {
      console.log(err);
      });
         };

  const  handlecategoryTouch= index=> {
  setactive(index);
  };
return (
 <View style={responsivestyle.main}> 
 <ScrollView
    //options={{ headerShown: false }}
    style={responsivestyle.container}
    nestedScrollEnabled
    showsVerticalScrollIndicator={false}
 >
<CustomSearch />
<View style={responsivestyle.rowstyle}>
    {/*sidebar */}
    <View>
      <FlatList 
          data={categories}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={responsivestyle.catflatstyle}
          renderItem={({item,index}) => {
          return (
          <TouchableOpacity 
            style={[responsivestyle.cattouch,
            {
              backgroundColor : index === active
              ? colors.white : 'transparent',
            },
               ]}
            onPress={() => handlecategoryTouch(index)}>
            <Image source={{uri : item.image}}
            style={responsivestyle.catimage} />
            </TouchableOpacity>
            );
        }}
/>
</View>
    {/* content  */}
<ScrollView showsVerticalScrollIndicator={false}>
   <ImageBackground 
     source={require('../../assets/images/home1bg.jpg')}
     style={responsivestyle.backimage} >
     <Text style={responsivestyle.catname} numberOfLines={1}>
     {categories[active]?.name}</Text>
     <Text style={responsivestyle.catdesc} numberOfLines={3}>
     {categories[active]?.description}</Text>
  </ImageBackground>
  <FlatList 
  data={products}
  numColumns={3}
  showsVerticalScrollIndicator={false}
  contentContainerStyle={responsivestyle.prostyle}
  renderItem={({item,index}) => {
    return(
<View style={responsivestyle.procontainer}>
<View style={responsivestyle.imagebg}>
<Image source={{uri : item.image}}
style={responsivestyle.proimage}
/></View>
<Text style={responsivestyle.proname}>{item.name}</Text>
<Text style={responsivestyle.prodesc}>₹{item.price}</Text>
</View>
    );
  }}
  />
</ScrollView>
</View>
</ScrollView>
</View>
 );
 };
export default Categories;

