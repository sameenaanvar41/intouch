import {  StyleSheet } from "react-native";
import {View} from 'react-native';

const style = (width,height,isportrait) =>
  StyleSheet.create({
container:
{
     flexDirection:'row',
     alignItems:'center',  
     justifyContent:'space-between',
     marginVertical:1,
     borderBottomColor:'black',
     borderBottomWidth:1,},
head:
{
    fontSize:20,
    lineHeight:50,
    color:'black'
},
content:
{
    fontSize:18,
    lineHeight:30,
    color:'black'
},
endcontent:
{
    fontSize:18,
    lineHeight:30,
    marginBottom:10,
    color:'black'
},
headcontent:
{
    fontSize:20,
    lineHeight:50,
    color:'white'
},
total:
{
    fontSize:20,
    lineHeight:30,
    color:'black'
}
});
export default style;