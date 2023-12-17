import { View,Text, Image } from "react-native";
import { useDimensionContext } from "../../../../context";
import style from "./style";
import { FlatList } from "react-native";
import { useEffect, useState } from "react";
import firestore, { firebase } from '@react-native-firebase/firestore';
import { useDispatch } from "react-redux";
import { updateCategories } from "../../../../storage/action";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Shopcategory = () => {
  const dimension= useDimensionContext();
  const responsivestyle=style(
    dimension.windowWidth,
    dimension.windowHeight,
    );
  const [categories,setcategories]=useState([]);
  const dispatch  = useDispatch();
  const navigation = useNavigation();

useEffect(()=>{
   getCategories();
  },[]);

 const getCategories = async () => {
    await  firestore()
      .collection('categories')
      .get()
      .then( snapshot => {
        if(!snapshot.empty){
        const result = [];
            snapshot.docs.forEach(doc => {
               if(doc.exists){
                  result.push(doc.data());
               }
            });
            setcategories(result);
            dispatch(updateCategories(result));
          data={category}

         }
       } )
          .catch(err => {
            console.log(err);
          });
      };
      const handlecategories = (item) => {
          navigation.navigate('Categories',{catIndex:item})
      }
return (
    <View style={responsivestyle.container}>
        <Text style={responsivestyle.head}>Shop by category</Text>
        <FlatList
        data={categories}
       numColumns={4}
        contentContainerStyle={responsivestyle.flatlist}
        keyExtractor={(item,index)=> String(index)}
        renderItem={({item,index})=>{
          const categoriesColor =
            index % 4 === 0
              ? "cyan"
              : index % 4 === 1
              ? "orange"
              : index % 4 === 2
              ? "pink"
              : index % 4 === 3
              ? "green"
              : "yellow";

return (
<TouchableOpacity onPress={()=>handlecategories(index)}
style={responsivestyle.innerview}>
  <View 
    style={[responsivestyle.imageview, {backgroundColor:categoriesColor}]}>
     <Image style={responsivestyle.image}
      source={{uri:item.image}} 
       />
  </View>
  <Text style={responsivestyle.itemname}>
    {item.name}</Text>
  </TouchableOpacity>
        );
  }}
        />
    </View>
);
}
export default Shopcategory;