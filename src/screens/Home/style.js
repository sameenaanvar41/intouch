import { Dimensions, StyleSheet } from "react-native";
import {View} from 'react-native';
import colors from "../../components/common/colors";
//import style from "../Login/style";

const {width,height}=Dimensions.get('screen');

const style =StyleSheet.create({
  container:
  {
    backgroundColor:'white',
   },
  main:
  {
    flex:1,
  },
  foottext
:
{
  fontSize:25,
  color:colors.gray,
  padding:15,
},
footbutton:
{
  padding:15,
  backgroundColor:'#00A36C',
  width:'40%',
  margin:15,
  justifyContent:'center',
  alignItems:'center',
  marginBottom:50,
  borderRadius:10,
},
footbuttontext:
{
  fontSize:12,
  color:colors.black,
},
});
export default style;