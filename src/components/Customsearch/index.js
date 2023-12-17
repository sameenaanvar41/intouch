import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import style from "./style";
import { useDimensionContext } from "../../context";
import colors from "../common/colors";
import { TouchableOpacity } from "react-native";
import { useEffect } from "react";

const Customsearch = (props) => {
  const { filter,placeholder,mike=true,onChangeText={} } = { ...props };
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight
  );
  return (
    <View
      style={[
        filter ? responsiveStyle.newContainer : responsiveStyle.container,
      ]}
    >
      <View
        style={[filter ? responsiveStyle.newStyle : responsiveStyle.search]}
      >
        <View style={responsiveStyle.innerview}>
          <Image
            source={require("../../assets/images/search.png")}
            style={responsiveStyle.searchIcon}
          />

          <TextInput
            placeholder={placeholder ? placeholder : "Search here"}
            style={responsiveStyle.textInput}
            placeholderTextColor={'black'}
            selectionColor={'Green'}
            onChangeText={text => onChangeText(text)}
          />
          {mike ? 
        <Image
          source={require("../../assets/images/voice.png")}
          style={responsiveStyle.searchIcon}
        /> : null }

        </View>
              </View>
      {filter ? (
        <TouchableOpacity>
          <Text style={responsiveStyle.filter}>Filter</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Customsearch;
