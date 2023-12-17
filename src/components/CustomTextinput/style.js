import { Platform, StyleSheet } from "react-native";
import colors from "../common/colors";
import { Dimensions } from "react-native";

const {width,height}=Dimensions.get('screen');
const style =StyleSheet.create({

    container:{
      //  height:height,
        //width:width,
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-between',
       backgroundColor:colors.secondaryGreen.colors,
       padding:width*0.01,
       borderRadius:0.5,
       marginVertical:15,
       borderWidth:0.3,
       borderColor:colors.gray,

    },
    textInput: {
        flex:1,
        color: colors.black,
        fontSize:16,
    },
    icon:{
        width:width*0.1,
        height:width*0.05,
        resizeMode:'contain'
    },
    checktext:
    {
    color:"lightgreen",
    fontSize:15
    },
});
export default style;