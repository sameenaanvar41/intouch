import React from "react";
import { View,Text } from "react-native";
import { useDimensionContext } from "../../../../context";
import style from "./style";

const Ordertotal = (props) => {
    const {total,charges}= props;
    const dimensions= useDimensionContext();
    const responsivestyle=style(
     dimensions.windowWidth,
     dimensions.windowHeight,
    );
return(
    <View>
    <View style={responsivestyle.container}>
    <View>
        <Text style={responsivestyle.head}>Order Details</Text>
        <Text style={responsivestyle.content}>Bag Total</Text>
        <Text style={responsivestyle.content}>Bag savings</Text>
        <Text style={responsivestyle.content}>Coupon Discount</Text>
        <Text style={responsivestyle.endcontent}>Delivery</Text>
        </View>
    <View>
        <Text style={responsivestyle.headcontent}>.</Text>
        <Text style={{fontSize:18,lineHeight:30,color:'black',marginLeft:95}}>₹{parseFloat(total).toFixed(2)}</Text>
        <Text style={{fontSize:18,lineHeight:30,color:'black',marginLeft:95}}>₹0.00</Text>
        <Text style={{fontSize:15,lineHeight:30,color:'red',marginLeft:95}}>Apply coupon</Text>
        <Text style={{fontSize:18,lineHeight:30,marginBottom:15,color:'black',marginLeft:95}}>₹{parseFloat(charges).toFixed(2)}</Text>
    </View>
    </View>
    <View style={{flexDirection:'row',
                  alignItems:'center',
                  justifyContent:'space-between',}}>
        <Text style={responsivestyle.total}>Order Details</Text>
        <Text style={responsivestyle.total}>₹{parseFloat(total+charges).toFixed(2)}</Text>
    </View>
    </View>
    
);
}
export default Ordertotal;
