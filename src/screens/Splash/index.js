import {view,Image, View} from "react-native";
const Splash = () => {
    return (
        <View style={{flex:1,
               justifyContent:'center', 
               backgroundColor:'white',
               alignItems:'center'}}>
            <Image source={require('../../assets/images/logo.webp')}
             style={{width:150,height:150,resizeMode:'contain'}}
/>
        </View>
    );
};
export default Splash;