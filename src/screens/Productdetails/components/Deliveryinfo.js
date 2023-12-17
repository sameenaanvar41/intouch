import { Text,View } from "react-native";
import CustomTextinput from "../../../components/CustomTextinput";
import { useDimensionContext } from "../../../context";
import style from "../style";

const Deliveryinfo = () =>
{
const dimensions = useDimensionContext();
const responsivestyle=style(
  dimensions.windowWidth,
  dimensions.windowHeight,
  dimensions.isportrait,
);
return (
  <View>
  <Text style={{color:'black',fontSize:18}}>Check Delivery</Text>
  <Text style={{color:'black',fontSize:15}}>Enter pincode to check delivery date/pickup option.</Text>
  <CustomTextinput 
             type={'default'}
             check={true}
             handleText={()=> console.log('hello')}
             placeholder={'pin Code'} />
    <Text style={{color:'black',fontSize:17,marginBottom: 10,
}}> Free Delivery on orders above 200.00.</Text>

    <Text style={{color:'black',fontSize:17,marginBottom: 10,
}}> Cash on delivery available.</Text>

    <Text style={{color:'black',fontSize:17,marginBottom: 10,
}}> Easy 21 days return and exchange.</Text>
</View>


 /*<View>
   <Text style={responsivestyle.deliveryhead}>
    Check Delivery</Text>
    <Text style={responsivestyle.commontext}>
    Enter pincode to check delivery date/pickup option.</Text>
    <CustomTextinput 
             type={'default'}
             check={true}
             handleText={()=> console.log('hello')}
             placeholder={'pin Code'} />
    
    <Text style={responsivestyle.commontext}> 
    Free Delivery on orders above 200.00.</Text>

    <Text style={responsivestyle.commontext}>
    Cash on delivery available.</Text>

    <Text style={responsivestyle.commontext}>
Easy 21 days return and exchange.</Text>
</View>       */


   );
};
export default Deliveryinfo;