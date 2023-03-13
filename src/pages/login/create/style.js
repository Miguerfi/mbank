import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";

const createaccountStyle = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: responsiveHeight(6),
    marginTop: 10,
    backgroundColor: "#830ad1",
    width: responsiveWidth(45),
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: RFValue(10, Dimensions.get("screen").width),
    color: "white",
    fontWeight: "bold",
  },
  textBox: {
    backgroundColor: "#efefef",
    height: 30,
    width: 150,
    borderRadius: 50,
    marginTop: 15,
  },
});

export default createaccountStyle;
