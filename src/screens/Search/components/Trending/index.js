import React from "react";
import { Text, View ,Image} from "react-native";
import style from "./style";
import { FlatList } from "react-native-gesture-handler";
import { useDimensionContext } from "../../../../context";
import { useSelector } from "react-redux";

const Trending = () =>{
    const dimension = useDimensionContext();
    const responsivestyle = style(dimension.windowWidth,dimension.Height)
    const {categories} = useSelector(state => state.categories);
    
 return (
<View style={responsivestyle.main}> 
<Text style={responsivestyle.title}>Trending category</Text>
<FlatList 
data={categories}
horizontal
showsHorizontalScrollIndicator={false}
keyExtractor={(item,index) => String(index)}
contentContainerStyle={responsivestyle.flatlists}
renderItem={({item,index}) => {
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

return  (
    <View style={[
   responsivestyle.imagecon,
   {backgroundColor:categoriesColor},
   ]}>
   <Image source={{uri:item.image}}
   style={responsivestyle.images} />
</View>
);
}}
/>
</View>
 );
 };
export default Trending;

