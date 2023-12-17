import {StyleSheet} from 'react-native';
import colors from '../../../../components/common/colors';

const style= (width,height) =>
StyleSheet.create({
    container:
    {
        backgroundColor:colors.secondaryGreen,
        borderRadius:15,
        margin:0.02,
        padding:15,
    },
    head:
    {
    fontSize:18,
    marginBottom:10,
    },
    contentview:
    {
    backgroundColor:colors.white,
    padding:15,
    marginRight:15,
    borderRadius:15,
    },
images:
{
    width:40,
    height:40,
    resizeMode:'contain',
},
})
export default style;