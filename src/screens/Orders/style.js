// import {  StyleSheet } from "react-native";

// const style = (width,height) => StyleSheet.create({
//   container:
//   {
//     height: height,
//     backgroundColor:'white',
//    },
//    flatview:
//    {
//     backgroundColor:'#ECFFDC',
//     borderRadius:25,
//     padding:15,
//     overflow:'hidden',
//     marginTop:10,
//     marginHorizontal:15,
//     },
//     innerview:
//     {
//       flexDirection:'row',
//       justifyContent:'center',
//       alignItems:'center',
//       borderBottomColor:'black',
//       borderBottomWidth:2,
//       paddingBottom:15
//     },
//     orderid:
//    {
//     color:'black',
//     marginRight:35,
//     backgroundColor:'#ECFFDC',
//    },
//    mapimage:
//    {
//     width:100,
//     height:120,
//     borderRadius:15,
//     overflow:'hidden',
//     resizeMode:'cover',
//     },
//     bottomview:
//     {
//     flexDirection:'row',
//     justifyContent:'center',
//     alignItems:'center',
//     },
//     bottomtext:
//     {
//      color:'black',
//      marginLeft:25,
//      backgroundColor:'#ECFFDC'
//     },
//     greentext:
//     {
//      fontSize:16,
//      color:'lightgreen'
//     },
//     address:
//     {
//       fontSize:16,
//       color:'gray'
     
//     },
//     paidtext:
//     {
//       fontSize:16,
//       color:'black'
//      },
//     orderdate:
//     {
//       ontSize:16,
//       color:'green'
     
//     },
  
// });
// export default style;


// /*
// import { StyleSheet } from "react-native";
// import colors from "../../components/common/colors";

// const style = (width, height) =>
//   StyleSheet.create({
//       container: {
//         flex: 1,
//         backgroundColor: colors.white
//       },
//       flatView: {
//         backgroundColor: colors.secondaryGreen,
//         borderRadius: 15,
//         padding: 10,
//         overflow: "hidden",
//         marginTop: 15,
//         marginHorizontal: 15
//       },
//       innerView: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         borderBottomColor: colors.black,
//         borderBottomWidth: 1,
//         paddingBottom: 15,
//       },
//       orderId: {
//         fontFamily: "Lato-Bold",
//         fontSize: 16,
//         color: colors.black,
//       },
//       orderDate: {
//         fontFamily: "Lato-Regular",
//         fontSize: 14,
//         color: colors.primaryGreen,
//       },
//       address: {
//         fontFamily: "Lato-Regular",
//         fontSize: 14,
//         color: colors.black,
//       },
//       price: {
//         fontFamily: "Lato-Regular",
//         fontSize: 14,
//         color: colors.primaryGreen,
//       },
//       map: {
//         width: 90,
//         height: 90,
//         borderRadius: 15,
//         overflow: "hidden",
//         resizeMode: "cover",
//       },
//       bottomView: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//       },
//       bottomText: {
//         fontFamily: 'Lato-Regular',
//         fontSize: 16,
//         color: colors.black
//       }
//   });
// export default style;*/





import { StyleSheet } from "react-native";
import colors from "../../components/common/colors";

const style = (width, height) =>
  StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors.white
      },
      flatView: {
        backgroundColor: colors.secondaryGreen,
        borderRadius: 15,
        padding: 10,
        overflow: "hidden",
        marginTop: 15,
        marginHorizontal: 15
      },
      innerView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: colors.black,
        borderBottomWidth: 1,
        paddingBottom: 15,
      },
      orderId: {
        fontFamily: "Lato-Bold",
        fontSize: 16,
        color: colors.black,
      },
      orderDate: {
        fontFamily: "Lato-Regular",
        fontSize: 14,
        color: colors.primaryGreen,
      },
      address: {
        fontFamily: "Lato-Regular",
        fontSize: 14,
        color: colors.black,
      },
      price: {
        fontFamily: "Lato-Regular",
        fontSize: 14,
        color: colors.primaryGreen,
      },
      map: {
        width: 90,
        height: 90,
        borderRadius: 15,
        overflow: "hidden",
        resizeMode: "cover",
      },
      bottomView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      bottomText: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: colors.black
      }
  });

export default style;
