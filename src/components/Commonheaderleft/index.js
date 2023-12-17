import {  Image, Text} from "react-native";
import style from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useDimensionContext } from "../../context";

const Commonheaderleft = props => {
    
const navigation=useNavigation();
const dimension=useDimensionContext();  
const responsivestyle=style(
        dimension.windowWidth,
        dimension.windowHeight,
        );
    const  handleclick=()=>{
       if(props.type==='back') {
        if(props.action){
            props.action();
        }else{
            navigation.goBack();
        }
       }else{
        navigation.toggleDrawer();
       }
    };

return(
    <TouchableOpacity
    style={responsivestyle.padding}
    onPress={handleclick}>
{/*{()=> navigation.toggleDrawer()}>*/}
    <Image 
    source={props.type==='back' 
    ? require('../../assets/images/left-arrow.png')
    : require('../../assets/images/drawer.png')
       }
     style={responsivestyle.image}  
       />
    </TouchableOpacity>
    
);
}
export default Commonheaderleft;