import React, { useEffect, useState } from "react";
import { View ,Text,Image,TouchableOpacity} from "react-native";
import style from "./style";
import { useDimensionContext } from "../../context";
import { FlatList} from "react-native-gesture-handler";
import CommonSectionHeader from "../CommonSectionHeader";
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { updateCartCount } from "../../storage/action";

const Offerproducts =() =>{
  const navigation =useNavigation();
  const dimensions = useDimensionContext();
  const responsivestyle=style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    );
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

   /* const products1 =[
        {
        id:0,
        name:'Lemon',
        content:'fresh lemon direct free fare',
        price:10,
        image:require('../../assets/images/lemon.png'),
        off:'20%',
        },
        {
        id:1,
        name:'Computer chair',
        content:'comfortable chair',
        price:3000,
        image:require('../../assets/images/lemon.png'),
        off:'20%',
          },
        {
        id:2,
        name:'Sony TV',
        content:'Experience new era of television',
        price:20000,
        image:require('../../assets/images/lemon.png'),
        off:'20%',
        },
        {
        id:3,
        name:'Lemon',
        content:'fresh lemon direct free fare',
        price:10,
        image:require('../../assets/images/lemon.png'),
        off:'20%',
        },
        {
        id:4,
        name:'Lemon',
        content:'fresh lemon direct free fare',
        price:10,
        image:require('../../assets/images/lemon.png'),
        off:'20%',
        },  instead we used uri:item.image
        ]*/
return (
  <View  style={responsivestyle.container}>
  <CommonSectionHeader head={'say hello to offers'} 
   content={'Best price ever for all the time'}
   Text={'See All'} />
  <View>
    <FlatList
       data={products}
       showsVerticalScrollIndicator={false}
       keyExtractor={(item,index)=> String(index)}
       renderItem={({item,index})=>(
        <RenderItem item={item} index={index} />
)}
/>
   </View>
</View>
 );
 };
 
 const RenderItem = ({item,index}) => {
  const navigation = useNavigation();
  const dimensions = useDimensionContext();
  const responsivestyle=style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    );
  const cartCount = useSelector((state) => state.cartCount);
  const userId = useSelector((state) => state.userId);
  const [qun,setQun] = useState(0);
  const dispatch=useDispatch();
  const handleProduct = () => {
    navigation.navigate('Productdetails',{product:item});
   }

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
          dispatch(updateCartCount(cartCount + 1));

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
  return(
    <TouchableOpacity onPress={() => handleProduct(item)}
    style={responsivestyle.productview}>
     <Image source={{uri:item.image}}
     style={responsivestyle.productimage}
     />
     <View style={responsivestyle.nameview}>
<Text style={responsivestyle.name} numberOfLines={2}>{item.name}</Text>
<Text style={responsivestyle.des} numberOfLines={2}>{item.description}</Text>
     <View style={responsivestyle.priceview}>
     <View style={responsivestyle.priceview2}>
         <Text style={responsivestyle.price}>₹ {item.price}</Text>
         <View style={responsivestyle.offview}>
         <Text style={responsivestyle.offtext}>
                 10%
         </Text>
         </View>
             </View>
             <View style={responsivestyle.qunview}>
              <TouchableOpacity onPress={() => {
                setQun(qun <= 0 ? qun : qun - 1 );
              }}>
                 <Text style={responsivestyle.quntext1}>-</Text>
              </TouchableOpacity>
              
                 <Text style={responsivestyle.quntext2}>{qun}</Text>
              <TouchableOpacity 
                  onPress={() => {
                    setQun(qun + 1);
                    addToCart(item);
                   }}> 
                 <Text style={responsivestyle.quntext2}>+</Text>
               </TouchableOpacity>
             </View>
             </View>
             </View>
 </TouchableOpacity>
  )
 }
 export default Offerproducts;

