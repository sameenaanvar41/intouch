import React from "react";
import { View,Text,TouchableOpacity, Image } from "react-native";
import style from "./style";
import colors from "../common/colors";

const CustomBotton =props =>{
    const {type,handleButtonpress,buttonText,icon}=props;
    return(
        <View>
   <TouchableOpacity 
           onPress={handleButtonpress}
           style={[style.button,
        {
            backgroundColor:
            type ==='primary' ? 'lightgreen':
            colors.secondaryGreen,
        },
        ]}>
            {type !== 'primary' ? <Image source={icon} 
            style={style.icon}/>  :null}
            <Text style={
         {
            colors:type==='primary' ?  colors.white : colors.black,
            fontFamily:type==='primary' ? 'Bold' : 'Italic',
            fontSize: type === 'primary' ? 20 : 16,
   }}>
            {buttonText}</Text>
   </TouchableOpacity>
   </View>
    );
}

export default CustomBotton;