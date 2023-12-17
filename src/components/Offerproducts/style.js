import {StyleSheet} from 'react-native';
import colors from '../common/colors';

const style= (width,height) =>
StyleSheet.create({
container:
{
    paddinghorizontal:10,
    paddingRight:15,
    backgroundColor:'lightblue',
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

}) ;
    
export default style;

