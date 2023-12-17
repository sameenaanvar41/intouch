import { StyleSheet } from "react-native";

const style = (width, height) =>
  StyleSheet.create({
    proimage:
    {
      width: width,
      height: width * 0.6,
      resizeMode: 'center',
      marginTop:25,
    },
    heart:
    {
      position:'absolute',
      right:0,
      marginTop:25,
    },
    mainview:
    {
      backgroundColor:'white',
      borderTopLeftRadius:15,
      borderTopRightRadius:15,
      shadowColor:'#000',
      shadowOffset:{width:2,height:2},
      shadowOpacity:0.2,
      shadowRadius:5,
      elevation:15,
      marginBottom:100,
    },
    name:
    {
      fontSize:20,
      marginBottom:10,
      color:'black',

    },
    price:
    {
      fontSize:15,
      marginVertical:5,
      color:'black',
    },
    descriptionhead:
    {
      fontSize:20,
      color:'black',
 },
 description:
 {
  fontSize:18,
  color:'gray',
 },
 padding:
 {
  padding:width * 0.08
 },

  });
  export default style;