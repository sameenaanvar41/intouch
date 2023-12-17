import { Dimensions, StyleSheet } from "react-native";
import colors from "../../components/common/colors";

const {width,height}=Dimensions.get('screen');

const style =StyleSheet.create({
    container:{height: height},
      
    topBg:{
          width: width ,
          height: height * 0.2,
          resizeMode:'cover'
    },
    ScrollView:{
        flex:1,
        backgroundColor:colors.white,
        marginTop: -width* 0.2,
        borderTopRightRadius:width*0.05,
        borderTopLeftRadius:width*0.05,
        overflow:'hidden',
        padding:width * 0.0,
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
      paddingBottom:width * 0.2,

},
footer:{
      padding:15,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:colors.secondaryGreen,
},
dottedLineContainer:
{

            borderStyle:'dashed',
            borderWidth:2,
            borderColor:'#000',
            margin:-2,
            marginBottom:0,
        
},
textContainer:
{
      justifyContent:'center',
      alignItems:'center',
      alignSelf: 'center',
      marginTop:-13,
      backgroundColor:colors.white,
      width:110,
      },
dashedText:
      {
      textAlign:'center',
      color:colors.black,
      fontSize:14,
        },
errorText:
        {
            color:'red',
           // fontFamily:Lato-Light,
            fontSize:14
        }
    
});
export default style;