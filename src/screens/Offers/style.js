import {  StyleSheet } from "react-native";
import {View} from 'react-native';
import colors from "../../components/common/colors";

const style =(width,height) =>
StyleSheet.create({
  container:
  {
    backgroundColor:colors.white,
  },
  main:
  {
    flex:1,
  },
  contentstyle:
  {
    alignSelf:'center',
    marginVertical:height * 0.015,
},
  renderview:
    {flexDirection:'row',
        alignItems:'center',
        width:width,
       alignSelf:'center',
       justifyContent:'center',
       marginBottom:height * 0.015,
    },

  offcircleview:
  {
    marginRight:-27 / 2,
    zIndex:99,
    marginBottom:(-height * 0.02 )/2,
  },
  circleright:
  {
    borderRadius:25/2,height:28,
        width:28,backgroundColor:"#FAF9F6"
      },
  
});
export default style;