import {StyleSheet} from 'react-native';
import colors from '../common/colors';

const style= (width,height) =>
StyleSheet.create({
container:
{
    padding:15,
    backgroundColor:colors.white,
},
headview:
    {
    flexDirection:'row',
   // alignItems:'center',
   // justifyContent:'center',
   marginLeft:30
},
headtext:
{
    fontSize:20,
    color:colors.black,
},
contenttext:
{
    fontSize:20,
    color:colors.black,
    marginRight:20
},
seeall:
{
fontSize:17,
color:'black',
marginLeft:70
},

}) ;
    
export default style;

