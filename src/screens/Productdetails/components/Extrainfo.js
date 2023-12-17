import { View, Text } from "react-native";
import React, { useState } from "react";
import { useDimensionContext } from "../../../context";
import style from "../style";
import colors from "../../../components/common/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import Accordion from "react-native-collapsible/Accordion";

const ExtraInfo = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight
  );

  const [curActiveSections, setActiveSections] = useState([0]);
  const DetailsArray = [
    {
      title: "Manufacture Details",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      title: "Product Details",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      title: "Features and Details",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
  ];

  const _renderHeader = (sections) => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={responsiveStyle.descriptionhead}>{sections.title}</Text>
        <AntDesign name="down" size={25} color={colors.grey} />
      </View>
    );
  };

  const _renderContent = (sections) => {
    return (
      <View>
        <Text style={responsiveStyle.description}>{sections.content}</Text>
      </View>
    );
  };

  const _updateSections = (activeSections) => {
    setActiveSections(activeSections);
  };
  return (
    <>
      <Accordion
        activeSections={curActiveSections}
        sections={DetailsArray}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={_updateSections}
        underlayColor={'transparent'}
        sectionContainerStyle={{
            paddingVertical: 10, 
            borderBottomColor: colors.grey, 
            borderBottomWidth: 1
            }}
           />
    </>
  );
};

export default ExtraInfo;




/*import {View,Text} from "react-native";
import style from "../style";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDimensionContext } from "../../../context";
import { useState } from "react";
import Accordion from 'react-native-collapsible/Accordion';
const Extrainfo = props => {
const dimensions = useDimensionContext();

const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isportrait,
  );
  const [curactiveSection,setactiveSection] = useState();
  const Detailsarray = [
    {
        title:"manufacture Details",
        content:"Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        title:"Product Disclaimer",
        content:"Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        title:"Feature and  Details",
        content:"Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    ];
    const _renderHeader = () => {
      return (
      <View style={{
              flexDirection:'row',
              justifyContent:'space-between',
              alignItems:'center'}}>
        <Text style={responsiveStyle.descriptionhead}>{sections.title}</Text>
        <AntDesign name="down" size={20} color='gray'  />

      </View>
      );
    };
    const _renderContent = () => {
        return ( <View>
            <Text>{sections.content}</Text>
             </View>
             );
      };
      const _updateSections = activeSection => {
        setactiveSection(curactiveSection);
      };
 
  return (
  <>
  <Accordion
        activeSections={curactiveSection}
        sections={Detailsarray}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={_updateSections}
     />
   </>

  ); 
};
export default Extrainfo;
*/