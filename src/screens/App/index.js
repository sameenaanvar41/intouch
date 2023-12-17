import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Login';
import { NavigationContainer } from '@react-navigation/native';
import Signup from '../Signup';
import Loginphone from '../Loginphone';
import Home from '../Home';
import { DimensionContext, DimensionContextProvider, DimensionProvider } from '../../context';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../Categories';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '../Cart';
import CustomDrawer from '../../components/CustomDrawer';
import CustomFooter from '../../components/CustomFooter';
import Search from '../Search';
import Offers from '../Offers';
import Orders from '../Orders';
import Wishlist from '../Wishlist';
import Account from '../Account';
import style from './style';
import { Image,TouchableOpacity} from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { store } from '../../storage/store';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Splash from '../Splash';
import Shop from '../Shop';
import Productdetails from '../Productdetails';
import Review from '../Review';
import Addaddress from '../Addaddress';
import Orderdetails from '../Orderdetails';

const Drawer =  createDrawerNavigator(); 
const AppDrawer = () => {
  return(
  <Drawer.Navigator 
 //  options={{ headerShown: false }}
   // initialRouteName='MyFooter' 
  drawerContent={props=> <CustomDrawer {...props}/>}
    screenOptions={{
      headerTitleAlign:'left',
      headerTitleStyle:style.title,
      headerStyle:{
      height:70,
      }
     /* headerLeft: props => {
        return (
          <TouchableOpacity style={{paddingleft:15}}>
             <Image source={require('../../assets/images/left-arrow.png')} 
              style={{width:25,height:23,resizeMode:'contain'}}
            />
            </TouchableOpacity>
        );
      },*/
    }}>
    <Drawer.Screen name='MyFooter'component={AppFooter} 
         options={{headerShown: false}}
    /> 
    <Drawer.Screen name='Categories'component={Categories} /> 
    <Drawer.Screen name='Orders'component={Orders} />
    <Drawer.Screen name='Orderdetails'component={Orderdetails} />

    <Drawer.Screen name='Wishlist'component={Wishlist} />
    <Drawer.Screen name='Account'component={Account} />
    <Drawer.Screen name='Shop'component={Shop}  />
    <Drawer.Screen name='Productdetails'component={Productdetails}  />
    <Drawer.Screen name='Review'component={Review}  />
    <Drawer.Screen name='Addaddress'component={Addaddress}  />

  </Drawer.Navigator>
  );
};
 
const Footer = createBottomTabNavigator();

const AppFooter = () => {
  return(
  <Footer.Navigator  
      tabBar={props=> <CustomFooter {...props}/>}
      screenOptions={{
     // headerShown: false,
      headerTitleAlign:'left',
      headerTitleStyle:style.title,
      headerStyle:{
        height:70,
        }
  
       }}>
    <Footer.Screen name='Home'component={Home} 
     // Options={{headerShown:false}}
    /> 
    <Footer.Screen name='Categories'component={Categories} 
     />
    <Footer.Screen name='Search'component={Search}/>
    <Footer.Screen name='offers'component={Offers}/>
    <Footer.Screen name='cart'component={Cart}/>
  </Footer.Navigator>
 );
};

const Stack = createNativeStackNavigator();

const AppNavigation =()=> {
    const [loading,setloading]=useState(true);
    const {isLoggedIn} = useSelector(state => state);
   /* useEffect ( () => {
     setTimeout(() => {
     setloading(false);
     },2000);
    },[]);*/
    useEffect ( () => {
      setTimeout(() => {
      setloading(false);
      },2000);
     },[isLoggedIn]);
   return (
   
   <DimensionContextProvider>  
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}
      >
        {loading ? 
        (<Stack.Screen name="Splash" component={Splash} />
          ) : (
            <>
      {isLoggedIn ? (
            <Stack.Screen name="MyDrawer" component={AppDrawer} />
          ) : (
            <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="Loginphone" component={Loginphone} />
          </>
        )}
        </>
        )}
    </Stack.Navigator>
    </NavigationContainer>
    </DimensionContextProvider>
  );
};
  const App = () => {
    return(
    <Provider store={store}>
    <AppNavigation />
    </Provider>
          );
      };
        
      export default App;