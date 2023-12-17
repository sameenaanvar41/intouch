import React from "react";
import { Image, Text, View } from "react-native";
import style from "./style";
import colors from '../../components/common/colors';
import { useDimensionContext } from "../../context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { signout } from "../../storage/action";
import { useDispatch, useSelector } from "react-redux";

 const CustomDrawer=() =>{
  const dimensions=useDimensionContext();
  const responsivestyle=style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isportrait,
    );
   
  const navigation=useNavigation();
  const dispatch = useDispatch();
  const firstName = useSelector(state => state.firstName);
  const lastName = useSelector(state => state.lastName);
  const email = useSelector(state => state.email);
  const profileImage = useSelector(state => state.profileImage);
  const contents= [
    {
    itemId:0,
    itemName:'Home',
    navigateTo:'MyFooter',
    icon: require('../../assets/images/home.png')
  },
  {
    itemId:1,
    itemName:'Shop by category',
    navigateTo:'Categories',
    icon: require('../../assets/images/drawer.png')
  },
  {
    itemId:2,
    itemName:'Orders',
    navigateTo:'Orders',
    icon: require('../../assets/images/orders.png')
  },
  {
    itemId:3,
    itemName:'Wishlist',
    navigateTo:'Wishlist',
    icon: require('../../assets/images/wishlist.png')
  },
  {
    itemId:4,
    itemName:'Account',
    navigateTo:'Account',
    icon: require('../../assets/images/user.png')
  }
];
const handlesignout = () => { 
  dispatch(signout());
};

 return (
<View style={responsivestyle.mainCon}>
{/* profile */}
<TouchableOpacity style={responsivestyle.accounttouch}
    onPress={() => navigation.navigate('Account')}>
<View style={responsivestyle.accountimageview}>
<Image 
    style={responsivestyle.image}
    source={
       profileImage === ''
     ? require('../../assets/images/profile-pic.png')
      : {uri: profileImage}
    }
      />
        </View>
<View style={{marginLeft:15,width:'65%'}}>
   <Text style={{color:'black'}} >{firstName} {lastName}</Text>
   <Text style={{color:'black'}}>{email}</Text>
   
</View>
</TouchableOpacity>
{/* drawer content */}
<View style={{marginVertical:15}}>
  <View>
    {contents.map((item,index)=>{
      return(

      
    <TouchableOpacity 
      key={item.itemId}
      onPress={() => navigation.navigate(item.navigateTo)}
      style={
      responsivestyle.drawerView}> 
      <View style={
      responsivestyle.drawerInner
      }>
      <Image source={item.icon} 
       style={responsivestyle.icon}/>
       <Text style={responsivestyle.drawerText}>{item.itemName}</Text>
      </View>
      <Image source={require('../../assets/images/arrow-right.png')} 
       style={responsivestyle.iconSecond}/>
       </TouchableOpacity>
     );
    })}
   
  </View>
</View>
{/* Logout*/ }

 <TouchableOpacity onPress={handlesignout}
 style={responsivestyle.logoutview}>
 <Image 
   source={require('../../assets/images/arrow-right.png')} 
   style={[responsivestyle.icon,responsivestyle.arrow]}  />         
    <Text style={responsivestyle.logoutText}>SignOut</Text>
    </TouchableOpacity>
{/*contact support */}
<View style={responsivestyle.supportView}>
  <Text style={responsivestyle.supportHead}>Contact Support</Text>
  <Text style={responsivestyle.supportContent}>
    If you have any problem with the app,feel free to 
    contact our 24 hours support system.
  </Text>

<View style={responsivestyle.supportTouch}>
  <Text style={responsivestyle.supportText}>contact</Text>
</View>
</View>
</View>

);
 };

export default CustomDrawer;

