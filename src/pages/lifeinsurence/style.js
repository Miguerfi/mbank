import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const discoverStyle = StyleSheet.create({
  images: {
    height: 150,
    width: 225,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
  },
  containerText:{
    fontWeight:'bold',
    fontSize:RFValue(16),
    marginLeft:20,
    marginBottom:10,
  }
});

export default discoverStyle;
