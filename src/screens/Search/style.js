import { Dimensions, StyleSheet } from "react-native";
import {View} from 'react-native';
import colors from "../../components/common/colors";
const {width,height}=Dimensions.get('screen');

const style =StyleSheet.create({
  container:
  {
    backgroundColor:colors.white,

  },
  main:
  {
   flex:1,
  //padding:10
  }
  
  
});
export default style;