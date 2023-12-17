import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDimensionContext } from "../../context";
import style from "./style";
import Commonheaderleft from "../../components/Commonheaderleft";
import Commonheaderright from "../../components/Commonheaderright";
import Customsearch from "../../components/Customsearch";
import { useSelector } from "react-redux";
import firestore from "@react-native-firebase/firestore";

const Shop = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight
  );
  const navigation = useNavigation();
 const route = useRoute();
 const {type} = route.params;
  const { categories } = useSelector(state => state);
  const [selectedCategory, setSelectedCategory] = useState('');
  const[products ,setproducts] = useState([]);

    useEffect(() => {
        getproducts();
    },[]);
    const getproducts = async () => {
        await firestore()
        .collection('products')
        .get()
        .then( snapshot => {
              const result = [];
              snapshot.docs.forEach(doc => {
              if (doc.exists) {
              const responseData = {id: doc.id, ...doc ?.data()}
              result.push(responseData);
              }    
             });
    setproducts(result);
} )
  .catch(err => {
    console.log(err);
  });
};
  useEffect(()=>{
    if(type==='all'){
    setSelectedCategory['shop'];
    }
  },[type]);

  useEffect(() => {
   // console.warn(categories);
    navigation.setOptions({
      headerLeft: () => <Commonheaderleft type="back"  />,
      headerRight: () => <Commonheaderright cart={true} />,
      title: type ==='all' ? 'shop' : selectedCategory,
     
    });
  }, [selectedCategory]);

 const handleCategories = async (item) => {
    setSelectedCategory(item.name);
    await firestore()
      .collection("Products")
      .where("categoryId", "==", item.id)
      .get()
      .then((snapshot) => {
        if (!snapshot.empty) {
          const result = [];
          snapshot.docs.forEach((doc) => {
            if (doc.exists) {
              const responseData = {id: doc.id, ...doc ?.data()}
              result.push(responseData);
            }
          });
          setproducts(result.length > 0 ? result : []);
        } else {
          setproducts([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    await firestore()
      .collection("Products")
      .get()
      .then((snapshot) => {
        if (!snapshot.empty) {
          const result = [];
          snapshot.docs.forEach((doc) => {
            if (doc.exists) {
              const responseData = {id: doc.id, ...doc ?.data()}
              result.push(responseData);
            }
          });
          setproducts(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleProduct = item => {
    navigation.navigate('Productdetails',{product:item});
  }
  const handleRenderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => handleCategories(item)}
        style={responsiveStyle.catItemView}
      >
        <Text style={responsiveStyle.catItem}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  const handleProductRender = ({ item, index }) => {
    return (
    <TouchableOpacity onPress={()=>handleProduct(item)} style={responsiveStyle.productview}>
        <Image source={{uri:item.image}}
        style={responsiveStyle.productimage}
        />
        <View style={responsiveStyle.nameview}>
       <Text style={responsiveStyle.name} numberOfLines={1}>
        {item.name}</Text>
<Text style={responsiveStyle.des} numberOfLines={2}>{item.description}</Text>
        <View style={responsiveStyle.priceview}>
        <View style={responsiveStyle.priceview2}>
            <Text style={responsiveStyle.price}>₹{item.price}</Text>
            <View style={responsiveStyle.offview}>
                <Text style={responsiveStyle.offtext}>
                    56%
                </Text>
            </View>
                </View>
                <View style={responsiveStyle.qunview}>
                    <Text style={responsiveStyle.quntext1}>-</Text>
                    <Text style={responsiveStyle.quntext2}>0</Text>
                    <Text style={responsiveStyle.quntext2}>+</Text>
                </View>
                </View>
                </View>
</TouchableOpacity>
    )};
  return (
    <ScrollView>
    <View style={responsiveStyle.container}>
        <FlatList
          horizontal
          data={categories}
          showsHorizontalScrollIndicator={false}
          renderItem={handleRenderItem}
          contentContainerStyle={responsiveStyle.categories}
        />
      <Customsearch filter={true} />
     {/*} <ScrollView style={responsiveStyle.commonPadding}>
        <FlatList
          data={products}
          showsVerticalScrollIndicator={false}
          renderItem={handleProductRender}
        //  ListEmptyComponent={emptyComponent}
        />
  </ScrollView>*/}
  <View style={responsiveStyle.commonPadding}>
  <FlatList
          data={products}
          showsVerticalScrollIndicator={false}
          renderItem={handleProductRender}
          style={responsiveStyle.products}
       />
    </View>
    </View>
    </ScrollView>
  );
};

export default Shop;