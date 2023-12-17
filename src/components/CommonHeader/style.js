import {StyleSheet} from 'react-native';
import colors from '../common/colors';

const style= (width,height,isPortrait) =>
StyleSheet.create({
container:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginTop:width * 0.01,
    height:width*0.175 ,
    backgroundColor:'white',
     paddingHorizontal:width *0.03,
},
logo:
{
    resizeMode:'cover',
    height:width*0.10,
    width:width*0.20,
   // marginRight:0.1,
},
sideicon:
{
    resizeMode:'contain',
    height:width*0.10,
    width:width*0.20,
    //marginLeft:1,

}
}) ;
    
export default style;

