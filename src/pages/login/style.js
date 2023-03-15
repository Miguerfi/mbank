import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";

const loginStyle = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: responsiveHeight(5),
    marginTop: 10,
    backgroundColor: "#830ad1",
    width: responsiveWidth(30),
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttontext: {
    fontWeight: "bold",
    fontSize: RFValue(15),
    color: "white",
  },
  textInput: {
    fontSize: RFValue(18),
    backgroundColor: "#efefef",
    color: "black",
    fontWeight: "bold",
    height: responsiveHeight(5),
    width: responsiveWidth(50),
    borderRadius: 50,
    marginTop: 10,
  },
  createText: {
    color: "#830ad1",
  },
  rememberMeContainer:{
    marginLeft:-170,
    marginBottom:10
  },
  rememberMeText:{
    position:'absolute',
    marginLeft:30,
    fontWeight:'400'
  },

});

export default loginStyle;
