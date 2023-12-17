import {View,Text,Image} from 'react-native';
import { useDimensionContext } from '../../context';
import { useNavigation } from '@react-navigation/native';
import {useEffect, useRef, useState} from 'react';
import Commonheaderleft from '../../components/Commonheaderleft';
import Commonheaderright from '../../components/Commonheaderright';
import style from './style';
import StarRating from 'react-native-star-rating-widget';
import { ScrollView } from 'react-native-gesture-handler';
import ActionSheet from "react-native-actions-sheet";
import CustomTextinput from '../../components/CustomTextinput';
import CustomBotton from '../../components/CustomButton';

const Review = () => {
    const dimensions = useDimensionContext();
    const navigation = useNavigation();
    const responsiveStyle = style(
        dimensions.windowWidth,
        dimensions.windowHeight,
        dimensions.isportrait,
      );
    const [rating,setRating] = useState(0); 
    const actionsheetRef = useRef(null);
     useEffect(() => {
     navigation.setOptions({
     headerLeft: () => <Commonheaderleft type="back"  />,
     headerRight: () => (<Commonheaderright plus={true}
              handleplusIcon={openActionSheet} />
                  ),
              title: 'Reviews',
                     });
                    }, []);
          const openActionSheet = () => {
            actionsheetRef.current.show();
          };           
    return (
        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={responsiveStyle.container}>
          <View>
            <View style={responsiveStyle.reviewbox}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image source={require('../../assets/images/profile-pic.png')}
         style={{height:40,
                 width:40,
                 resizeMode:'contain',
                 overflow:'hidden',
                 borderRadius:15}}/>
    
    <View> 
         <Text style={{color:"black",fontSize:15,marginLeft:10}}>Rentric Henwork</Text>
        <StarRating
                  starSize={20}
                  rating={rating}
                  onChange={setRating}
                />
                </View>
       </View>
  <Text style={{color:"#999999",fontSize:15}}>
        Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been 
        the industrys standard dummy text ever since the 
        1500s,when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book</Text>
</View>
    </View>
     <ActionSheet ref={actionsheetRef}>
       <View style={{padding:20,backgroundColor:'gray'}}>
        <Text style={{fontSize:25,lineHeight:50, color:'black'}}> write a review</Text>
        <StarRating
                  starSize={40}
                  rating={rating}
                  onChange={setRating}
                />
        <CustomTextinput placeholder="write here" multiline={true}/>
        <CustomBotton buttonText={'submit review'} type ='primary' />
       </View>
     </ActionSheet>
     </ScrollView>
    );
};
export default Review;