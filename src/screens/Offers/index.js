import React, { useEffect } from "react";
import { Dimensions, Text, View } from "react-native";
import style from "./style";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import CustomSearch from "../../components/Customsearch";
import colors from "../../components/common/colors";
import { useDimensionContext } from "../../context";
import { useNavigation } from "@react-navigation/native";
import Commonheaderleft from "../../components/Commonheaderleft";

const Offers=() =>{
    const navigation=useNavigation();
    const dimension= useDimensionContext();
    const responsivestyle=style(
    dimension.windowWidth,
    dimension.windowHeight,
    );
    useEffect(()=>{
        navigation.setOptions({
          headerLeft: () => <Commonheaderleft />,      
             });
       },[]);
    
    const offersArray = [{
        offer:41,
        head:'Midnight Sale offer',
        content:'on all orders above Rs.900',
        code:'YTB67',
    },
    {
        offer:50,
        head:'Monsoon Sale offer',
        content:'on all orders above Rs.1500',
        code:'ASD67',
    },
    {
        offer:20,
        head:'Christhmas Sale offer',
        content:'on all orders above Rs.500',
        code:'JKL67',
    },
    {
        offer:25,
        head:'Diwali Sale offer',
        content:'on all orders above Rs.300',
        code:'OIU67',
    },
    {
        offer:60,
        head:'Onam Sale offer',
        content:'on all orders above Rs.2000',
        code:'GFR67',
    },
    {
        offer:80,
        head:'Eid Sale offer',
        content:'on all orders above Rs.2500',
        code:'GFT67',
    },];
 return (
<View style={responsivestyle.main}> 
<ScrollView
    style={responsivestyle.container}
   // nestedScrollEnabled
    showsVerticalScrollIndicator={false}
    >
<CustomSearch/>
       {/*start design*/}

    <FlatList data={offersArray}
      showsHorizontalScrollIndicator={false}
       keyExtractor={(item,index) => String(index)}
       contentContainerStyle={responsivestyle.contentstyle}
       renderItem={({item,index})=>{
        return(
<View style={responsivestyle.renderview}> 

     <View style={responsivestyle.offcircleview}>
     <View style={responsivestyle.circleright}></View>
     <View style={responsivestyle.circleright}></View>
     <View style={responsivestyle.circleright}></View> 
     <View style={responsivestyle.circleright}></View>  
  </View>
  <View style={{width:'65%',height:100,
              backgroundColor:"#FAF9F6",padding:20}}>
  <View style={{flexDirection:'row',alignItems:'center'}}>
  <Text style={{color:'green',fontSize:40,}}>{item.offer}</Text>
    <View>
    <Text style={{color:"green",fontSize:16,}}>%</Text>
    <Text style={{color:"green",fontSize:16,}}>OFF</Text>
    </View>
    <View style={{marginLeft:10}}>
        <Text style={{color:'black',fontSize:15,}}>{item.head}</Text>
        <Text style={{color:'green',fontSize:10,}}>{item.content}</Text>
    </View>
   </View>
   </View>
   <View>

   </View>

   <View style={{justifyContent:'space-between',
              height:100,
              backgroundColor:"FAF9F6",
              }}>
    <View style={{borderRadius:-12/2,
                  height:50,
                  width:30,
                  backgroundColor:"#FAF9F6",
                  marginTop: 10,}}></View>
    <View style={{borderRadius:-35 / 2,
                  height:30,
                  width:28,
                  backgroundColor:"#FAF9F6",
                  marginBottom: 30,}}></View>
   </View>
    <View style={{width:'30%',
      height:100,
      backgroundColor:"#FAF9F6",
      alignItems:'center',
      paddingRight:15,
      paddingVertical:15}}>
  <Text style={{color:'black',fontSize:10,}}>Use code</Text>
    <View style={{marginVertical:10,
      paddingHorizontal:10,
      paddingVertical:5,
      justifyContent:'center',
      borderRadius:15,
      backgroundColor:'green',
      overflow:'hidden',
      }}>
     <Text style={{fontSize:15,color:'white',textAlign:'center'}}>{item.code}</Text>
        </View>
        </View>

            {/*End design */}
   <View style={{marginLeft:-25/2}}>
    <View style={responsivestyle.circleright}></View>
    <View style={responsivestyle.circleright}></View>
    <View style={responsivestyle.circleright}></View> 
    <View style={responsivestyle.circleright}></View>  
  </View>
  </View>

        );
       }}/>

</ScrollView>
</View>

 );
 };
export default Offers;

