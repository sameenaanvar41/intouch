import React from "react";
import { View ,Text,Image, StatusBar} from "react-native";
import style from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useDimensionContext } from "../../context";

 const CommonHeader =() =>{
  const dimensions = useDimensionContext();
  const navigation = useNavigation();
  const responsivestyle=style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
    );


 return (
<View style={responsivestyle.container}>
    <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
    <Image
        source={require('../../assets/images/sidebar.png')} 
         style={responsivestyle.sideicon}/>
     </TouchableOpacity>
<Image source={require('../../assets/images/logo.webp')}
 style={responsivestyle.logo} />
</View>
 );
 };
export default CommonHeader;

