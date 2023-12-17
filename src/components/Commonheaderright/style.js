import { StyleSheet } from "react-native";
import colors from "../common/colors";
const style= (width,height) => 
StyleSheet.create({
    padding:
    {
    paddingRight:10,
    },
    image:
    {
        width:30,
        height:30,
        resizeMode:'contain',
        paddingLeft:15
    },
    cartcount:
        {
        position:'absolute',
        right:-1,
        top:-6,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:14, 
        overflow:'hidden',
        paddingHorizontal:6,
        paddingVertical:2,
        zIndex:9, 
        },
        count:
        {
          color:colors.white,
          fontSize:16,
          textAlign:'center',
        },
        flexstyle:
        {
          flexDirection:'row',
          justifyContent:'space-around',
          alignItems:'center',
        }
});
export default style;