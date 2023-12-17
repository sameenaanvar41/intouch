import {  StyleSheet } from "react-native";
const style = (width,height,isportrait) =>
  StyleSheet.create({
    container:
    {
        borderRadius:15,
        backgroundColor:'lightgreen',
        paddingBottom:1,
        width:width * 0.8,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:15,
        marginTop:16,
        alignSelf:'center'
    },
    text:
    {
    color:'white',
    fontSize:22,
    },
  });
  export default style;