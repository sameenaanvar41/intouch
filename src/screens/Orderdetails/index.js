import { useNavigation, useRoute } from "@react-navigation/native";
import { useState,useEffect } from "react";
import { View,Text, Modal, ActivityIndicator } from "react-native";
import Commonheaderleft from "../../components/Commonheaderleft";
import { ScrollView } from "react-native-gesture-handler";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Snackbar from "react-native-snackbar";
import { useDimensionContext } from "../../context";
import style from "./style";
import CustomBotton from "../../components/CustomButton";
import colors from "../../components/common/colors";

const Orderdetails =() =>{
 const navigation = useNavigation();
 const route = useRoute();
 const {item} = route.params;
 const dimension= useDimensionContext();
    const responsivestyle=style(
    dimension.windowWidth,
    dimension.windowHeight,
    );
    const [loading,setloading] = useState(false);
    useEffect(() => {
        navigation.setOptions({
        headerLeft: () => <Commonheaderleft type={'back'}
        action={()=>navigation.navigate('Orders')}/>,  
        title:'Order Summary'
                  });
           },[] );
   /* const reorder = async() => {
        try{
            setloading(true);
            const smallId = Math.random();
            await firestore()
            .collection('orders')
            .add({
             orderId: String(smallId).slice(4,12).toUpperCase(),
             created: Date.now(),
             updated: Date.now(),
             orderStatus: 'Ordered',
             totalAmount: item.totalAmount,
             address: item.address,
             userId: item.userId,
             paymentMethod: 'online',
             cartItems:item. cartItems,
             userName: item.userName,
            // userPhone: item.userphone,
             expDelDate: '',
            })
            .then( async resp => {
                if(resp){
                    setTimeout(()=>{
                        Snackbar.show({
                            text: "your order is successfully placed",
                            duration: Snackbar.LENGTH_SHORT,
                            backgroundColor: 'Green',
                            textColor: 'white',
                          });
                          setloading(false);
                    },1000)
                    }
          })
    } catch{
        console.log(err);
    }
    }*/
    const reorder = async () => {
          try {
             setloading(true);
             const smallId = Math.random();
             await firestore()
               .collection("orders")
               .add({
                 orderId: String(smallId).slice(4, 12).toUpperCase(),
                 created: Date.now(),
                 updated: Date.now(),
                 orderStatus: "Ordered",
                 totalAmount: item.totalAmount,
                 address: item.address,
                 userId: item.userId,
                 paymentMethod: "online",
                 cartItems: item.cartItems,
                 userName: item.userName,
                 userPhone: item.userPhone,
                 expDelDate: "",
               })
               .then(async (res) => {
                 console.warn(res);
                 setTimeout(() => {
                   Snackbar.show({
                     text: "Your order is successfully placed..",
                     duration: Snackbar.LENGTH_SHORT,
                     backgroundColor: colors.primaryGreen,
                     textColor: colors.white,
                      });
                     setloading(false);
                     },1000);
                     });
                } catch (error) {
                 console.log(error, "Error");
           }
         };
    return(
        <View style={responsivestyle.container}>
            <Modal animationType="slide" transparent={true} visible={loading}>
        <View
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            justifyContent:'center',
            alignItems:'center'
          }}
        >
          <ActivityIndicator size={"small"} color={'white'} />
        </View>
      </Modal>
            <ScrollView style={responsivestyle.scrollview}
            showsVerticalScrollIndicator={false}>
            <View style={responsivestyle.greenbox}>
            <Feather name="box" size={50} color='white'  />
            <View style={responsivestyle.greentext}>
            <Text style={{color:'white',fontSize:16}}>Order Id:#{item ?. orderId ?? 'UYTFE9'}</Text>
            <Text style={{color:'white',fontSize:20}}>{item ?. orderStatus ?? ''}</Text>
            </View>
            </View>
            <View style={{color:'lightgreen',fontSize:20}}>
            <Text style={{color:'black',fontSize:15}}>Items:</Text>
                {item?.cartItems &&
             item.cartItems.map((ele,index)=> {
             return <View key={index}
             style={{flexDirection:'row',
             justifyContent:'space-between',
             alignItems:'center',
             marginVertical:5}}>
            <View style={{backgroundColor:'lightgreen',
                          paddingVertical:15,
                          borderRadius:10,
                          marginRight:15,
                          paddingHorizontal:15}}>
                <Text>{ele.quantity}</Text>
            </View>
            <FontAwesome5 name="star-of-life" size={20} color='black'/>

            <View></View>
            <View style={{width:'55%',overflow:'hidden',marginLeft:15}}>
            <Text style={{color:'black',fontSize:20}}>{ele.name}</Text>
            <Text style={{color:'black',fontSize:14}}>{ele.description}</Text>
            </View>
            <View style={{width:'20%'}}>
            <Text style={{color:'black',fontSize:15}}>₹{ele.price}</Text>
            </View>
            </View>
                })}
            </View>
            <View style={{marginVertical:15}}>
                <Text style={{color:'green',fontSize:20}}>Payment Details</Text>
                <View style={{justifyContent:'space-between',
                              flexDirection:'row',
                              alignItems:'center',
                              paddingBottom:20,
                              borderBottomColor:'black',
                              borderBottomWidth:1,
                              marginVertical:15,}}>
                    <View>
                        <Text style={{color:'black',fontSize:16,lineHeight:25}}>Bag Total</Text>
                        <Text style={{color:'red',fontSize:16,lineHeight:25}}>Coupon Discount</Text>
                        <Text style={{color:'black',fontSize:16,lineHeight:25}}>Delivery</Text>
                    </View>
                    <View style={{alignItems:'flex-end'}}>
                        <Text style={{color:'black',fontSize:16,lineHeight:25}}>7637</Text>
                        <Text style={{color:'red',fontSize:16,lineHeight:25}}>Apply coupon</Text>
                        <Text style={{color:'black',fontSize:16,lineHeight:25}}>₹50.00</Text>
                    </View>
                   </View>
            <View style={{flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center'
                         }}>
                <Text style={{color:'black',fontSize:18}}>Total Amount</Text>
                <Text style={{color:'black',fontSize:18}}>₹{item.totalAmount}</Text>
            </View>
            </View>
            <View style={{marginVertical:15}}>
              <Text style={{
                color:'green',
                fontSize:20,
                }}>
                Address:
                </Text>
                <Text style={{
                color:'black',
                fontSize:16,
                lineHeight:20
                }}>
                  Rick nalon
                </Text>
                <Text style={{
                color:'black',
                fontSize:16,
                lineHeight:20
                }}>
                    Rich,HCL Apartment, 
                </Text>
                <Text style={{
                color:'black',
                fontSize:16,
                lineHeight:20
                }}>
               675, nh.09,USA
               </Text>
            </View>
            <View style={{marginVertical:15}}>
              <Text style={{
                color:'green',
                fontSize:20,
                }}>
                Payment method:
                </Text>
                <View style={{marginVertical:15,
                              justifyContent:'flex-start',
                              alignItems:'center',
                              flexDirection:'row'}}>
                <FontAwesome name="cc-visa" size={30} color='black'/>
                 <View style={{color:'black',
                fontSize:16}}>
                    <Text style={{color:'black',fontSize:15}}>**** **** *7865</Text>
                    <Text style={{color:'black',fontSize:15}}>{item ?. paymentMethod ?? ''}</Text>
                 </View>
                </View>
            </View>
            </ScrollView>
            <View style={{position:'absolute',
                          bottom:0,
                          width:'100%',
                          padding:15,
                          backgroundColor:'white'}}>
            <CustomBotton type='primary'
               handleButtonPress={()=>reorder()}
               buttonText={'Reorder'}
               />
            </View>
        </View>
    )
}
export default Orderdetails;