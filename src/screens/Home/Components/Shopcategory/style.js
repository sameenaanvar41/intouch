import {StyleSheet} from 'react-native';
import colors from '../../../../components/common/colors';

const style= (width,height) =>
StyleSheet.create({
    container:
    {
        margin:10,
        justifyContent:'center',
        alignItems:'center',
        
    },
    head:
    {
        fontSize:15,
        textAlign:"center",
    },
    flatlist:
    {
        marginvertical:15,
        
    },
    innerview:
    {
        justifyContent:'center',
        alignItems:'center',
        marginRight:15,
        marginBottom:15,
    },
    itemname:
    {
        fontSize:16,
        color:colors.black,
        padding:0.03,
        
    },
    image:
    {
       width:width*0.1,
       height:width*0.1,
       resizeMode:'contain',
      // backgroundColor:colors.gray,
    },
    imageview:
    {
            justifyContent:'center',
        alignItems:'centre',
        borderRadius:20,
        padding:15,
        marginBottom:10,
        
    
    }
        }
        );
export default style;