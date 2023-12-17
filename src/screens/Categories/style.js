import {  StyleSheet } from "react-native";
import {View} from 'react-native';
import colors from "../../components/common/colors";

const style = (width,height) => StyleSheet.create({
  container:
  {
    backgroundColor:colors.white,
    
  },
  main:
  {
    flex:1,
  },
  catimage:
  {
    width:width*0.2,
    height:height*0.2,
    resizeMode:'contain',
  },
  catflatstyle:
  {
    padding:10,
    backgroundColor:colors.secondaryGreen,
    width:width*0.3,
    justifyContent:'center',
    alignItems:'center',
      height: '100%'
  },
  cattouch:
  {
    borderBottomColor:colors.black,
    borderBottomWidth:0.8,
  },
  rowstyle:
  {
    flexDirection:'row',
    justifyContent:'space-around',
  },
  backimage:
  {
    width:width*0.65,
    height:height*0.350,
    resizeMode:'contain',
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:15,
    overflow:'hidden',
    padding:15,
  },
  catname:
  {
    fontSize:22,
    color:'gray',
  },
  catdesc:
  {
    fontSize:18,
    color:'gray',
  },
 
  proname:
  {
    fontSize:18,
    color:'gray',
  },
  prodesc:
  {
    fontSize:14,
  },
  procontainer:
  {
   padding:5,
   justifyContent:'center',
   alignItems:'center',
  },
  proimage:
  {
    width:width * 0.15,
    height: width * 0.15,
    resizeMode:'contain',
    alignSelf:'center',
  },
  prostyle:
  {
    justifyContent:'center',
    padding:10
  },
  imagebg:
  {
   backgroundColor:colors.secondaryGreen,
   padding:10,
   justifyContent:'center',
   alignSelf:'center',
   marginBottom:5,
  },
});
export default style;