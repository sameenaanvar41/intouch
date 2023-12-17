import { StyleSheet } from "react-native";
import colors from "../../components/common/colors";

const style= (width,height) => StyleSheet.create({
      container: {
            height: height,
            flex: 1,
          },
          topBg: {
            width: width,
            height: height * 0.2,
            resizeMode: 'cover',
          },
    ScrollView:{
        flex:1,
        backgroundColor:colors.white,
        marginTop: -width* 0.2,
        borderTopRightRadius:width*0.05,
        borderTopLeftRadius:width*0.05,
        overflow:'hidden',
        padding:width*0.03,
    },
    logo:{
        width:width*0.4,
        height:width*0.2,
        resizeMode:'contain'
  },
  loginText:{
        fontFamily:'lato-Bold',
        fontSize:22,
        color:colors.gray,
        paddingLeft:20,
  },
createNew:
{
      fontFamily:'lato-Bold',
      fontSize:14,
      color:colors.steel,
      textAlign:'center',
      marginVertical:width * 0.025,

},
footer:{
      padding:15,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:colors.secondaryGreen,
},
/*errortext:{
      fontSize:15,
      color:'green',
      marginTop:20,
}*/

    
});
export default style;