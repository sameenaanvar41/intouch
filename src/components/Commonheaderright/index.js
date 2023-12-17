import { View,Text, Image} from "react-native";
import style from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useDimensionContext } from "../../context";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from "react-redux";
import Cart from "../../screens/Cart";
import ActionSheet from "react-native-actions-sheet";

const Commonheaderright = props => {
const navigation=useNavigation();
const cartCount = useSelector(state => state.cartCount);
const dimension=useDimensionContext();  
const responsivestyle=style(
        dimension.windowWidth,
        dimension.windowHeight,
        );
const  handleclick = async type => {
    if(type==='cart'){
        navigation.navigate('cart');
    }else if(type==='share') {
        const result = await Share.share({
            message:
              'React Native | A framework for building native apps using React',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
    }
    };
return(
    <View style={responsivestyle.flexstyle}>
    { props.share ? (
    <TouchableOpacity
    style={responsivestyle.padding}
    onPress={ ()=>handleclick('share')}>
    <EvilIcons name="share-google" size={45} color='#000'  />
    </TouchableOpacity>
    ) : null }

    { props.plus ? (
    <TouchableOpacity
    style={responsivestyle.padding}
    onPress={props.handleplusIcon}>
    <Feather name="plus-square" size={35} color='#000'  />
    </TouchableOpacity>
    ) : null }

    { props.cart ? (
    <TouchableOpacity
    style={responsivestyle.padding}
    onPress={ () => handleclick('cart')}>
        <>
    <View style={responsivestyle.cartcount}>
     <Text style={responsivestyle.count}>       
         {cartCount}
     </Text>
     </View>
    <Image 
    source={require('../../assets/images/cart.png')
       }
     style={responsivestyle.image}  
       />  
       </>
    </TouchableOpacity>
    ) : null }
    </View>
);
};
export default Commonheaderright;