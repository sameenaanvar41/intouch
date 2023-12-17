/*import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (width, height) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white_level_3,
      padding: 15,
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
    backgroundColor:colors.white,
    overflow:'hidden'
    },
    productimage:
{
    width:25,
    height:25,
    resizeMode:'contain',
    alignSelf:'center',  
    marginVertical:20, 
    },
    nameView: {
      borderLeftWidth: 1,
      paddingHorizontal: 10,
      marginLeft: 10,
      width: width * 0.68,
    },
    name:
{
    fontSize: 15,
    color:'black'
},
des:
{
    fontSize: 12,
    color:'black'
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

price: {fontFamily: 'Lato-Bold', fontSize: 18, color: colors.black_level_1},
    offView: {
      padding: 5,
      borderRadius: 15,
      backgroundColor: colors.primaryGreen,
      marginHorizontal: 10,
    },
    offText: {
      fontFamily: 'Lato-Bold',
      fontSize: 16,
      color: colors.white,
      marginHorizontal: 10,
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
    renderView: {
      flexDirection: 'row',
      alignItems: 'center',
      width: width * 0.95,
      alignSelf: 'center',
      justifyContent: 'center',
      marginBottom: height * 0.015,
    },
    offCircleView: {marginRight: (-height * 0.02) / 2, zIndex: 99},
    circleRight: {
      width: 25,
      height: 25,
      borderRadius: 25 / 2,
      backgroundColor: colors.white_level_3,
    },
    circleCenter: {
      width: 25,
      height: 25,
      borderRadius: 25 / 2,
      backgroundColor: colors.white_level_3,
      marginTop: -25 / 2,
    },
  });

export default style;*/


import {  StyleSheet } from "react-native";
import {View} from 'react-native';
import colors from "../../components/common/colors";

const style = (width,height) =>
  StyleSheet.create({
  container:
  {
    height: height,
    backgroundColor:'#F5F5F5' ,
    padding:15,
    paddingHorizontal:25,
},
productview:
{
    width:'100%',
    padding:10,
    marginRight:15,
    marginVertical:7,
    borderRadius:20,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:colors.white,
    overflow:'hidden'
    },
productimage:
{
    width:25,
    height:25,
    resizeMode:'contain',
    alignSelf:'center',  
    marginVertical:20, 
    },
nameview:
    {
    borderLefttWidth:1,
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
    color:'black'
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
    color:colors.black,
},
offview:
{
padding:5,
borderRadius:15,
backgroundColor:'lightgreen',
marginHorizontal:18,
color:'white'
},
offtext:
{
    fontSize:16,
    color:colors.white,
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
  {
    flexDirection:'row',
      alignItems:'center',
      width:width*0.95,
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
  borderRadius:25/2,
      height:28,
      width:28,backgroundColor:"#FAF9F6",
    },
    buttontext:
    {
      marginBottom:10,
      fontSize:20
    },
    button:
    {
      color:'white',
      fontSize: 15
    }
});
export default style;