import { StyleSheet } from "react-native";
import colors from "../../components/common/colors";

const style=(width,height)=>
StyleSheet.create({ 
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
      width: 150,
      height: 100,
      resizeMode: 'contain',
  },
  loginText:{
        //fontFamily:'lato-Bold',
        fontSize:22,
        color:'black',
        paddingLeft:20,
  },
createNew:
{     //fontFamily:'lato-Bold',
      fontSize:14,
      color:colors.black,
      textAlign:'center',
      marginVertical:width * 0.02,

},
footer:{
      padding:15,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:colors.secondaryGreen,
},
footerText:
{
      //fontFamily:'lato-Bold',
      fontSize:14,
      color:colors.steel,
 
},
dottedLineContainer:
{
      borderStyle:'dashed',
      borderWidth:2,
      borderColor:'black',
      margin:30,
      // marginBottom:1,
        
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
            color:"black",
           // fontFamily:'lato-Regular',
            fontSize:16,
            marginBottom:null,
        }
    
});
export default style;