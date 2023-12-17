import React from 'react-native';
import { View,Text } from 'react-native';
import style from './style';
import { useDimensionContext } from '../../context';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Commonbutton = (props) =>{
const dimensions= useDimensionContext();
const responsivestyle=style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    );
    
return(
    <TouchableOpacity
        onPress={props.onButtonPress}
        style={responsivestyle.container}>
        <Text style={responsivestyle.text}>{props.buttontext}</Text>
    </TouchableOpacity>
);
}
export default Commonbutton;