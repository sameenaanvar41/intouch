/*import {  StyleSheet } from "react-native";
const style = (width,height) =>
  StyleSheet.create({
container:
    {
      flex:1,
    },
textInput:
    {
      fontSize:16,
      Color:'black',
      borderRadius:8,
      borderColor:'green',
      borderWidth:1,
      width:width*0.9,
      height:55,
      alignSelf:'center',
      margin:25,
    },
description:
    {
      fontSize:16,
      
    },
mapView:
    {
      height:height * 0.4,
      width:width,
      justifyContent:'center',
      alignItems:'center'
    },
    touchview:
    {
      padding:15,
      marginVertical:20,
    },
    touchtext:
    {
      fontSize:16,
      
    }
});
export default style;*/



import { StyleSheet } from "react-native";
import colors from "../../components/common/colors";

const style = (width, height) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    textInput: {
      fontFamily: "Lato-Regular",
      borderRadius: 8,
      fontSize: 16,
      borderWidth: 1,
      borderColor: colors.primaryGreen,
      width: width * 0.9,
      backgroundColor: colors.secondaryGreen,
      height: 50,
      margin: 10,
      alignSelf: "center",
    },
    description: {
      fontSize: 16,
      fontFamily: "Lato-Regular",
    },
    mapView: {
      height: height * 0.4,
      width: width,
      justifyContent: "center",
      alignItems: "center",
    },
    TouchView: {
      padding: 15,
      marginVertical: 20,
      flexDirection: "row",
      alignItems: "center",
    },
    touchText: {
      fontSize: 18,
      fontFamily: "Lato-Bold",
    },
    iconView: {
      borderRadius: 8,
      padding: 10,
      marginRight: 10,
      backgroundColor: colors.primaryGreen,
    },
  });

export default style;