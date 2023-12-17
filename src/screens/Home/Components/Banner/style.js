import {StyleSheet} from 'react-native';
import colors from '../../../../components/common/colors';

const style= (width,height) =>
StyleSheet.create({
container:
{
    justifyContent: 'center',
    alignItems:'center',
    //marginVertical:45,
},
banner:
{
    width:width*0.95,
    height:width*0.4 ,
    resizeMode:'conatin',
    borderRadius:15,
    overflow:'hidden',
    margin:15,
},
innerview:
{
    padding:15,
},
head:{
    fontSize:18,
},
content:{
    fontSize:18,
},
touch:{
backgroundColor:colors.secondaryGreen,
padding: 10,
//justifyContent:'center',
alignItems:'center',
width:width*0.3,
marginVertical:10,
borderRadius:4,
borderWidth:2,
},
touchtext:
{
fontSize:16,
color:colors.white,
},
}) ;
    
export default style;

