import { StyleSheet } from "react-native";
import colors from "../../components/common/colors";

const style = (width, height) =>
  StyleSheet.create({
   // container: {
     //flex:1,
    //},
    catItemView: {
      margin: 10,
    },
    catItem: {
      fontFamily: "Lato-Regular",
      fontSize: 18,
      color: colors.primaryGreen,
    },
    categories: {
      backgroundColor: colors.secondaryGreen,
      justifyContent: "space-between",
      alignItems: "center",
    },
    flatlistView: {
      width: "100%",
      padding: 15,
      marginRight: 15,
      marginVertical: 8,
      borderRadius: 20,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.white,
      overflow: "hidden",
    },
    image: {
      width: 75,
      height: 75,
      resizeMode: "contain",
      alignSelf: "center",
      marginVertical: 10,
      // borderRightWidth: 1,
      padding: 10,
    },
    nameText: {
      fontFamily: "Lato-Bold",
      fontSize: 20,
      color: colors.black,
    },
    contentText: {
      fontFamily: "Lato-Regular",
      fontSize: 16,
      color: colors.black,
    },
    priceText: {
      fontFamily: "Lato-Bold",
      fontSize: 18,
      color: colors.black,
    },
    plus: {
      fontFamily: "Lato-Bold",
      fontSize: 20,
    },
    plusView: {
      padding: 5,
      backgroundColor: colors.primaryGreen,
      borderRadius: 5,
    },
    offView: {
      padding: 5,
      borderRadius: 15,
      backgroundColor: colors.primaryGreen,
      marginHorizontal: 10,
    },
    offText: {
      fontFamily: "Lato-Bold",
      fontSize: 16,
      color: colors.white,
      marginHorizontal: 10,
    },
    qunView: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      paddingVertical: 5,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: colors.primaryGreen,
      overflow: "hidden",
    },
    qunText1: {
      fontFamily: "Lato-Bold",
      fontSize: 20,
      color: colors.black,
      marginHorizontal: 10,
    },
    qunText2: {
      fontFamily: "Lato-Bold",
      fontSize: 18,
      color: colors.primaryGreen,
      marginHorizontal: 5,
    },
    priceView2: {
      flexDirection: "row",
      alignItems: "center",
    },
    commonPadding: {
      paddingHorizontal: 15,
    },
    offView: {
      marginRight: -height * 0.02,
      zIndex: 99,
    },
    productview:
    {
        width:'100%',
        padding:15,
        marginRight:15,
        marginVertical:15,
        borderRadius:20,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#F5F5F5',
        overflow:'hidden',
        
        },
    productimage:
    {
        width:45,
        height:45,
        resizeMode:'contain',
        alignSelf:'center',  
        marginVertical:20, 
        
        },
    nameview:
        {
        borderLefttWidth:3,
        paddingHorizontal:15,
        marginLeft:10
    },
    name:
    {
        fontSize: 15,
        color:'black'
    },
    des:
    {
        fontSize: 12,
        color:'black',
    },
    priceview:
    {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:15,
    
        },
        priceview2:
    {
        flexDirection:'row',
        alignItems:'center',
        
    },
    
    price:
    {
        fontSize:10,
        color:'black',
    },
    offview:
    {
    padding:5,
    borderRadius:15,
    backgroundColor:'green',
    marginHorizontal:18,
    },
    offtext:
    {
        fontSize:16,
        color:'white',
        marginHorizontal:10,
    },
    qunview:
    {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        padding:7,
        borderRadius:15,
        borderWidth:1,
        borderColor:colors.primaryGreen,
        overflow:'hidden',
        
    },
    quntext1:
    {
        fontSize:16,
        color:"green",
        marginHorizontal:10,
    },
    quntext2:
    {
        fontSize:16,
        color:"green",
        marginHorizontal:10,
      },
  commonPadding:
      {
        paddingHorizontal:15,
      },
  contentstyle:
      {
        justifyContent:'space-around',
        alignItems:'center',
      },
      products:{
      
      }
  });

export default style;




/*import {  StyleSheet } from "react-native";
const style = (width,height,isportrait) =>
 StyleSheet.create({
    categories:
    {
        backgroundColor:"green",
    },
    catitemview:
    {
     margin:10,
     padding:15,
    },
    catitem:
    {
    fontsize:18,
    color:'green',
     },
   });
export default style;*/