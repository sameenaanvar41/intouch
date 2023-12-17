import { StyleSheet } from "react-native";
import colors from "../../components/common/colors";

const style = (width, height) =>
  StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 15
    },
    newContainer: {
      flexDirection: 'row',
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 15,
      margin: 10
    },
    search: {
      borderWidth: 1,
      borderColor: colors.primaryGreen,
      backgroundColor: colors.secondaryGreen,
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical:1,
      width: width * 0.95,
  
    },
    newStyle : {
      borderWidth: 1,
      borderColor: colors.primaryGreen,
      backgroundColor: colors.secondaryGreen,
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical:1,
      width: width * 0.82,
    },
    searchIcon: {
      height: 25,
      width: 25,
      resizeMode: "contain",
    },
    textInput: {
        flex:1,
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        marginLeft: 15, 
        color: colors.primaryGreen
    },
    filter: {
      fontFamily: 'Lato-Regular',
      fontSize: 18,
     // marginLeft: 10, 
      color: colors.primaryGreen
    },
    innerview: {
        flexDirection: 'row',
        alignItems: 'center'
    }
  });

export default style;
