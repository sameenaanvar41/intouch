import {View,Text} from "react-native";
import style from "../style";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDimensionContext } from "../../../context";

const Moreinfo = () => {
const dimensions = useDimensionContext();
const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isportrait,
  );
    return(
<View style={{flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:10,
        }}>
<View style={{flexDirection:'row',alignItems:'center',width:dimensions.windowWidth * 0.4,
          justifyContent:'center',
          backgroundColor:'lightgray',
          padding:15,
          borderRadius:5,}}>
<Text  style={{
          color:'black',
           fontSize:18,
           }}>delivery Time</Text>
<AntDesign name="down" size={20} color='gray'  />
</View>
<View style={{flexDirection:'row',alignItems:'center',width:dimensions.windowWidth * 0.4,
          justifyContent:'center',
          backgroundColor:'lightgray',
          padding:15,
          borderRadius:5,}}>
<Text  style={{
          color:'black',
           fontSize:18,
           }}>500g/24.00</Text>
<AntDesign name="down" size={20} color='gray'  />
</View>
</View>
    )
}
export default Moreinfo;