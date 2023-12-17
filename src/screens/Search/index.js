import React, { useEffect } from "react";
import { Text, View } from "react-native";
import style from "./style";
import { ScrollView } from "react-native-gesture-handler";
import CustomSearch from "../../components/Customsearch";
import Offerproducts from "../../components/Offerproducts";
import Trending from "./components/Trending";
import { useNavigation } from "@react-navigation/native";
import Commonheaderleft from "../../components/Commonheaderleft";

 const Search = () =>{
    const navigation=useNavigation();

    useEffect(()=>{
        navigation.setOptions({
          headerLeft: () => <Commonheaderleft/>,      
             });
       },[]);
    
 return (
<ScrollView vertical={true} 
           contentContinaerStyle={{flexGrow: 1}}
           style={style.main}> 
<View
    style={style.container}
    nestedScrollEnabled
    showsVerticalScrollIndicator={false}
    >
<CustomSearch />
<Trending />
<Offerproducts />
</View>
</ScrollView>
 );
 };
export default Search;

