import {View,Text,Image} from "react-native";
import style from "../style";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDimensionContext } from "../../../context";
import { TouchableOpacity } from "react-native-gesture-handler";
import StarRating from 'react-native-star-rating-widget';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const ProductReview = props => {
  const {product} = props;
    const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isportrait,
  );
  const navigation =useNavigation();
  const [rating,setRating] = useState(0); 

  const handleRedirect = () => {
    navigation.navigate('Review',{product:product})

  };
    return(

<View style={{marginVertical:15}}>
  <View style={{flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-between',
       }}>
        <Text style={{color:"#999999",fontSize:15}}>Product Review (1)</Text>
        <TouchableOpacity onPress={handleRedirect}>
        <Text style={{color:"#999999",fontSize:15}}>See All</Text>
        </TouchableOpacity>
  </View>
<View style={{padding:15,backgroundColor:"lightgray",
              borderRadius:8,marginVertical:10,marginVertical:10}}>
       <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image source={require('../../../assets/images/profile-pic.png')}
         style={{height:40,
                 width:40,
                 resizeMode:'contain',
                 overflow:'hidden',
                 borderRadius:15}}/>
    
    <View> 
         <Text style={{color:"black",fontSize:15,marginLeft:10}}>Rentric Henwork</Text>
        <StarRating
                  starSize={20}
                  rating={rating}
                  onChange={setRating}
                />
                </View>
       </View>
  <Text style={{color:"#999999",fontSize:15}}>Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been 
        the industrys standard dummy text ever since the 
        1500s,when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book</Text>
</View>
</View>
    )
}
export default ProductReview;