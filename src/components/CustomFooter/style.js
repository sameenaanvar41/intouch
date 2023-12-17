import { StyleSheet } from "react-native";
import colors from "../common/colors";
const style=(width,height)=>
StyleSheet.create({  
  
mainContainer:
{
    height:height*0.10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    backgroundColor:colors.lightGreen,
    
  },
touchContainer:
    {
      justifyContent:'center',
      alignItems:'center'
    },
iconStyle:
      {
        width:width * 0.08,
        height:height * 0.03,
        resizeMode:'contain'
      },
footerText:
      {
        fontSize:16,
        color:colors.white,
        //textAlign:'center',
        marginTop:0.1 ,
      
        },
 dot:
      {
        fontSize:60,
        color:colors.white,
        textAlign:'center',
        marginTop:-height * 0.07,
        },
cartcount:
        {
        position:'absolute',
        right:-8,
        top:-2,
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
});
export default style;