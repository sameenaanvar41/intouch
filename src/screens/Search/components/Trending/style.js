import { Dimensions, StyleSheet } from "react-native";

const style =(width,height) =>
StyleSheet.create({
  
  main:
  {
  flex:1,
  padding:15,
  },
  main:
  {

  },
  title:
  {
fontSize:18,
  },
  flatlists:
  {
 alignItems:'contain',
 marginVertical:20,
  },
 images:{
       width:40,
       height:40,
       resizeMode:'contain',
  },
  imagecon:
  {
    padding:15,
    borderRadius:15,
    overflow:'hidden',
    marginRight:15
  },
  /*images:{
       width: 40,
       height: 40
  }*/
});
export default style;